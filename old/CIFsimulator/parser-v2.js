class Automaton {
    constructor(name, supKind = "None") {
        this.name = name;
        this.supKind = supKind;  // Types: None, Plant, Requirement, Supervisor
        this.events = [];
        this.locations = [];
        this.invariants = [];
        this.equations = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    addLocation(location) {
        this.locations.push(location);
    }

    addInvariant(invariant) {
        this.invariants.push(invariant);
    }

    addEquation(equation) {
        this.equations.push(equation);
    }
}

class Event {
    constructor(name, controllable = true) {
        this.name = name;
        this.controllable = controllable;  // true for controllable, false for uncontrollable
    }
}

class Location {
    constructor(name, isInitial = false, isMarked = false, urgent = false) {
        this.name = name;
        this.isInitial = isInitial;
        this.isMarked = isMarked;
        this.urgent = urgent; // if location is urgent
        this.edges = [];
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}

class Edge {
    constructor(event, guard = null, action = null, targetLocation = null, urgent = false) {
        this.event = event;
        this.guard = guard;
        this.action = action;
        this.targetLocation = targetLocation;
        this.urgent = urgent; // if edge is urgent
    }
}

class Invariant {
    constructor(name, supKind = "None", invKind = "State") {
        this.name = name;
        this.supKind = supKind;  // Types: None, Plant, Requirement, Supervisor
        this.invKind = invKind;  // Types: State, EventNeeds, EventDisables
    }
}

class Equation {
    constructor(variable, expression, derivative = false) {
        this.variable = variable;
        this.expression = expression;
        this.derivative = derivative; // if equation is a derivative
    }
}

class CIFParser {
    constructor(cifText) {
        this.cifText = cifText;
        this.automata = [];
    }

    parse() {
        const lines = this.cifText.split('\n');
        let currentAutomaton = null;
        let currentLocation = null;

        for (let line of lines) {
            line = line.trim();

            if (!line || line.startsWith('//')) continue;

            const automatonMatch = line.match(/^automaton (\w+):/);
            if (automatonMatch) {
                const name = automatonMatch[1];
                const supKind = line.includes("Plant") ? "Plant" :
                                line.includes("Requirement") ? "Requirement" :
                                line.includes("Supervisor") ? "Supervisor" : "None";
                currentAutomaton = new Automaton(name, supKind);
                this.automata.push(currentAutomaton);
                continue;
            }

            const eventMatch = line.match(/^event (.+);/);
            if (eventMatch && currentAutomaton) {
                const events = eventMatch[1].split(',').map(e => e.trim());
                events.forEach(eventString => {
                    const [name, type] = eventString.split(':').map(e => e.trim());
                    const controllable = type !== "uncontrollable";
                    const event = new Event(name, controllable);
                    currentAutomaton.addEvent(event);
                });
                continue;
            }

            const locationMatch = line.match(/^location (\w+):/);
            if (locationMatch && currentAutomaton) {
                const name = locationMatch[1];
                const isInitial = line.includes("initial");
                const isMarked = line.includes("marked");
                const urgent = line.includes("urgent");
                currentLocation = new Location(name, isInitial, isMarked, urgent);
                currentAutomaton.addLocation(currentLocation);
                continue;
            }

            const edgeMatch = line.match(/^edge (\w+)(?: when (.+?))?(?: do (.+?))?(?: goto (\w+))?;/);
            if (edgeMatch && currentLocation) {
                const [_, eventName, guard, action, target] = edgeMatch;
                const event = currentAutomaton.events.find(e => e.name === eventName) || new Event(eventName);
                const targetLocation = currentAutomaton.getLocationByName(target);
                const urgent = line.includes("urgent");
                const edge = new Edge(event, guard, action, targetLocation, urgent);
                currentLocation.addEdge(edge);
                continue;
            }

            const invariantMatch = line.match(/^invariant (\w+):/);
            if (invariantMatch && currentAutomaton) {
                const name = invariantMatch[1];
                const supKind = line.includes("Plant") ? "Plant" :
                                line.includes("Requirement") ? "Requirement" :
                                line.includes("Supervisor") ? "Supervisor" : "None";
                const invKind = line.includes("EventNeeds") ? "EventNeeds" :
                                line.includes("EventDisables") ? "EventDisables" : "State";
                const invariant = new Invariant(name, supKind, invKind);
                currentAutomaton.addInvariant(invariant);
                continue;
            }

            const equationMatch = line.match(/^equation (\w+)\s*=\s*(.+);/);
            if (equationMatch && currentAutomaton) {
                const variable = equationMatch[1];
                const expression = equationMatch[2];
                const derivative = line.includes("derivative");
                const equation = new Equation(variable, expression, derivative);
                currentAutomaton.addEquation(equation);
                continue;
            }
        }
    }

    getAutomata() {
        return this.automata;
    }
}

// Example Usage
const cifText = `
automaton WashingMachine Plant:
    event insertCoin: uncontrollable, returnCoin: controllable;
    disc int coins = 0;

    location ready:
        initial; marked;
        edge returnCoin when coins >= 1 do coins := coins - 1;
        edge insertCoin do coins := coins + 1;
        edge closeDoor goto closedDoors;

    location closedDoors:
        marked; urgent;
        edge openDoor goto ready;

invariant washingMachineInv:
    supKind = Requirement;
    invKind = State;
end
`;

// Initialize parser and parse the provided CIF text
const parser = new CIFParser(cifText);
parser.parse();
console.log(parser.getAutomata());
