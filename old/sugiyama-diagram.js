const nodes = [
    { id: "A", layer: 0 },
    { id: "B", layer: 1 },
    { id: "C", layer: 1 },
    { id: "D", layer: 2 },
    { id: "E", layer: 2 }
];

const links = [
    { source: "A", target: "B" },
    { source: "A", target: "C" },
    { source: "B", target: "D" },
    { source: "C", target: "E" }
];

const width = 600, height = 400;

const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("y", d3.forceY().strength(0.1)) // Layering along Y-axis
    .force("x", d3.forceX(d => d.layer * 150).strength(1)) // Set layers manually
    .on("tick", ticked);

const link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", "#999")
    .style("stroke-width", "2px");

const node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 10)
    .style("fill", "#69b3a2")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

const label = svg.selectAll(".label")
    .data(nodes)
    .enter().append("text")
    .attr("class", "label")
    .attr("dy", ".35em")
    .attr("x", 12)
    .text(d => d.id);

function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

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
