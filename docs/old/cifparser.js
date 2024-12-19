

const cifText = `
automaton washingMachine:
    event insertCoin, returnCoin, select90, select40, openDoor, closeDoor;
    disc int coins = 0;

    location ready:
        initial; marked;
        edge returnCoin when coins >= 1 do coins := coins -1;
        edge insertCoin do coins := coins +1;
        edge closeDoor goto closedDoors;

    location closedDoors:
        marked;
        edge openDoor goto ready;
        edge returnCoin when coins >= 1 do coins := coins -1;
        edge insertCoin do coins := coins +1;
        edge select40 when coins = 1 do coins := 0 goto washAt40;
        edge select90  when coins = 2 do coins := 0 goto washAt90;

    location washAt90:
        edge openDoor goto ready;

    location washAt40:
        edge openDoor goto ready;
end
`;


function parseCIF(cifText) {
    const automatonData = [];

    const automatonMatch = cifText.match(/automaton\s+(\w+):/g);
    automatonMatch.forEach((automatonDefinition) => {
        const automatonId = automatonDefinition.split(' ')[1].replace(':', '');

        const eventMatch = cifText.match(/event\s+([\w,\s]+);/);
        const events = eventMatch ? eventMatch[1].split(',').map(e => e.trim()) : [];

        const varMatch = cifText.match(/disc\s+int\s+(\w+)\s+=\s+(\d+);/);
        const variables = varMatch ? [{ name: varMatch[1], value: parseInt(varMatch[2]) }] : [];

        const locations = [];
        const links = [];
        const locationRegex = /location\s+(\w+):([\s\S]+?)(?=location|end)/g;
        let locationMatch;
        while ((locationMatch = locationRegex.exec(cifText)) !== null) {
            const locationName = locationMatch[1];
            const locationNode = { id: locationName, layer: locations.length };
            locations.push(locationNode);

            const edgeRegex = /edge\s+(\w+)(.*?)goto\s+(\w+);/g;
            let edgeMatch;
            while ((edgeMatch = edgeRegex.exec(locationMatch[2])) !== null) {
                links.push({
                    source: locationName,
                    target: edgeMatch[3],
                    label: edgeMatch[1] + (edgeMatch[2] ? ' ' + edgeMatch[2].trim() : '')
                });
            }
        }

        automatonData.push({
            id: automatonId,
            title: automatonId,
            nodes: locations,
            links: links
        });
    });

    return automatonData;
}


const automataData = parseCIF(cifText);

automataData.forEach(automaton => {
    drawAutomaton(automaton);
});

function drawAutomaton(automaton) {
    const width = 1000, height = 500;

    const container = d3.select("body").append("div").attr("class", "automaton-container");

    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("defs").append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "-0 -5 10 10")
        .attr("refX", 22)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("xoverflow", "visible")
        .append("svg:path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("fill", "#000")
        .style("stroke", "none");

    const simulation = d3.forceSimulation(automaton.nodes)
        .force("link", d3.forceLink(automaton.links).id(d => d.id).distance(200)) 
        .force("charge", d3.forceManyBody().strength(-500)) 
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("y", d3.forceY().strength(0.1)) 
        .force("x", d3.forceX(d => d.layer * 250).strength(1))
        .on("tick", ticked);

    const link = svg.selectAll(".link")
        .data(automaton.links)
        .enter().append("path")  
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", "2px")
        .attr("marker-end", "url(#arrowhead)");

    const linkLabels = svg.selectAll(".link-label")
        .data(automaton.links)
        .enter().append("text")
        .attr("class", "link-label")
        .attr("dy", -10) 
        .style("font-size", "10px")
        .text(d => d.label);

    const node = svg.selectAll(".node")
        .data(automaton.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 20) 
        .style("fill", "white")
        .style("stroke", "black")
        .style("stroke-width", "2px")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const label = svg.selectAll(".label")
        .data(automaton.nodes)
        .enter().append("text")
        .attr("class", "label")
        .attr("dy", ".35em")
        .attr("x", 25) 
        .style("font-size", "12px")
        .text(d => d.id);

    function ticked() {
        link.attr("d", d => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = Math.sqrt(dx * dx + dy * dy);
            return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        });

        linkLabels
            .attr("x", d => (d.source.x + d.target.x) / 2)
            .attr("y", d => (d.source.y + d.target.y) / 2);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}
