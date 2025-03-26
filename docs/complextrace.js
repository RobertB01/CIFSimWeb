// ---------- Global Variables ----------
let colorRows = false;  // Global flag for background colors.
let maxEventsPossible = 0; // Global: maximum total events possible (computed from initial step)

// ---------- Helper: Order Automata Based on Tree Structure ----------
function getAutomataOrder() {
  // Returns an array of objects { name, depth } in depth-first order (skipping the root node)
  let order = [];
  function traverse(node, depth) {
    order.push({ name: node.name, depth: depth });
    node.children.forEach(child => traverse(child, depth + 1));
  }
  if (typeof automataTree !== "undefined" && automataTree && automataTree.children) {
    automataTree.children.forEach(child => traverse(child, 1));
  } else if (typeof automatonNames !== "undefined" && Array.isArray(automatonNames)) {
    automatonNames.forEach(name => order.push({ name: name, depth: 0 }));
  }
  return order;
}

// Helper to find a node in the automata tree by name.
function findAutomataNode(node, name) {
  if (node.name === name) return node;
  for (let child of node.children) {
    let found = findAutomataNode(child, name);
    if (found) return found;
  }
  return null;
}

// Helper: Get the tree path (for textual tree drawing).
// Returns an array of objects { node, isLast } from the automataTree root down to the target.
function getNodePath(root, targetName) {
  if (!root) return null;
  for (let i = 0; i < root.children.length; i++) {
    let child = root.children[i];
    if (child.name === targetName) {
      return [{ node: child, isLast: i === root.children.length - 1 }];
    }
    let subPath = getNodePath(child, targetName);
    if (subPath) {
      return [{ node: child, isLast: i === root.children.length - 1 }].concat(subPath);
    }
  }
  return null;
}

// ---------- Existing Code (unchanged) ----------
let previousEvents;
function initializeComplexTrace() {
  previousEvents = new Set(availableEvents);
  complexTrace = [];
  
  let initialStep = { event: null, automata: {} };
  
  parsedData.automata.forEach(automaton => {
    const initLocation = automaton.locations.find(loc => loc.initial);
    let locationName = initLocation ? initLocation.name : " ";
    let eventAvailability = {};
    automaton.edges.forEach(edge => {
      if (initLocation && edge.from === initLocation.id) {
        let eventName = getEventName(edge, automaton);
        if (eventName && eventName !== "Unnamed Event") {
          if (Array.isArray(availableEvents)) {
            eventAvailability[eventName] = availableEvents.includes(eventName);
          } else {
            eventAvailability[eventName] = availableEvents.hasOwnProperty(eventName);
          }
        }
      }
    });
    initialStep.automata[automaton.name] = {
      location: locationName,
      eventAvailability: eventAvailability
    };
  });
  // Compute the maximum possible events from the initial step.
  // (Alternatively, you could compute this dynamically over complexTrace.)
  maxEventsPossible = parsedData.totalEdgesOverall;
  complexTrace.push(initialStep);
}

function getEventName(edge, automaton) {
  let eventName = "Unnamed Event";
  switch (edge.eventType) {
    case 'cross-automaton': {
      const crossAutomaton = parsedData.automata.find(a => a.name === edge.eventAutomaton);
      if (crossAutomaton) {
        const crossEvent = crossAutomaton.events.find(e => e.id === edge.event);
        if (crossEvent) {
          eventName = crossEvent.name || "Unnamed Event";
          eventName = `${crossAutomaton.name}.${eventName}`;
        }
      }
      break;
    }
    case 'owned': {
      const ownedEvent = automaton.events.find(e => e.id === edge.event);
      if (ownedEvent) {
        eventName = ownedEvent.name || "Unnamed Event";
        eventName = `${automaton.name}.${eventName}`;
      }
      break;
    }
    case 'global': {
      const globalEvent = globalEventMap[edge.event];
      if (globalEvent) {
        eventName = globalEvent.name || "Unnamed Event";
      }
      break;
    }
    default:
      eventName = `Event_${edge.event}`;
  }
  return eventName;
}

function computeChanges() {
  let changes = {};
  const lastStep = complexTrace[complexTrace.length - 1];
  //console.log("Computing changes for step", complexTrace.length);
  
  let currentEvents = new Set(availableEvents);
  let addedEvents = availableEvents.filter(e => !previousEvents.has(e));
  let removedEvents = Array.from(previousEvents).filter(e => !currentEvents.has(e));
  //console.log("Global added events:", addedEvents, "removed events:", removedEvents);
  previousEvents = currentEvents;
  
  parsedData.automata.forEach(automaton => {
    const automatonName = automaton.name;
    let currentLocation;
    try {
      const state = eval(`spec.${automatonName}_`);
      currentLocation = specUtils.valueToStr(state);
    } catch (e) {
      currentLocation = " ";
    }
    //console.log(`Automaton ${automatonName}: currentLocation = ${currentLocation}`);
    
    let newChange = {};
    
    // Always compute eventAvailability for the current location:
    let locObj = automaton.locations.find(loc => loc.name === currentLocation);
    if (locObj) {
      let outgoingEdgeEvents = automaton.edges
        .filter(edge => edge.from === locObj.id)
        .map(edge => getEventName(edge, automaton));
      //console.log(`Automaton ${automatonName}: outgoingEdgeEvents =`, outgoingEdgeEvents);
      
      let fullAvailability = {};
      outgoingEdgeEvents.forEach(ev => {
         fullAvailability[ev] = availableEvents.indexOf(ev) >= 0;
      });
      //console.log(`Automaton ${automatonName}: fullAvailability =`, fullAvailability);
      newChange.eventAvailability = fullAvailability;
    } else {
      //console.log(`Automaton ${automatonName}: no location object found for location "${currentLocation}"`);
    }
    
    // If location has changed, update it; otherwise, compute markers.
    if (currentLocation !== lastStep.automata[automatonName].location) {
      newChange.location = currentLocation;
      //console.log(`Automaton ${automatonName}: location changed to "${currentLocation}"`);
    } else if (locObj) {
      let outgoingEdgeEvents = automaton.edges
        .filter(edge => edge.from === locObj.id)
        .map(edge => getEventName(edge, automaton));
      let addedForAutomaton = addedEvents.filter(e => outgoingEdgeEvents.indexOf(e) >= 0);
      let removedForAutomaton = removedEvents.filter(e => outgoingEdgeEvents.indexOf(e) >= 0);
      let marker = "";
      if (addedForAutomaton.length > 0) marker += "+".repeat(addedForAutomaton.length);
      if (removedForAutomaton.length > 0) marker += "-".repeat(removedForAutomaton.length);
      if (marker) {
         newChange.eventChange = { 
           marker: marker, 
           added: addedForAutomaton, 
           removed: removedForAutomaton 
         };
         //console.log(`Automaton "${automatonName}" marker computed: ${marker}`);
      }
    }
    
    if (Object.keys(newChange).length > 0) {
      changes[automatonName] = newChange;
    }
  });
  
  //console.log("Computed Changes:", changes);
  return changes;
}

// ------------ New: Build the Event Chart Row ------------
function buildEventChartRow() {
  let rowHTML = '<tr class="event-chart-row"><td></td>';
  // Determine full chart height: 5px per event, capped at 150px.
  let chartHeight = Math.min(maxEventsPossible * 5, 150);
  //console.log("Chart full height set to:", chartHeight, "px (maxEventsPossible:", maxEventsPossible, ")");
  
  // For each step in complexTrace, create a vertical bar.
  complexTrace.forEach((step, stepIndex) => {
    let totalAvailable = 0;
    let totalUnavailable = 0;
    // Sum over all automata in the step.
    for (let automaton in step.automata) {
      let availObj = step.automata[automaton].eventAvailability || {};
      for (let evt in availObj) {
        if (availObj[evt]) {
          totalAvailable++;
        } else {
          totalUnavailable++;
        }
      }
    }
    //console.log(`Step ${stepIndex}: totalAvailable=${totalAvailable}, totalUnavailable=${totalUnavailable}`);
    
    // Compute segment heights relative to maxEventsPossible using chartHeight.
    let greenHeight = (totalAvailable / maxEventsPossible) * chartHeight;
    let redHeight = (totalUnavailable / maxEventsPossible) * chartHeight;
    let greyHeight = chartHeight - (greenHeight + redHeight);
    
    // Create a bar container for this step.
    let barContainer = document.createElement("div");
    // Use flex with column-reverse so that the first child appears at the bottom.
    barContainer.style.display = "flex";
    barContainer.style.flexDirection = "column-reverse";
    
    // Create segments.
    let greenDiv = document.createElement("div");
    greenDiv.style.height = greenHeight + "px";
    greenDiv.style.backgroundColor = "#00A300";
    
    let redDiv = document.createElement("div");
    redDiv.style.height = redHeight + "px";
    redDiv.style.backgroundColor = "darkred";
    
    let greyDiv = document.createElement("div");
    greyDiv.style.height = greyHeight + "px";
    greyDiv.style.backgroundColor = "lightgrey";
    
    // Append segments in order: green (bottom), red (middle), grey (top).
    barContainer.appendChild(greenDiv);
    barContainer.appendChild(redDiv);
    barContainer.appendChild(greyDiv);
    
    rowHTML += `<td class="event-chart-cell" style=" padding:1px;">${barContainer.outerHTML}</td>`;

  });
  
  rowHTML += '</tr>';
  return rowHTML;
}

// ------------ Updated buildTraceOverlayHTML with Integrated Event Chart Row ------------
function buildTraceOverlayHTML() {
  let html = '<table class="trace-table">';
  
  // If the sum chart toggle is on, add the event chart row.
  if (document.getElementById("sumCheckbox").checked) {
    html += buildEventChartRow();
  }
  
  // Header row for trace steps.
  html += '<tr class="trace-header-row">';
  // (No merged automata column in this table; the automata names are shown in rows below.)
  for (let i = 0; i < complexTrace.length; i++) {
    html += `<th>${i}</th>`;
  }
  html += '</tr>';
  
  // Event row.
  html += '<tr class="trace-event-row">';
  html += '<td></td>';
  for (let i = 0; i < complexTrace.length; i++) {
    let eventInfo = complexTrace[i].event;
    let eventDisplay = "";
    if (eventInfo) {
      eventDisplay = (typeof eventInfo === "object") ? eventInfo.name : eventInfo;
    }
    let extraClass = "";
    if (eventInfo && typeof eventInfo === "object" && eventInfo.type === "uncontrollable") {
      extraClass = " uncontrollable";
    }
    html += `<td class="event-cell${extraClass}"><strong>${eventDisplay}</strong></td>`;
  }
  html += '</tr>';
  
  // Build rows for each automaton.
  let automataOrder = getAutomataOrder();
  automataOrder.forEach(item => {
    let automatonName = item.name;
    let depth = item.depth;
    let mergedContent = "";
    let alignment = "";
    
    if (colorRows) {
      // Build a tree-style prefix using Unicode branch characters.
      let prefix = "";
      let path = getNodePath(automataTree, automatonName);
      if (path) {
        for (let i = 0; i < path.length; i++) {
          if (i === path.length - 1) {
            prefix += (path[i].isLast ? "└─ " : "├─ ");
          } else {
            prefix += (path[i].isLast ? "    " : "│   ");
          }
        }
      }
      mergedContent = prefix + automatonName;
      alignment = "left";
    } else {
      mergedContent = automatonName;
      alignment = "right";
    }
    
    // Get node for color.
    let node = (typeof automataTree !== "undefined") ? findAutomataNode(automataTree, automatonName) : null;
    let cellStyle = ` style="text-align: ${alignment};"`;
    if (colorRows && node && node.color) {
      cellStyle = ` style="background-color: ${node.color}; text-align: ${alignment};"`;
    }
    
    html += `<tr class="trace-automaton-row">`;
    html += `<td class="automaton-cell"${cellStyle}>${mergedContent}</td>`;
    
    // Build remaining cells for trace steps.
    for (let i = 0; i < complexTrace.length; i++) {
      let cellData = complexTrace[i].automata[automatonName];
      let content = "";
      if (i === 0) {
        content = `<div class="location-oval">${cellData.location || " "}</div>`;
      } else {
        let prevData = complexTrace[i - 1].automata[automatonName];
        let prevLocation = ((prevData.location) || " ").trim();
        let location = ((cellData.location) || " ").trim();
        if (location !== prevLocation) {
          content = `<div class="location-oval">${cellData.location || " "}</div>`;
        }
      }
      if (cellData.eventChange) {
        let tooltipText = "";
        if (cellData.eventChange.added && cellData.eventChange.added.length > 0) {
          tooltipText += "added: " + cellData.eventChange.added.join(", ") + "\n";
        }
        if (cellData.eventChange.removed && cellData.eventChange.removed.length > 0) {
          tooltipText += "removed: " + cellData.eventChange.removed.join(", ");
        }
        let markerHTML = '';
        for (let char of cellData.eventChange.marker) {
          if (char === '+') {
            markerHTML += `<span title="${tooltipText}" style="color: green; text-shadow: 1px 1px 1px white; font-size: 1.5em; position: relative; top: -10px;">${char}</span>`;
          } else if (char === '-') {
            markerHTML += `<span title="${tooltipText}" style="color: red; text-shadow: 1px 1px 1px white; font-size: 1.5em; position: relative; top: -10px;">${char}</span>`;
          }
        }
        content += `<span class="event-marker">${markerHTML}</span>`;
      }
      
      let lastLocationStep = -1;
      for (let j = 0; j < complexTrace.length; j++) {
        let cellDataJ = complexTrace[j].automata[automatonName];
        if (j === 0) {
          lastLocationStep = 0;
        } else {
          let locationJ = ((cellDataJ.location) || " ").trim();
          let prevLocationJ = ((complexTrace[j - 1].automata[automatonName].location) || " ").trim();
          if (locationJ !== prevLocationJ) {
            lastLocationStep = j;
          }
        }
      }
      if (i === lastLocationStep && content.indexOf('location-oval') !== -1) {
        content = content.replace('location-oval"', 'location-oval last-drawn"');
      }
      html += `<td class="trace-location ${content.trim() === "" ? "unchanged" : ""}">${content}</td>`;
    }
    html += '</tr>';
  });
  
  html += '</table>';
  return html;
}

function adjustTraceCellWidths() {
  const cells = document.querySelectorAll("#traceOverlay td.trace-location");
  let maxWidth = 0;
  cells.forEach(cell => {
    cell.style.width = "";
    const w = cell.offsetWidth;
    if (w > maxWidth) {
      maxWidth = w;
    }
  });
  cells.forEach(cell => {
    cell.style.width = maxWidth + "px";
  });
}

function updateTraceOverlay() {
  const overlay = document.getElementById("traceOverlay");
  if (overlay) {
    overlay.innerHTML = buildTraceOverlayHTML();
    adjustTraceCellWidths();
    overlay.scrollLeft = overlay.scrollWidth - overlay.clientWidth;
  }
}

function toggleTraceOverlay() {
  const checkbox = document.getElementById("traceCheckbox");
  const overlay = document.getElementById("traceOverlay");
  if (checkbox.checked) {
    overlay.style.display = "block";
    updateTraceOverlay();
  } else {
    overlay.style.display = "none";
  }
}

// UPDATED toggleColors: now sets colorRows to the checkbox value.
function toggleColors() {
  colorRows = document.getElementById("colorsCheckbox").checked;
  updateTraceOverlay();
}

function toggleSum() {
  // When the sum checkbox is toggled, update the overlay so that the event chart row is added/removed.
  updateTraceOverlay();
}

document.getElementById("traceCheckbox").addEventListener("change", toggleTraceOverlay);
document.getElementById("colorsCheckbox").addEventListener("change", toggleColors);
document.getElementById("sumCheckbox").addEventListener("change", toggleSum);

function addTraceStep(eventName, eventType) {
  // Create a deep copy of the last step.
  let lastStep = JSON.parse(JSON.stringify(complexTrace[complexTrace.length - 1]));
  
  // Remove any previous eventChange marker.
  for (let automaton in lastStep.automata) {
    if (lastStep.automata[automaton].hasOwnProperty('eventChange')) {
      delete lastStep.automata[automaton].eventChange;
    }
  }
  
  lastStep.event = { name: eventName, type: eventType };
  let changes = computeChanges();
  
  // For every automaton, update eventAvailability (and location/markers if computed).
  for (let automaton in changes) {
    if (changes[automaton].hasOwnProperty('eventAvailability')) {
      //console.log(`Updating ${automaton} eventAvailability:`, changes[automaton].eventAvailability);
      lastStep.automata[automaton].eventAvailability = changes[automaton].eventAvailability;
    }
    if (changes[automaton].hasOwnProperty('location')) {
      //console.log(`Updating ${automaton} location to: ${changes[automaton].location}`);
      lastStep.automata[automaton].location = changes[automaton].location;
    }
    if (changes[automaton].hasOwnProperty('guardChecks')) {
      lastStep.automata[automaton].guardChecks = changes[automaton].guardChecks;
    }
    if (changes[automaton].hasOwnProperty('eventChange')) {
      //console.log(`Updating ${automaton} marker: ${changes[automaton].eventChange.marker}`);
      lastStep.automata[automaton].eventChange = changes[automaton].eventChange;
    }
  }
  
  complexTrace.push(lastStep);
  updateTraceOverlay();
  //console.log("STEP ADDED");
  //console.log(complexTrace);
}
