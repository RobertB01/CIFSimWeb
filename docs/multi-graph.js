function drawAutomaton(automaton, container) {
    const nodes = automaton.locations.map(loc => ({
        id: loc.id,
        label: loc.name
            ? loc.name.length > 15
                ? loc.name.slice(0, 15) + "..."
                : loc.name
            : "   ",
        color: {
            border: "black"
        },
        borderWidth: 2,
        shape: "ellipse",
        shapeProperties: loc.marked ? { borderDashes: [5, 5] } : {},
        shadow: loc.initial
            ? {
                enabled: true,
                color: "orange",
                size: 6,
                x: 0,
                y: 0
            }
            : false
    }));

    const selfLoopTracker = {};
    const hasOnlySelfLoops = automaton.edges.every(edge => edge.from === edge.to);
    if (hasOnlySelfLoops) {
        console.log(`Automaton ${automaton.name} has only self-loops.`);
    }


    if (!window.automatonProperties) window.automatonProperties = {};
    window.automatonProperties[automaton.name] = { hasOnlySelfLoops };

    const edges = automaton.edges.map(edge => {
        const isSelfLoop = edge.from === edge.to;

        if (isSelfLoop) {
            if (!selfLoopTracker[edge.from]) {
                selfLoopTracker[edge.from] = 0;
            }
            selfLoopTracker[edge.from]++;
        }

        const selfLoopIndex = isSelfLoop ? selfLoopTracker[edge.from] : 0;
        const event = automaton.events.find(event => event.id === edge.event);
        const eventName = event?.name || "";
        const isControllable = event?.controllable !== false;

        const isPrimarySelfLoop = isSelfLoop && selfLoopIndex === 1;

        let edgeOptions = {
            id: edge.id,
            from: edge.from,
            to: edge.to,
            guard: edge.guard,
            updates: edge.updates,
            guardExpression: edge.guardExpression,
            label: eventName,
            arrows: "to",
            color: isPrimarySelfLoop
                ? { color: "black", highlight: "#000000", inherit: false }
                : { color: "rgba(0,0,0,0)", highlight: "rgba(0,0,0,0)", inherit: false },
            width: isPrimarySelfLoop ? 3 : 0.1,
            font: {
                align: 'horizontal', size: 14
            },
            dashes: isControllable ? false : true,
            smooth: isSelfLoop
                ? {
                    type: "cubicBezier",
                    roundness: 10 + selfLoopIndex * 0.2
                }
                : {
                    type: "curvedCW",
                    roundness: 0.3
                },
            selfReference: isSelfLoop
                ? {
                    size: 20 + (selfLoopIndex * 15),
                    angle: Math.PI / 2,
                    offset: 600
                }
                : undefined
        };

        return edgeOptions;
    });

    const automatonContainer = document.createElement("div");
    automatonContainer.className = "automaton-container";

    automatonContainer.style.width = `${350 + automaton.locations.length * 40}px`;
    automatonContainer.style.height = `200px`;

    const automatonLabel = Object.assign(document.createElement("b"), {
        className: "automaton-label",
        textContent: automaton.kind === null
            ? `${automaton.name}`
            : `${automaton.name} (${automaton.kind === "Supervisor" ? "Synth." : automaton.kind})`
    });

    automatonContainer.appendChild(automatonLabel);

    const variableDisplay = document.createElement("div");
    variableDisplay.id = `variableDisplay_${automaton.name}`;
    variableDisplay.className = "variable-display";
    automatonContainer.appendChild(variableDisplay);

    automaton.monitors.forEach(monitor => {
        monitor.events.forEach(event => {
            const monitordisplay = Object.assign(document.createElement("div"), {
                id: `monitorDisplay_${monitor.id}`,
                className: "monitor-display"
            });

            monitordisplay.append(
                Object.assign(document.createElement("img"), {
                    src: "monitor-icon.png", 
                    alt: "Monitor Icon",
                    className: "monitor-icon"
                }),
                Object.assign(document.createElement("span"), {
                    className: "event-name",
                    textContent: ` ${event.name}`
                })
            );

            automatonContainer.appendChild(monitordisplay);
        });
    });


    const networkContainer = document.createElement("div");
    networkContainer.id = `network_${automaton.name}`;
    networkContainer.style.width = "100%";
    networkContainer.style.height = "100%";
    automatonContainer.appendChild(networkContainer);

    container.appendChild(automatonContainer);

    if (hasOnlySelfLoops) {
        networkContainer.style.display = "none"; 

        const eventListContainer = document.createElement("div");
        eventListContainer.className = "event-list-container";
        eventListContainer.id = `eventListContainer_${automaton.name}`;

        let maxTextWidth = 0;

        automaton.edges.forEach(edge => {
            const event = automaton.events.find(e => e.id === edge.event);
            const eventName = event?.name || "Unnamed Event";

            const eventItem = document.createElement("div");
            eventItem.className = "event-item"; 
            eventItem.textContent = eventName;

            eventItem.setAttribute('data-event-label', eventName);
            eventItem.setAttribute('data-automaton-name', automaton.name);

            const syncWith = automatonNames
                .filter(otherName => otherName !== automaton.name)
                .filter(otherName => {
                    const otherEdges = automatonEdges[otherName]?.get() || [];
                    return otherEdges.some(otherEdge => otherEdge.label === eventName);
                });

            const tooltipContent = `
                Event: ${eventName}
                Guard: ${edge.guard ? `${edge.guardExpression}` : "-"}
                Update: ${edge.updates?.length ? edge.updates.map(upd => `${upd.updateExpression}`).join(", ") : "-"}
                Syncs with: ${syncWith.length > 0 ? syncWith.join(", ") : "-"}
            `;
            eventItem.title = tooltipContent;

            document.body.appendChild(eventItem);
            const textWidth = eventItem.offsetWidth;
            maxTextWidth = Math.max(maxTextWidth, textWidth);
            document.body.removeChild(eventItem);

            eventListContainer.appendChild(eventItem);
        });

        const nodeRect = document.createElement("div");
        const numEvents = automaton.edges.length;

        nodeRect.className = "node-rect"; 
        nodeRect.textContent = "";

        eventListContainer.style.width = `${maxTextWidth + 50}px`;
        nodeRect.style.width = `${40}px`;

        automatonContainer.appendChild(eventListContainer);
        automatonContainer.appendChild(nodeRect);

        automatonContainer.style.width = `${maxTextWidth + 150}px`;
        
        automatonContainer.style.height = `${numEvents * 25 + 150}px`;

    }

    const data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };

    automatonNodes[automaton.name] = data.nodes;
    automatonEdges[automaton.name] = data.edges;

    const options = {
        layout: {
            hierarchical: {
                direction: "UD",
                sortMethod: "directed",
                nodeSpacing: 150,
                levelSeparation: 200
            }
        },
        physics: {
            enabled: false
        },
        interaction: {
            dragNodes: true,
            selectConnectedEdges: false
        },
        edges: {
            smooth: {
                type: "curvedCW",
                roundness: 0.2
            },
            font: { align: "middle" },
            arrows: {
                to: { enabled: true, scaleFactor: 1.0 }
            }
        },
        nodes: {
            shape: 'ellipse',
            font: { size: 16, face: 'arial' }
        }
    };

    const network = new vis.Network(networkContainer, data, options);

    automatonNetworks[automaton.name] = network;
}


function updateVariableDisplay() {
    automatonNames.forEach(automatonName => {
        const variableDisplay = document.querySelector(`#variableDisplay_${automatonName}`);
        variableDisplay.innerHTML = "";
        const variables = getVariables(spec).filter(variable => {
            return variable.name.startsWith(`${automatonName}_`) && variable.name !== `${automatonName}_`;
        });

        let variableText = "";
        variables.forEach((variable, index) => {
            let variableName = variable.name.replace(`${automatonName}_`, "").replace("_", "");
            variableText += `${variableName} = ${variable.value}`;
            if (index < variables.length - 1) {
                variableText += "\n"; 
            }
        });

        const variableItem = document.createElement("div");
        variableItem.style.whiteSpace = "pre";
        variableItem.textContent = variableText;

        variableDisplay.appendChild(variableItem);
    });
}


function highlightCurrentState() {
    let availableEvents = getAvailableEdges(spec);

    automatonNames.forEach(automatonName => {
        const currentStateProperty = `spec.${automatonName}_`;
        let currentStateValue;
        try {
            const currentState = eval(currentStateProperty);
            if (currentState !== undefined) {
                currentStateValue = specUtils.valueToStr(currentState);
            } else {
                currentStateValue = " ";
            }
        } catch (e) {
            currentStateValue = " ";
        }

        const hasOnlySelfLoops = window.automatonProperties && window.automatonProperties[automatonName]?.hasOnlySelfLoops;
        const nodes = automatonNodes[automatonName];
        const edges = automatonEdges[automatonName];
        const network = automatonNetworks[automatonName];

        if (nodes && edges && network) {
            // Reset colors
            nodes.forEach(node => {
                nodes.update({ id: node.id, color: { background: "white" } });
            });

            edges.forEach(edge => {
                edges.update({
                    id: edge.id,
                    color: { color: "black", highlight: "black" },
                    shadow: { enabled: false },
                    width: 2,
                });
                delete edge.title;
            });

            let currentNode;
            if (nodes.length === 1) {
                currentNode = nodes.get()[0];
            } else {
                currentNode = nodes.get({
                    filter: node => (node.label === currentStateValue || (node.label === " " && currentStateValue === " "))
                })[0];
            }

            if (currentNode) {
                nodes.update({ id: currentNode.id, color: { background: "lime" } });

                if (!hasOnlySelfLoops) {
                    const originatingEdges = edges.get({
                        filter: edge => edge.from === currentNode.id
                    });

                    originatingEdges.forEach(edge => {
                        const edgeLabel = edge.label.includes(".") ? edge.label.split(".").pop() : edge.label;

                        const isAvailable = availableEvents.some(event => {
                            const eventLabel = event.includes(".") ? event.split(".").pop() : event;
                            return eventLabel === edgeLabel;
                        });

                        const newColor = isAvailable ? "darkgreen" : "darkred";
                        const shadowSettings = isAvailable
                            ? { enabled: true, color: "lime", size: 8, x: 0, y: 0 }
                            : { enabled: true, color: "red", size: 8, x: 0, y: 0 };

                        const syncWith = automatonNames
                            .filter(otherName => otherName !== automatonName)
                            .filter(otherName => {
                                const otherEdges = automatonEdges[otherName].get();
                                return otherEdges.some(otherEdge => otherEdge.label === edge.label);
                            });

                        const tooltipContent = `Event: ${edge.label}
                        Guard: ${edge.guard ? ` ${edge.guardExpression}` : "-"}
                        Update: ${edge.updates.length ? edge.updates.map(upd => `${upd.updateExpression} `) : "-"}
                        Syncs with: ${syncWith.length > 0 ? syncWith.join(", ") : "-"}`;

                        edges.update({
                            id: edge.id,
                            color: { color: newColor, highlight: newColor },
                            shadow: shadowSettings,
                            width: 2,
                            title: tooltipContent
                        });
                    });

                    const edgeIds = originatingEdges.map(edge => edge.id);

                    network.off("doubleClick");
                    network.on("doubleClick", function (params) {
                        if (params.edges.length > 0) {
                            const clickedEdge = edges.get(params.edges[0]);
                            if (clickedEdge && edgeIds.includes(clickedEdge.id)) {
                                const selectedEdge = edges.get(params.edges[0]);
                                if (selectedEdge) {
                                    updateDropdownWithSelectedEvent(selectedEdge.label);
                                    const executeButton = document.getElementById("execute-event");
                                    if (executeButton) {
                                        executeButton.click();
                                    }
                                }
                            }
                        }
                    });
                } else {
                   
                    const eventListContainer = document.getElementById(`eventListContainer_${automatonName}`);
                    if (eventListContainer) {
                        const eventItems = eventListContainer.querySelectorAll('.event-item');
                        eventItems.forEach(eventItem => {
                            
                            eventItem.style.backgroundColor = "";
                            eventItem.style.color = "";
                            const eventLabel = eventItem.getAttribute('data-event-label');
                            const eventNameShort = eventLabel.includes(".") ? eventLabel.split(".").pop() : eventLabel;

                            const isAvailable = availableEvents.some(event => {
                                const eventLabelShort = event.includes(".") ? event.split(".").pop() : event;
                                return eventLabelShort === eventNameShort;
                            });

                            if (isAvailable) {
                                eventItem.style.backgroundColor = "#00990a";
                                eventItem.style.color = "black";
                                eventItem.style.padding = "2px 10px"; 
                            } else {
                                eventItem.style.backgroundColor = "#910000";
                                eventItem.style.color = "white";
                                eventItem.style.padding = "2px 10px";
                            }
                        });

                        
                        if (!eventListContainer.dataset.dblclickAttached) {
                            eventListContainer.dataset.dblclickAttached = "true";
                            eventListContainer.addEventListener('dblclick', function (evt) {
                                const closestEventItem = evt.target.closest('.event-item');
                                if (closestEventItem) {
                                    const eventLabel = closestEventItem.getAttribute('data-event-label');
                                    const eventNameShort = eventLabel.includes(".") ? eventLabel.split(".").pop() : eventLabel;

                                    updateDropdownWithSelectedEvent(eventNameShort);
                                    const executeButton = document.getElementById("execute-event");
                                    if (executeButton) {
                                        executeButton.click();
                                    }
                                }
                            });
                        }
                    }
                }
            }
        }
    });
}

function synchronizeEventSelection(selectedEventLabel) {
    automatonNames.forEach(automatonName => {
        const edges = automatonEdges[automatonName];
        const nodes = automatonNodes[automatonName];
        const network = automatonNetworks[automatonName];

        if (edges && nodes && network) {
            const currentStateProperty = `spec.${automatonName}_`;
            const currentStateValue = specUtils.valueToStr(eval(currentStateProperty));

            if (currentStateValue !== undefined) {
                const currentNode = nodes.get({
                    filter: node => node.label === currentStateValue
                })[0];

                if (currentNode) {
                    const originatingEdges = edges.get({
                        filter: edge => edge.from === currentNode.id && edge.label === selectedEventLabel
                    });

                    const edgeIds = originatingEdges.map(edge => edge.id);
                    network.selectEdges(edgeIds);
                }
            }
        }
    });
}

function updateDropdownWithSelectedEvent(selectedEventLabel) {
    const eventsDropdown = document.getElementById('events-dropdown');
    const options = eventsDropdown.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedEventLabel || options[i].value.endsWith(selectedEventLabel)) {
            options[i].selected = true;
            return;
        }
    }
}
