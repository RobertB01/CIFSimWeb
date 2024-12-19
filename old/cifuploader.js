document.getElementById('cifFile').addEventListener('change', function() {
    const file = this.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload-cif-file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => updateConsole(data))
    .catch(error => console.error('Error uploading file:', error));
});




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
    .catch(error => console.error('Error uploading file:', error));
});

function fetchCifContent() {
    fetch('/get-cif-content')
        .then(response => response.text())
        .then(data => {
            console.log("CIF File Content:", data);
            updateConsole("CIF File Content:\n" + data);

        })
        .catch(error => console.error('Error fetching CIF content:', error));
}

function updateConsole(output) {
    document.getElementById('consoleOutput').innerText = output;
}