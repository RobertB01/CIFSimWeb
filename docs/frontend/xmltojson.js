function parseCIFXML(xmi) { 
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmi, "application/xml");

    const locationMap = {};

    const automataData = [];

    const automataElements = xmlDoc.getElementsByTagName("components");
    for (let automaton of automataElements) {
        const automatonName = automaton.getAttribute("name");
        const automatonKind = automaton.getAttribute("kind");
        const events = [];
        const globalEventsById = {};
        const variables = [];
        const locations = [];
        const edges = [];

        // Parse events
        const eventElements = xmlDoc.getElementsByTagName("declarations");
        for (let event of eventElements) {
            if (event.getAttribute("xmi:type") === "declarations:Event") {
                const eventId = event.getAttribute("xmi:id");
                const eventName = event.getAttribute("name");
                const controllable = event.hasAttribute("controllable") ? (event.getAttribute("controllable") === "true") : null;

                events.push({
                    id: eventId,
                    name: eventName,
                    controllable: controllable
                });
                globalEventsById[eventId] = { id: eventId, name: eventName };
            }
        }

        // Parse variables
        const variableElements = xmlDoc.getElementsByTagName("declarations");
        for (let variable of variableElements) {
            if (variable.getAttribute("xmi:type") === "declarations:DiscVariable") {
                const variableId = variable.getAttribute("xmi:id");
                const variableName = variable.getAttribute("name");
                variables[variableId] = {
                    id: variableId,
                    name: variableName,
                    type: variable.getAttribute("type") || "unknown",
                    value: variable.querySelector("value")?.getAttribute("value") || null
                };
            }
        }

        // Parse monitors
        const monitorElements = xmlDoc.getElementsByTagName("monitors");
        const monitors = [];
        for (let monitor of monitorElements) {
            const monitorId = monitor.getAttribute("xmi:id");
            const monitorEvents = [];

            const monitorEventElements = monitor.getElementsByTagName("events");
            for (let me of monitorEventElements) {
                const monitoredEventId = me.getAttribute("event");
                if (monitoredEventId) {
                    const monitoredEvent = globalEventsById[monitoredEventId];
                    if (monitoredEvent) {
                        monitorEvents.push({
                            id: monitoredEventId,
                            name: monitoredEvent.name
                        });
                    }
                }
            }

            // Add monitor to the current automaton if it belongs to it
            if (automaton.contains(monitor)) {
                monitors.push({
                    id: monitorId,
                    events: monitorEvents
                });
            }
        }

        // Use JSON.stringify to log the monitors array
        console.log(JSON.stringify(monitors, null, 2));




        const locationElements = automaton.getElementsByTagName("locations");
        for (let location of locationElements) {
            const locationId = location.getAttribute("xmi:id");
            const locationName = location.getAttribute("name");
            const isInitial = location.querySelector("initials") !== null;
            const isMarked = location.querySelector("markeds") !== null;
        
            // Instead of just storing the locationName, store automatonName.locationName
            locationMap[locationId] = `${automatonName}.${locationName}`;
            console.log(locationMap)

            locations.push({
                id: locationId,
                name: locationName,
                initial: isInitial,
                marked: isMarked
            });

            // Parse edges for each location
            const edgeElements = location.getElementsByTagName("edges");
            for (let edge of edgeElements) {
                const targetLocation = edge.getAttribute("target") || locationId;
                const eventElement = edge.querySelector("events event");
                const eventRef = eventElement ? eventElement.getAttribute("event") : null;

                // Parse guard using a recursive function and pass locationMap
                const guardElement = edge.querySelector("guards");
                const parsedGuard = parseGuard(guardElement, variables, locationMap);

                const guardExpression = parsedGuard ? parsedGuard.expression : null;

                // Parse updates
                const updateElements = edge.querySelectorAll("updates");
                const updates = Array.from(updateElements).map(update => {
                    const variableId = update.querySelector("addressable")?.getAttribute("variable");
                    const variableName = variables[variableId]?.name || variableId;

                    const valueElement = update.querySelector("value");

                    let value = null;
                    let operator = null;
                    let updateExpression = null;

                    if (valueElement) {
                        const valueType = valueElement.getAttribute("xmi:type");

                        if (valueType === "expressions:IntExpression") {
                            // Handle simple integer expression
                            value = valueElement.getAttribute("value") ||
                                valueElement.querySelector("type")?.getAttribute("lower"); // Fallback
                            updateExpression = `${variableName} := ${value}`;
                        } else if (valueType === "expressions:BinaryExpression") {
                            // Handle binary expressions
                            operator = valueElement.getAttribute("operator");

                            const leftOperand = valueElement.querySelector("left");
                            const rightOperand = valueElement.querySelector("right");

                            const left = leftOperand.getAttribute("variable") || leftOperand.getAttribute("value");
                            const right = rightOperand.getAttribute("variable") || rightOperand.getAttribute("value");

                            const leftName = variables[left]?.name || left;
                            const rightName = variables[right]?.name || right;

                            value = `${leftName} ${translateUpdateOperator(operator)} ${rightName}`;
                            updateExpression = `${variableName} := ${value}`;
                        }
                    }

                    return {
                        variable: variableName,
                        value: value,
                        operator: operator,
                        updateExpression: updateExpression
                    };
                });

                if (targetLocation) {
                    edges.push({
                        from: locationId,
                        to: targetLocation,
                        event: eventRef,
                        guard: parsedGuard,
                        guardExpression: guardExpression,
                        updates: updates
                    });
                }
            }
        }

        automataData.push({
            name: automatonName,
            kind: automatonKind,
            events: events,
            variables: variables,
            locations: locations,
            edges: edges,
            monitors: monitors
        });
    }

    const synchronizingEvents = identifySynchronizingEvents(automataData);

    return { automata: automataData, synchronizingEvents: synchronizingEvents };
}

function parseGuard(guardElement, variables, locationMap) {
    if (!guardElement) return null;

    const guardType = guardElement.getAttribute("xmi:type");

    // Handle location expressions
    // Handle location expressions
    if (guardType === "expressions:LocationExpression") {
        const locationId = guardElement.getAttribute("location");

        // Now this gives something like "button.Pushed"
        const qualifiedLocationName = locationMap[locationId];
        return {
            expression: `${qualifiedLocationName}`
        };
    }

    // If guardElement itself can have an operator
    const operator = guardElement.getAttribute("operator");
    const leftElement = guardElement.querySelector(":scope > left");
    const rightElement = guardElement.querySelector(":scope > right");

    // If we have a conjunction operator, we need to handle it recursively
    if (operator === "Conjunction") {
        const leftGuard = parseGuard(leftElement, variables, locationMap);
        const rightGuard = parseGuard(rightElement, variables, locationMap);

        return {
            operator: "&&",
            left: leftGuard,
            right: rightGuard,
            expression: `(${leftGuard.expression}) && (${rightGuard.expression})`
        };
    } else {
        // Handle simple comparisons
        const leftVar = leftElement?.getAttribute("variable");
        const leftVal = leftElement?.getAttribute("value");
        const leftName = variables[leftVar]?.name || leftVar || leftVal;

        const rightVar = rightElement?.getAttribute("variable");
        const rightVal = rightElement?.getAttribute("value");
        const rightName = variables[rightVar]?.name || rightVar || rightVal;

        const translatedOperator = translateOperator(operator);

        return {
            operator: translatedOperator,
            left: leftName,
            right: rightName,
            expression: `${leftName} ${translatedOperator} ${rightName}`
        };
    }
}

function translateOperator(operator) {
    switch (operator) {
        case "Equal": return "==";
        case "NotEqual": return "!=";
        case "GreaterEqual": return ">=";
        case "LessEqual": return "<=";
        case "LessThan": return "<";
        case "Greater": return ">";
        case "Less": return "<";
        default: return operator;
    }
}

function translateUpdateOperator(operator) {
    switch (operator) {
        case "Addition": return "+";
        case "Subtraction": return "-";
        default: return operator;
    }
}

function identifySynchronizingEvents(parsedData) {
    if (!Array.isArray(parsedData)) {
        console.error("Parsed data structure is invalid:", parsedData);
        return [];
    }

    const eventOccurrences = new Map();

    parsedData.forEach(automaton => {
        if (automaton && Array.isArray(automaton.events)) {  
            automaton.events.forEach(event => {
                if (event && event.name) {  
                    if (!eventOccurrences.has(event.name)) {
                        eventOccurrences.set(event.name, 0);
                    }
                    eventOccurrences.set(event.name, eventOccurrences.get(event.name) + 1);
                }
            });
        }
    });

    const synchronizingEvents = [];
    eventOccurrences.forEach((count, eventName) => {
        if (count > 1) {
            synchronizingEvents.push(eventName);
        }
    });

    return synchronizingEvents;
}
