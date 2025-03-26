// --------------------------------------------------------
// Helper function: Check if an event is "green" for an automaton.
// (Reuses the logic from your updateGuardOverlay code.)
// --------------------------------------------------------
function isEventGreenForAutomaton(eventName, automatonName) {
  let rightLocation = false;
  let guardOk = true;

  // Retrieve the current state of the automaton.
  const currentStateProperty = `spec.${automatonName}_`;
  let currentStateValue;
  try {
    const currentState = eval(currentStateProperty);
    currentStateValue = (currentState !== undefined)
                        ? specUtils.valueToStr(currentState)
                        : " ";
  } catch (e) {
    currentStateValue = " ";
  }

  // Determine if the automaton is in the right location.
  if (currentStateValue != null) {
    const nodes = automatonNodes[automatonName];
    if (nodes) {
      let currentNode;
      if (nodes.length === 1) {
        currentNode = nodes.get()[0];
      } else {
        currentNode = nodes.get({
          filter: node =>
            node.fullName === currentStateValue ||
            (node.fullName === " " && currentStateValue === " ")
        })[0];
      }
      if (currentNode) {
        const edgesDS = automatonEdges[automatonName];
        if (edgesDS) {
          // Find outgoing edges from the current node that match the event.
          const outgoingEdges = edgesDS.get({
            filter: e =>
              e.from === currentNode.id &&
              ((e.full_label || e.label) === eventName)
          });
          if (outgoingEdges.length > 0) {
            rightLocation = true;
            // Use the first matching edge.
            const matchingEdge = outgoingEdges[0];
            if (matchingEdge.guard) {
              const guardContext = buildContextFromStateText();
              const overallEval = evaluateGuard(matchingEdge.guard, guardContext);
              guardOk = (overallEval.value === true);
            } else {
              // If no guard exists, we treat the event as available.
              guardOk = true;
            }
          }
        }
      }
    }
  }
  // The event is considered "green" for this automaton only if it is in the right location and (if a guard exists) the guard evaluated to true.
  return rightLocation && guardOk;
}


// --------------------------------------------------------
// Main function: Update the purple overlay.
// It goes through every event in eventMap and selects those for which
// all automata (except sup) are green and sup is red.
// --------------------------------------------------------
// --------------------------------------------------------
// Main function: Update the purple overlay.
// It goes through every event in eventMap and selects those for which
// the event appears in at least one automaton from the restrictionList,
// and if at least one of these automata returns false (red) for the event,
// then the event is marked purple.
// --------------------------------------------------------
function updatePurpleOverlay() {
  // Reset the purple events list.
  purpleEvents = [];
  
  // Iterate over every event name in the eventMap.
  eventMap.forEach(eventName => {
    // Flags for checking conditions.
    let restrictorRelevant = false;   // Does the event occur in at least one automaton from restrictionList (imposing restrictions)?
    let restrictorBlocks = false;       // Does at least one of those automata block (red) this event?
    let nonRestrictorRelevant = false;  // Does the event occur in any automaton not in restrictionList?
    let nonRestrictorGreen = true;      // Assume non-restrictor automata are greenrestric unless proven otherwise.
    let blockCount = 0;

    
    // Loop through all automata.
    automatonNames.forEach(automatonName => {
      const edgesDS = automatonEdges[automatonName];
      if (!edgesDS) return;
      
      // Check if the event occurs in the current automaton.
      const edges = edgesDS.get();
      const eventOccurs = edges.some(edge => (edge.full_label || edge.label) === eventName);
      if (!eventOccurs) return;
      
      // If this automaton is in restrictionList, it imposes restrictions.
      if (restrictionList.includes(automatonName)) {
        restrictorRelevant = true;
        // If the event is not green for a restrictor automaton, mark it as blocked.
        if (!isEventGreenForAutomaton(eventName, automatonName)) {
          restrictorBlocks = true;
          blockCount++;
        }
      } else {
        nonRestrictorRelevant = true;
        // For non-restrictor automata, if the event is red then it should not be purple.
        if (!isEventGreenForAutomaton(eventName, automatonName)) {
          nonRestrictorGreen = false;
        }
      }
    });
    
    // Only mark the event as purple if:
    // 1. It appears in at least one automaton from restrictionList (imposing restrictions),
    // 2. At least one of those imposers blocks it (red), and
    // 3. All non-restrictor automata that include the event are green.
    if (restrictorRelevant && restrictorBlocks && nonRestrictorGreen) {
      purpleEvents.push({ eventName, blockCount });
    }
  });
  
  console.log("Purple events (only blocked by automata in restrictionList):", purpleEvents);
  
  // Clear previous purple highlighting.
  Object.keys(eventMap).forEach(eventName => {
    const edgeElement = document.getElementById(eventName + "-edge");
    if (edgeElement) {
      edgeElement.classList.remove("edge-purple");
    }
  });
  
  // Apply purple highlighting (via a CSS class) to the selected events.
  purpleEvents.forEach(eventName => {
    const edgeElement = document.getElementById(eventName + "-edge");
    if (edgeElement) {
      edgeElement.classList.add("edge-purple");
    }
  });

  highlightCurrentState();
}


// --------------------------------------------------------
document.getElementById("myCheckbox").addEventListener("change", updateAutomataClasses);





function updateAutomataClasses() {
  const checkboxText = document.getElementById("sup-overlay-text");
  const myCheckbox = document.getElementById("myCheckbox");

  if (restrictionList.length > 0) {
    restrictionList.forEach(automatonName => {
      const automatonDiv = document.getElementById(`${automatonName}-div`);
      if (!automatonDiv) {
        console.warn(`${automatonName}-div not found.`);
        return;
      }

      if (myCheckbox.checked) {
        checkboxText.classList.add("purple");
        automatonDiv.classList.add("automaton-container-purple");
        highlightCurrentState();
      } else {
        automatonDiv.classList.remove("automaton-container-purple");
        checkboxText.classList.remove("purple");
        highlightCurrentState();
      }
    });

    if (myCheckbox.checked) {
      updatePurpleOverlay();
    } else {
      purpleEvents = [];
    }
    highlightCurrentState();
  } else {
    console.warn("No automata found in the restrictionList.");
  }


}

