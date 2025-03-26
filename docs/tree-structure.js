// --- Tree Node Class ---
class AutomatonNode {
    constructor(data) {
      this.name = data.name;
      this.kind = data.kind;
      this.children = [];
      this.color = null; // Hex color used for highlighting.
      this.depth = 0;    // Will be set during tree generation.
    }
    addChild(child) {
      this.children.push(child);
    }
  }
  
  // --- Predefined Base Colors (avoid red, lime, and purple) ---
  const baseColors = [
    "#007BFF", // Blue
    "#17A2B8", // Cyan
    "#28A745", // Green
    "#FD7E14", // Orange
    "#20C997"  // Teal
  ];
  
  // --- Helper Functions for Color Conversion ---
  // Convert a hex color (e.g. "#007BFF") to an HSL object.
  function hexToHSL(H) {
    let hex = H.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }
  
  // Convert an HSL (h in degrees, s and l in percentages) to a hex color string.
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join('');
  }
  
  // Adjust the lightness of a hex color to a target percentage (0–100).
  function adjustLightness(hex, targetLightness) {
    let hsl = hexToHSL(hex);
    return hslToHex(hsl.h, hsl.s, targetLightness);
  }
  
  // --- Generate Distinct Base Colors for the Root's Children ---
  // For n ≤ 5, we use a preferred mapping for maximum distinctiveness.
  // For example, if there are 2 children, choose cyan and orange.
  function generateDistinctBaseColorsForRoot(n) {
    const preferredCombinations = {
      1: [1],
      2: [1, 3],
      3: [1, 3, 0],
      4: [1, 3, 0, 2],
      5: [1, 3, 0, 2, 4]
    };
    if (n <= 5) {
      const indexes = preferredCombinations[n];
      // Darken the colors a bit by setting lightness to 80.
      return indexes.map(i => adjustLightness(baseColors[i], 80));
    } else {
      // For more than 5, fall back to evenly spaced colors and darken them.
      return generateDistinctBaseColors(n).map(color => adjustLightness(color, 80));
    }
  }
  
  // --- Fallback: Evenly generate distinct colors (if needed) ---
  function generateDistinctBaseColors(n) {
    if (n <= baseColors.length) {
      return baseColors.slice(0, n).map(color => adjustLightness(color, 95));
    }
    const intervals = [
      { start: 15, end: 45 },   // Orange-ish range
      { start: 75, end: 105 },  // Greenish range (avoiding bright lime)
      { start: 135, end: 270 }, // Wide range covering greens to blues
      { start: 300, end: 345 }  // Avoiding purple
    ];
    const totalAllowed = intervals.reduce((sum, seg) => sum + (seg.end - seg.start), 0);
    let colors = [];
    for (let i = 0; i < n; i++) {
      let target = (i + 0.5) * (totalAllowed / n);
      let hue;
      for (let seg of intervals) {
        let segLength = seg.end - seg.start;
        if (target <= segLength) {
          hue = seg.start + target;
          break;
        } else {
          target -= segLength;
        }
      }
      // Using saturation 70 and lightness 95 for a vivid, light base color.
      colors.push(hslToHex(hue, 70, 95));
    }
    return colors;
  }
  
  // --- Compute Maximum Depth in a Branch ---
  // Returns the maximum depth (starting with currentDepth for leaf nodes)
  function computeMaxDepth(node, currentDepth = 0) {
    if (node.children.length === 0) return currentDepth;
    let maxDepth = currentDepth;
    node.children.forEach(child => {
      let childDepth = computeMaxDepth(child, currentDepth + 1);
      if (childDepth > maxDepth) maxDepth = childDepth;
    });
    return maxDepth;
  }
  
  // --- Assign Colors to a Branch Based on Its Depth ---
  // For nodes deeper than level 1, linearly interpolate the lightness.
  // The branch’s base color (at level 1) is taken as the parent’s color.
  function assignBranchColors(node, currentLevel, branchMax, baseHex) {
    let baseHSL = hexToHSL(baseHex);
    let baseBrightness = baseHSL.l; // e.g. 80 for our root children.
    let low = Math.max(baseBrightness - 20, 40); // Do not go below 40.
    let brightness;
    if (branchMax === 1) {
      brightness = baseBrightness;
    } else {
      brightness = baseBrightness - ((currentLevel - 1) * ((baseBrightness - low) / (branchMax - 1)));
    }
    node.color = adjustLightness(baseHex, brightness);
    node.children.forEach(child => assignBranchColors(child, currentLevel + 1, branchMax, baseHex));
  }
  
  // --- Generate Automata Tree with Depth ≤ 4 ---
  // 1. Attach up to 6 nodes directly as children of the root.
  // 2. Then attach the remaining nodes only to those whose depth is less than 4.
  function generateAutomataTree(automataList) {
    if (!Array.isArray(automataList) || automataList.length === 0) {
      throw new Error("Invalid input: expected an array of automata.");
    }
    let nodes = automataList.map(auto => new AutomatonNode(auto));
    let root = new AutomatonNode({ name: "Root", kind: "Root" });
    root.color = "#FFFFFF"; // Root uses a white background.
    root.depth = 0;
    
    const maxDirectChildren = 6;
    const directChildrenCount = Math.min(maxDirectChildren, nodes.length);
    // Attach first up to 6 nodes as direct children.
    for (let i = 0; i < directChildrenCount; i++) {
      let node = nodes[i];
      node.depth = 1;
      root.addChild(node);
    }
    
    // Maintain a list of eligible parent nodes (those with depth < 4).
    let eligibleParents = root.children.filter(n => n.depth < 4);
    
    // Attach the remaining nodes.
    for (let i = directChildrenCount; i < nodes.length; i++) {
      let node = nodes[i];
      if (eligibleParents.length === 0) {
        // Fallback: attach to root if no eligible parent exists.
        node.depth = 1;
        root.addChild(node);
        eligibleParents.push(node);
      } else {
        let parent = eligibleParents[Math.floor(Math.random() * eligibleParents.length)];
        node.depth = parent.depth + 1;
        // Ensure maximum depth is 4.
        if (node.depth > 4) {
          node.depth = 1;
          root.addChild(node);
          eligibleParents.push(node);
        } else {
          parent.addChild(node);
          if (node.depth < 4) eligibleParents.push(node);
        }
      }
    }
    
    // --- Color Assignment ---
    // Assign distinct base colors (with lightness 80) to the root's children.
    let distinctColors = generateDistinctBaseColorsForRoot(root.children.length);
    root.children.forEach((child, idx) => {
      child.color = distinctColors[idx];
      // Compute the maximum depth of this branch (starting at level 1 for the child).
      let branchMax = computeMaxDepth(child, 1);
      // For all descendants, assign colors based on branch depth.
      child.children.forEach(grandChild => assignBranchColors(grandChild, 2, branchMax, child.color));
    });
    
    return root;
  }
  
  // --- Print the Tree with Highlighting ---
  // Prints each node with CSS styling using the assigned background color (with black text).
  function printTree(node, depth = 0) {
    const indent = " ".repeat(depth * 2);
    console.log(
      `%c${indent}↳ ${node.name} (${node.kind})`,
      `background-color: ${node.color}; color: black; padding: 2px;`
    );
    node.children.forEach(child => printTree(child, depth + 1));
  }
  

