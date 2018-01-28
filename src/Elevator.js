module.exports = class Elevator {
    constructor(floorCount) {
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
        this.tripsMade++;
        this.tripsSinceService++;
        // compare targetFloor to currentFloor
        // go to next closest floor
        // fire event on next floor
        // repeat until at target floor

        this.open();
        // fire event if no longe in service
    }
    open() {
        // report opening doors
        // fire event
    }
    close() {
        //report closing doors
        // fire event
    }
    isInService() {
        return this.tripsSinceService <= 100;
    }
    resetServiceInterval() {
        this.tripsSinceService = 0;
    }
}