// Event listeners for file upload and simulation controls
document.getElementById('startSimulation').addEventListener('click', startSimulation);
document.getElementById('stopSimulation').addEventListener('click', stopSimulation);
document.getElementById('getState').addEventListener('click', getState);
document.getElementById('selectTransition1').addEventListener('click', () => selectTransition(1));
document.getElementById('selectTransition2').addEventListener('click', () => selectTransition(2));

document.getElementById('cifFile').addEventListener('change', function() {
    const file = this.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload-cif-file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        updateConsole(data);
        fetchCifContent();
    })
    .catch(error => console.error('Error  file:', error));
});

// Function to fetch CIF file content from the backend
function fetchCifContent() {
    fetch('/get-cif-content')
        .then(response => response.text())
        .then(data => {
            console.log("CIF File spec:", data);
            updateConsole("CIF File spec:\n" + data);
        })
        .catch(error => console.error('Error fetching CIF', error));
}

// Update console output
function updateConsole(output) {
    document.getElementById('consoleOutput').innerText = output;
}

function startSimulation() {
    // First, start the simulation
    fetch('/run-simulation')  // Start the simulation process
        .then(response => response.text())  // Get the response
        .then(data => {
            // Optionally log or display that the simulation has started
            console.log("Simulation started", data);

            // Then fetch the CIF content
            return fetch('/get-cif-content');  // Fetch the CIF file content from the server
        })
        .then(response => response.text())  // Get the CIF content
        .then(cifContent => {
            // Parse the CIF file content
            const parsedData = parseCIF(cifContent);

            // Draw the automaton using the parsed data and D3.js
            drawAutomaton(parsedData, "#graph");

            // Optionally log or update the console with success (without showing CIF text)
            updateConsole("Simulation started ");
        })
        .catch(error => {
            // Catch and log any errors from both fetch calls
            console.error('Error starting ', error);
            updateConsole("Error: " + error.message);
        });
}
// Function to update console output
function updateConsole(output) {
    document.getElementById('consoleOutput').innerText = output;
}
// Stop the simulation
function stopSimulation() {
    fetch('/stop-simulation')
        .then(response => response.text())
        .then(data => updateConsole(data))
        .catch(error => console.error('Error stopping ', error));
}

// Get the current simulation state
function getState() {
    fetch('/get-state')
        .then(response => response.text())
        .then(data => updateConsole(data))
        .catch(error => console.error('Error ', error));
}


function selectTransition(transitionId) {
    fetch(`/select-transition/${transitionId}`)
        .then(response => response.text())
        .then(data => updateConsole(data))
        .catch(error => console.error('Error', error));
}
