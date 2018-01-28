const Elevator = require('./Elevator');

module.exports = class ElevatorDispatch {
    constructor(elevatorCount, floorCount) {
        this.elevators = [];
        // initialize and push elevator instances to array
    }
    async requestElevator(floor) {
        // find elevator and tell it to go to a given floor
        // is there an unoccupied elevator on this floor
        // is an occupied elevator moving past this floor
        // closest unoccupied elevator

        //return elevator instance via promise, after elevator arrives
    }
}