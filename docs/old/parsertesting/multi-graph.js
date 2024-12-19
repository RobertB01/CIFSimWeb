function drawAutomaton(automataData, graph_container) {
    automataData.forEach(automaton => {

        const nodeCount = automaton.nodes.length;
        const linkCount = automaton.links.length;

        const width = Math.max(500, nodeCount * 150);
        const height = Math.max(400, linkCount * 100); 

        const container = d3.select(graph_container).append("div").attr("class", "automaton-container");

        const svg = container.append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("text")
            .attr("class", "automaton-title")
            .attr("x", width / 2)  
            .attr("y", 20) 
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .style("font-weight", "bold")
            .text(automaton.title);

        svg.append("defs").append("marker")
            .attr("id", "arrowhead-" + automaton.id)
            .attr("viewBox", "-0 -5 10 10")
            .attr("refX", 40)
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
            .attr("class", "link")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-width", "2px")
            .attr("marker-end", "url(#arrowhead-" + automaton.id + ")"); 

        svg.selectAll(".link-path")
            .data(automaton.links)
            .enter().append("path")
            .attr("id", (d, i) => `linkPath${automaton.id}-${i}`)
            .attr("class", "link-path")
            .attr("fill", "none")
            .attr("stroke", "none");

        const linkLabels = svg.selectAll(".link-label")
            .data(automaton.links)
            .enter().append("text")
            .attr("class", "link-label")
            .append("textPath")
            .attr("xlink:href", (d, i) => `#linkPath${automaton.id}-${i}`)
            .attr("startOffset", "50%")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("dy", "-0.4em")
            .attr("transform", d => {
                const dx = d.target.x - d.source.x;
                const dy = d.target.y - d.source.y;
                return (dx < 0) ? "rotate(180)" : ""; 
            })
            .text(d => d.label);

        const node = svg.selectAll(".node")
            .data(automaton.nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 40)
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
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .text(d => d.id);

function ticked() {
    link.attr("d", d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
    });

    svg.selectAll(".link-path")
        .attr("d", d => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = Math.sqrt(dx * dx + dy * dy);
            return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        });

    node.attr("cx", d => d.x = Math.max(40, Math.min(width - 40, d.x))) 
        .attr("cy", d => d.y = Math.max(40, Math.min(height - 40, d.y)));

    label.attr("x", d => d.x)
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
    });
}
