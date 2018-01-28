const EventEmitter = require('events');

module.exports = class Elevator extends EventEmitter {
    constructor(floorCount) {
        super();
        this.floorCount = floorCount;
        this.currentFloor = 1;
        this.tripsMade = 0;
        this.tripsSinceService = 0;
        this.occupied = false;
    }
    validateFloor(floor) {
        return floor >= 1 && floor <= this.floorCount;
    }
    goTo(targetFloor) {
        if (!this.validateFloor(targetFloor)) {
            throw Error("Invalid floor number");
        }
        if (!this.isInService()) {
            throw Error("Elevator out of service");
        }
        if (this.currentFloor == targetFloor) { return; }

        // 'trips' could be defined a bit better
        // is a trip based on coming to a given floor, and taking someone to another floor?
        // or every time the doors open? Trips can overlap
        this.tripsMade++;
        this.tripsSinceService++;
        // compare targetFloor to currentFloor
        // go to next closest floor
        // fire event on next floor
        // repeat until at target floor

        this.open();
        // fire event if no longer in service
        if (!isInService()) {
            this.emit('outOfService', this);
        }
    }
    open() {
        // report opening doors
        this.emit('open', this);
    }
    close() {
        //report closing doors
        this.emit('close', this);
    }
    isInService() {
        return this.tripsSinceService <= 100;
    }
    resetServiceInterval() {
        this.tripsSinceService = 0;
    }
}