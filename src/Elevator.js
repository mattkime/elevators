module.exports = class Elevator {
    constructor(floorCount) {
        this.floorCount = floorCount;
        this.currentFloor = 1;
    }
    validateFloor(floor) {
        return floor >= 1 && floor <= this.floorCount;
    }
    goTo(targetFloor) {
        if (!this.validateFloor(targetFloor)) {
            throw Error("Invalid floor number");
        }
        // compare targetFloor to currentFloor
        // go to next closest floor
        // fire event on next floor
        // repeat until at target floor
    }
}