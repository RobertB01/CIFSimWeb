// Define different types of Automaton based on the CIF model.
class Automaton {
    constructor(name, type = "default") {
        this.name = name;
        this.type = type;  // Automaton type (e.g., "synchronous", "asynchronous")
        this.events = [];
        this.locations = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    addLocation(location) {
        this.locations.push(location);
    }

    getLocationByName(name) {
        return this.locations.find(location => location.name === name);
    }
}

class Event {
    constructor(name) {
        this.name = name;
    }
}

class Location {
    constructor(name, isInitial = false, isMarked = false) {
        this.name = name;
        this.isInitial = isInitial;
        this.isMarked = isMarked;
        this.edges = [];
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}

class Edge {
    constructor(event, guard = null, action = null, targetLocation = null) {
        this.event = event;
        this.guard = guard;
        this.action = action;
        this.targetLocation = targetLocation;
    }
}

// Parser class to read CIF file content
class CIFParser {
    constructor(cifText) {
        this.cifText = cifText;
        this.automata = [];
    }

    parse() {
        let lines = this.cifText.split('\n');
        let currentAutomaton = null;
        let currentLocation = null;

        for (let line of lines) {
            line = line.trim();

            // Skip empty lines and comments
            if (!line || line.startsWith('//')) continue;

            // Match automaton definition
            let automatonMatch = line.match(/^automaton (\w+):/);
            if (automatonMatch) {
                const name = automatonMatch[1];
                const type = line.includes("synchronous") ? "synchronous" :
                            line.includes("asynchronous") ? "asynchronous" : "default";
                currentAutomaton = new Automaton(name, type);
                this.automata.push(currentAutomaton);
                continue;
            }

            // Match event definitions
            let eventMatch = line.match(/^event (.+);/);
            if (eventMatch && currentAutomaton) {
                let events = eventMatch[1].split(',').map(e => e.trim());
                events.forEach(eventName => {
                    currentAutomaton.addEvent(new Event(eventName));
                });
                continue;
            }

            // Match location definitions
            let locationMatch = line.match(/^location (\w+):/);
            if (locationMatch && currentAutomaton) {
                const name = locationMatch[1];
                const isInitial = line.includes("initial");
                const isMarked = line.includes("marked");
                currentLocation = new Location(name, isInitial, isMarked);
                currentAutomaton.addLocation(currentLocation);
                continue;
            }

            // Match edge definitions
            let edgeMatch = line.match(/^edge (\w+)(?: when (.+?))?(?: do (.+?))?(?: goto (\w+))?;/);
            if (edgeMatch && currentLocation) {
                const [_, eventName, guard, action, target] = edgeMatch;
                const event = currentAutomaton.events.find(e => e.name === eventName) || new Event(eventName);
                const targetLocation = currentAutomaton.getLocationByName(target);
                const edge = new Edge(event, guard, action, targetLocation);
                currentLocation.addEdge(edge);
                continue;
            }
        }
    }

    // Method to return parsed automata
    getAutomata() {
        return this.automata;
    }
}

// Example Usage
const cifText = `
automaton WashingMachine synchronous:
    event insertCoin, returnCoin, select90, select40, openDoor, closeDoor;
    disc int coins = 0;

    location ready:
        initial; marked;
        edge returnCoin when coins >= 1 do coins := coins - 1;
        edge insertCoin do coins := coins + 1;
        edge closeDoor goto closedDoors;

    location closedDoors:
        marked;
        edge openDoor goto ready;
        edge returnCoin when coins >= 1 do coins := coins - 1;
        edge insertCoin do coins := coins + 1;
        edge select40 when coins = 1 do coins := 0 goto washAt40;
        edge select90 when coins = 2 do coins := 0 goto washAt90;

    location washAt90:
        edge openDoor goto ready;

    location washAt40:
        edge openDoor goto ready;
end
`;

// Initialize parser and parse the provided CIF text
const parser = new CIFParser(cifText);
parser.parse();
console.log(parser.getAutomata());
