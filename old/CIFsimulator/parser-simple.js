// Define an Automaton class to represent a CIF automaton.
class Automaton {
    constructor(name) {
        this.name = name;
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

// Define an Event class to represent CIF events.
class Event {
    constructor(name) {
        this.name = name;
    }
}

// Define a Location class to represent locations within an Automaton.
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

// Define an Edge class to represent transitions between locations.
class Edge {
    constructor(event, guard = null, action = null, targetLocation = null) {
        this.event = event;       // Event associated with this edge
        this.guard = guard;       // Condition to be met
        this.action = action;     // Action performed on transition
        this.targetLocation = targetLocation; // Target location for this edge
    }
}

// Example usage:
const automaton = new Automaton("WashingMachine");
const insertCoin = new Event("insertCoin");
const returnCoin = new Event("returnCoin");

const ready = new Location("ready", true, true);
const closedDoors = new Location("closedDoors");

automaton.addEvent(insertCoin);
automaton.addEvent(returnCoin);
automaton.addLocation(ready);
automaton.addLocation(closedDoors);

const edge1 = new Edge(insertCoin, null, "coins := coins + 1", closedDoors);
ready.addEdge(edge1);

// Print out structure for verification
console.log(automaton);
