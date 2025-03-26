function drawAutomaton(automaton, container) {
    const nodes = automaton.locations.map(loc => {
        // The display label is truncated to 15 characters
        const displayLabel = loc.name 
            ? (loc.name.length > 15 ? loc.name.slice(0, 15) + "..." : loc.name)
            : "   ";
    
        return {
            id: loc.id,
            label: "\u00A0" + displayLabel + "\u00A0",       // Visible label in the graph
            fullName: loc.name,        // Store the untruncated name here
            color: { border: "black" },
            borderWidth: 2,
            shape: "ellipse",
            shapeProperties: loc.marked ? { borderDashes: [5, 5] } : {}
        };
    });
    

    const selfLoopTracker = {};
    const hasOnlySelfLoops = automaton.edges.every(edge => edge.from === edge.to);

    // Store this information globally so highlightCurrentState() can access it
    if (!window.automatonProperties) window.automatonProperties = {};
    window.automatonProperties[automaton.name] = { hasOnlySelfLoops };
    const nodeLoopTracker = {};

    const edges = automaton.edges.map(edge => {
        const isSelfLoop = edge.from === edge.to;

        if (isSelfLoop) {
            if (!selfLoopTracker[edge.from]) {
                selfLoopTracker[edge.from] = 0;
            }
            selfLoopTracker[edge.from]++;
        }

        const selfLoopIndex = isSelfLoop ? selfLoopTracker[edge.from] : 0;
        let event;


        let eventName;
        let fullyQualifiedName;
        let eventObj;
        
        switch (edge.eventType) {
            case 'cross-automaton':
                const crossAutomaton = parsedData.automata.find(a => a.name === edge.eventAutomaton);
                const crossEvent = crossAutomaton.events.find(e => e.id === edge.event);
                eventObj = crossEvent;
                // Prefix the event name with the declaring automaton's name
                eventName = crossEvent.name || "Unnamed Event";
                fullyQualifiedName = `${crossAutomaton.name}.${eventName}`;
                eventName = fullyQualifiedName
                //console.log("Fully Qualified Name for Cross Automaton:", fullyQualifiedName);

                break;

            case 'owned':
                // Find the event in the current automaton
                const ownedEvent = automaton.events.find(e => e.id === edge.event);
                eventObj = ownedEvent;
                //console.log("Owned Event ID:", edge.event);
                //console.log("Owned Event:", ownedEvent);

                if (ownedEvent) {
                    // Use the event name without any prefix
                    eventName = ownedEvent.name || "Unnamed Event";
                    fullyQualifiedName = `${automaton.name}.${eventName}`;
                    //console.log("Fully Qualified Name for Owned Event:", fullyQualifiedName);
                } else {
                    // Handle case where owned event is not found
                    eventName = "Unnamed Event";
                    fullyQualifiedName = "Unnamed Event";
                    console.warn(`Owned event with ID ${edge.event} not found in automaton ${automaton.name}`);
                }
                break;

            case 'global':
                // Find the event in the global event map
                const globalEvent = globalEventMap[edge.event];
                eventObj = globalEvent;
                //console.log("Global Event ID:", edge.event);
                //console.log("Global Event:", globalEvent);

                if (globalEvent) {
                    // Use the event name without any prefix
                    eventName = globalEvent.name || "Unnamed Event";
                    fullyQualifiedName = eventName;
                } else {
                    // Handle case where global event is not found
                    eventName = "Unnamed Event";
                    fullyQualifiedName = "Unnamed Event";
                    console.warn(`Global event with ID ${edge.event} not found.`);
                }
                break;
        }

        //console.log("Final Event Name:", fullyQualifiedName);
        //console.log("eventname", eventName)


        const isControllable = eventObj?.controllable === true;
        const edgeIndex = automaton.edges.filter(e => e.from === edge.from && e.to === edge.to).indexOf(edge);

    
        


        let isPrimarySelfLoop = false;

        if (isSelfLoop) {
            if (!nodeLoopTracker[edge.from]) {
                nodeLoopTracker[edge.from] = {
                    foundFirstControllable: false,
                    foundFirstUncontrollable: false
                };
            }

            
            // Initialize if necessary
            const categoryKey = edge.controllable ? "controllable" : "uncontrollable";
            //console.log(categoryKey);
            // Check if we found first controllable or uncontrollable for *this node*
            if (edge.controllable && !nodeLoopTracker[edge.from].foundFirstControllable) {
                nodeLoopTracker[edge.from].foundFirstControllable = true;
                isPrimarySelfLoop = true;
            }
            if (!edge.controllable && !nodeLoopTracker[edge.from].foundFirstUncontrollable) {
                nodeLoopTracker[edge.from].foundFirstUncontrollable = true;
                isPrimarySelfLoop = true;
            }

        }
        //console.log(isPrimarySelfLoop)
        let edgeOptions = {
            id: edge.id,
            from: edge.from,
            to: edge.to,
            guard: edge.guard,
            updates: edge.updates,
            guardExpression: edge.guardExpression,
            label: `\u00A0${eventName}\u00A0`,
            full_label: fullyQualifiedName,
            arrows: "to",
            color: isPrimarySelfLoop
                ? { color: "black", highlight: "#000000", inherit: false }
                : { color: "black", highlight: "rgba(255, 255, 255, 0)", inherit: true},
            width: isPrimarySelfLoop ? 3 : 0.1,
            font: {
                align: 'horizontal', 
                size: 14,
                color:"black",
                strokeWidth: 5,
                strokeColor: "#f8f8f8"
            },
            dashes: isControllable ? false : true,
            controllable: isControllable,
            smooth: isSelfLoop
                ? {
                    type: "cubicBezier",
                    roundness: 10 + selfLoopIndex * 0.2
                }
                : {
                    type: "curvedCW",
                    roundness: 0.3 + (edgeIndex * 0.3)
                },
            isPrimarySelfLoop: isPrimarySelfLoop,
            isSelfLoop: isSelfLoop,
            selfReference: isSelfLoop
                ? {
                    size: 20 + (selfLoopIndex * 18),
                    angle: Math.PI / 2,
                    offset: 100
                }
                : undefined
        };

        return edgeOptions;
    });


    // Find the maximum number of self-loops for any single location
    const maxSelfLoops = Math.max(...Object.values(selfLoopTracker), 0);
    //console.log(`Max self-loops per location in automaton ${automaton.name}:`, maxSelfLoops);




    const automatonContainer = document.createElement("div");
    automatonContainer.className = "automaton-container";

    // Base size adjustments; these may be overridden if only self-loops exist
    automatonContainer.style.width = `${150 + automaton.locations.length * 30}px`;
    automatonContainer.style.height = `${161.72 + automaton.locations.length * 20 + maxSelfLoops * 18}px`;



    automatonContainer.id = automaton.name  + "-div";




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
                    src: "monitor-icon.png", // Replace with your PNG path
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
        networkContainer.style.display = "none"; // Hide the network visualization

        // Create event list container
        const eventListContainer = document.createElement("div");
        eventListContainer.className = "event-list-container";
        eventListContainer.id = `eventListContainer_${automaton.name}`;

        let maxTextWidth = 0;

        // Loop through edges and add event items
        automaton.edges.forEach(edge => {
            let eventName;

            switch (edge.eventType) {
                case 'cross-automaton':
                    const crossAutomaton = parsedData.automata.find(a => a.name === edge.eventAutomaton);
                    const crossEvent = crossAutomaton.events.find(e => e.id === edge.event);
                    // Prefix the event name with the declaring automaton's name

                    eventName = crossEvent.name || "Unnamed Event";
                    let fullyQualifiedName = `${crossAutomaton.name}.${eventName}`;
                    eventName = fullyQualifiedName
                break;

                case 'global':
                    console.log("isglobal")
                    let globalEvent = globalEventMap[edge.event];
                    eventName = globalEvent.name;
                break;

                case 'owned':
                    let event = automaton.events.find(e => e.id === edge.event);
                    eventName = event ? `${automaton.name}.${event.name}` : "Unnamed Event";
                break;


            }

           

            const eventItem = document.createElement("div");
            eventItem.className = "event-item"; // Class for styling
            eventItem.textContent = eventName;

            // Attach data attribute for later reference
            eventItem.setAttribute('data-event-label', eventName);
            eventItem.setAttribute('data-automaton-name', automaton.name);

            const syncWith = automatonNames
                .filter(otherName => otherName !== automaton.name)
                .filter(otherName => {
                    const otherEdges = automatonEdges[otherName]?.get() || [];
                    return otherEdges.some(otherEdge => otherEdge.full_label === eventName);
                });



                const tooltipContent = `
                Event: ${eventName}`
                + (edge.guard ? `\n    Guard: ${edge.guardExpression}` : "")
                + (edge.updates?.length ? `\n    Update: ${edge.updates.map(upd => upd.updateExpression).join(", ")}` : "")
                + (syncWith.length > 0 ? `\n    Syncs with: ${syncWith.join(", ")}` : "");
            
            eventItem.title = tooltipContent;

            // Temporarily append to measure width
            document.body.appendChild(eventItem);
            const textWidth = eventItem.offsetWidth;
            maxTextWidth = Math.max(maxTextWidth, textWidth);
            document.body.removeChild(eventItem);

            eventListContainer.appendChild(eventItem);
        });

        const nodeRect = document.createElement("div");
        const numEvents = automaton.edges.length;

        nodeRect.className = "node-rect"; // Class for styling
        nodeRect.textContent = "";

        eventListContainer.style.width = `${maxTextWidth + 50}px`;
        nodeRect.style.width = `${40}px`;

        automatonContainer.appendChild(eventListContainer);
        automatonContainer.appendChild(nodeRect);

        // Adjust the container size based on content
        automatonContainer.style.width = `${maxTextWidth + 150}px`;
        
        automatonContainer.style.height = `${numEvents * 25 + 150}px`;
        eventListContainer.addEventListener('click', function (evt) {
            const clickedItem = evt.target.closest('.event-item');
            if (clickedItem) {
                const eventLabel = clickedItem.getAttribute('data-event-label');
                console.log("Event item clicked:", eventLabel); // debug log
                selectEdgeByLabel(eventLabel, automaton.name);
                

            }
        });
    }

    const data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };

    automatonNodes[automaton.name] = data.nodes;
    automatonEdges[automaton.name] = data.edges;

    const baseOptions = {
        interaction: { dragNodes: true, selectConnectedEdges: false },
        edges: {
          smooth: { type: "curvedCW", roundness: 0.2 },
          font: { align: "middle", face: "Tahoma" },
          arrows: { to: { enabled: true, scaleFactor: 0.8 } },

        },
        nodes: { shape: "ellipse", font: { size: 16, face: "Tahoma" } }
      };
      

    
    // Conditionally add layout/physics based on node count
    if (automaton.locations.length > 10) {
        Object.assign(baseOptions, {
            layout: {},
            physics: {
                enabled: true,
                solver: "repulsion",
                stabilization: { iterations: 100 }
            }
        });
        // Override the default smooth setting so that edges are straight.
        Object.assign(baseOptions.edges, {
            smooth: false
        });
    } else {
        Object.assign(baseOptions, {
            layout: {
                hierarchical: {
                    direction: "UD",
                    sortMethod: "directed",
                    nodeSpacing: 150,
                    levelSeparation: 200
                }
            },
            physics: { enabled: false }
        });
        automatonContainer.style.height = `${161.72 + Math.pow(2, automaton.locations.length) * 0.86 + maxSelfLoops * 18}px`;
        automatonContainer.style.width = `${150 + automaton.locations.length * 100}px`;
    }
    const network = new vis.Network(networkContainer, data, baseOptions);



    // Attach the listener on the newly created network
    // network.on("selectEdge", (params) => {
    //     console.log("selectEdge event fired!", params);
    //     const clickedEdgeId = params.edges[0];
    //     // automatonEdges[automaton.name] is the Vis DataSet:
    //     const clickedEdge = automatonEdges[automaton.name].get(clickedEdgeId);
    //     if (clickedEdge && !clickedEdge.isPrimarySelfLoop && clickedEdge.isSelfLoop) {
    //         network.unselectAll();  // Clears all selections

    //     }
    // });
    automatonNetworks[automaton.name] = network;
    attachEdgeSelectionListener(network, automaton.name);


    addCanvasOverlay(automaton, automaton.name, networkContainer, network);


}


function updateVariableDisplay() {
    automatonNames.forEach(automatonName => {
        //console.log(automatonName);
        const variableDisplay = document.querySelector(`#variableDisplay_${automatonName}`);
        variableDisplay.innerHTML = "";
        const variables = getVariables(spec).filter(variable => 
            variable.name.startsWith(`${automatonName}_`) && variable.name !== `${automatonName}_`
        );
        
        //console.log(variables)

        // Build a multi-line string of variables
        let variableText = "";
        variables.forEach((variable, index) => {
            let variableName = variable.name.replace(`${automatonName}_`, "").replace("_", "");
            variableText += `${variableName} = ${variable.value}`;
            if (index < variables.length - 1) {
                variableText += "\n"; // Add a new line for the next variable
            }
        });

        // Create a div that preserves whitespace so that line breaks are shown
        const variableItem = document.createElement("div");
        variableItem.style.whiteSpace = "pre";
        variableItem.textContent = variableText;

        variableDisplay.appendChild(variableItem);
    });
}


function highlightCurrentState() {
     availableEvents = getAvailableEdges(spec);

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
            // Reset node colors
            nodes.forEach(node => {
                nodes.update({ id: node.id, color: { background: "white" } });
            });

            // Reset edge colors
            edges.forEach(edge => {
                const isSelfLoop = (edge.from === edge.to) || (edge.selfReference !== undefined);

                if (isSelfLoop) {
                    edges.update({
                        id: edge.id,
                        color: edge.isPrimarySelfLoop
                            ? { color: "#5c5c5c", highlight: "#000000", inherit: false }
                            : { color: "rgba(0,0,0,0)", highlight: "rgba(255, 255, 255, 0)", inherit: true },
                        shadow: { enabled: false },
                        width: 2,
                        font: {
                            background: "transparent",
                            color: "black",
                            strokeWidth: 5,
                            strokeColor: "#f8f8f8"
                        }
                    });
                } else {
                    edges.update({
                        id: edge.id,
                        color: { color: "#5c5c5c", highlight: "black" },
                        shadow: { enabled: false },
                        font: { color: "black", strokeWidth: 5, strokeColor: "#f8f8f8" },
                        width: 2
                    });
                }
                delete edge.title;
            });

            let currentNode;
            if (nodes.length === 1) {
                currentNode = nodes.get()[0];
            } else {
                currentNode = nodes.get({
                    filter: node => (node.fullName === currentStateValue || (node.fullName === " " && currentStateValue === " "))
                })[0];
            }

            if (currentNode) {
                nodes.update({ id: currentNode.id, color: { background: "lime" } });

                if (!hasOnlySelfLoops) {
                    const originatingEdges = edges.get({
                        filter: edge => edge.from === currentNode.id
                    });

                    originatingEdges.forEach(edge => {
                        const edgeFQN = edge.full_label || edge.label;
                        const isAvailable = availableEvents.some(ev => ev === edgeFQN);
                        // If the event is in purpleEvents, override red colors with purple.



                        let newColor = isAvailable ? "darkgreen" : "darkred";
                        const shadowSettings = isAvailable
                            ? { enabled: true, color: "lime", size: 8, x: 0, y: 0 }
                            : { enabled: true, color: "red", size: 8, x: 0, y: 0 };

                            const baseLabel = edge.label.replace(/\s*(?::|🚫\s*\d+)\s*$/, "");

                            if (restrictionOverlayChecked && purpleEvents && purpleEvents.some(item => item.eventName === edgeFQN)) {
                                if (!isAvailable) {
                                    // Override color and shadow for blocked edges
                                    newColor = "purple";
                                    shadowSettings.color = "purple";
                                    let newLabel = baseLabel;

                                    // Add blocking icon and count only if restrictionList has multiple items
                                    if (restrictionList.length > 1) {
                                        const purpleItem = purpleEvents.find(item => item.eventName === edgeFQN);
                                        newLabel = `${baseLabel} 🚫${purpleItem.blockCount}`;
                                    }

                                    // Update the edge only if the label or color has changed
                                    if (edge.label !== newLabel || edge.color !== newColor) {
                                        edges.update({ 
                                            id: edge.id, 
                                            label: newLabel, 
                                            color: newColor, 
                                            shadow: shadowSettings 
                                        });
                                    }
                                }
                            } else {
                                // Reset the label to baseLabel if conditions are not met
                                if (edge.label !== baseLabel) {
                                    edges.update({ id: edge.id, label: baseLabel });
                                }
                            }

                        const syncWith = automatonNames
                            .filter(otherName => otherName !== automatonName)
                            .filter(otherName => {
                                const otherEdges = automatonEdges[otherName].get();
                                return otherEdges.some(otherEdge => otherEdge.full_label === edge.full_label);
                            });

                        const tooltipContent = `Event: ${edge.label}`
                            + (edge.guard ? `\nGuard: ${edge.guardExpression}` : "")
                            + (edge.updates.length ? `\nUpdate: ${edge.updates.map(upd => upd.updateExpression).join(", ")}` : "")
                            + (syncWith.length > 0 ? `\nSyncs with: ${syncWith.join(", ")}` : "");

                        const displayEdge = edge.isPrimarySelfLoop || !edge.isSelfLoop;

                        edges.update({
                            id: edge.id,
                            color: displayEdge
                                ? { color: newColor, highlight: newColor, inherit: false }
                                : { color: "rgba(0,0,0,0)", highlight: "rgba(255, 255, 255, 0)", inherit: true },
                            shadow: shadowSettings,
                            width: 2,
                            title: tooltipContent,
                            font: edge.isSelfLoop
                                ? { background: newColor, color: "white", strokeWidth: 0, strokeColor: "transparent" }
                                : { background: "transparent", color: "black", strokeWidth: 5, strokeColor: "#f8f8f8" }
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
                                    updateDropdownWithSelectedEvent(selectedEdge.full_label);
                                    const executeButton = document.getElementById("execute-event");
                                    if (executeButton) {
                                        executeButton.click();
                                    }
                                    clearGuardOverlay();
                                }
                            }
                        }
                    });
                } else {
                    // For automata with only self-loops, update the event list container...
                    const eventListContainer = document.getElementById(`eventListContainer_${automatonName}`);
                    if (eventListContainer) {
                        const eventItems = eventListContainer.querySelectorAll('.event-item');
                        eventItems.forEach(eventItem => {
                            eventItem.style.backgroundColor = "";
                            eventItem.style.color = "";
                            const eventLabel = eventItem.getAttribute('data-event-label');
                            const isAvailable = availableEvents.some(event => event === eventLabel);
                            if (isAvailable) {
                                eventItem.style.backgroundColor = "#00990a";
                                eventItem.style.color = "white";
                                eventItem.style.padding = "2px 10px";
                            } else {
                                // Check if this event should be purple instead of red
                                if (purpleEvents && purpleEvents.some(item => item.eventName === eventLabel)) {
                                    eventItem.style.backgroundColor = "purple";
                                    eventItem.style.color = "white";
                                    eventItem.style.padding = "2px 10px";
                                    } else {
                                    eventItem.style.backgroundColor = "#910000";
                                    eventItem.style.color = "white";
                                    eventItem.style.padding = "2px 10px";
                                }
                            }
                        });

                        if (!eventListContainer.dataset.dblclickAttached) {
                            eventListContainer.dataset.dblclickAttached = "true";
                            eventListContainer.addEventListener('dblclick', function (evt) {
                                const closestEventItem = evt.target.closest('.event-item');
                                if (closestEventItem) {
                                    const eventLabel = closestEventItem.getAttribute('data-event-label');
                                    updateDropdownWithSelectedEvent(eventLabel);
                                    const executeButton = document.getElementById("execute-event");
                                    if (executeButton) {
                                        executeButton.click();
                                    }
                                    clearGuardOverlay();
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
                        filter: edge => edge.from === currentNode.id && edge.full_label === selectedEventLabel
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


function selectEdgeByLabel(eventLabel, automatonName) {
    const edges = automatonEdges[automatonName];
    const network = automatonNetworks[automatonName];
    if (edges && network) {
        // Find matching edge(s)
        const matchingEdges = edges.get({
            filter: edge => {
                const label = edge.full_label || edge.label;
                return label === eventLabel;
            }
        });
        if (matchingEdges && matchingEdges.length > 0) {
            const edgeIds = matchingEdges.map(e => e.id);
            // Select the matching edge(s) in the vis network
            network.selectEdges(edgeIds);
            const selectedEdge = automatonEdges[automatonName].get(edgeIds[0]);
            if (selectedEdge) {
                updateGuardOverlay(selectedEdge, automatonName);
            }
            console.log("Selected edge IDs:", edgeIds);
        } else {
            console.warn("No matching edge found for label:", eventLabel);
        }
    }
}