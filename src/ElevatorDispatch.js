const Elevator = require('./Elevator');

module.exports = class ElevatorDispatch {
    constructor(elevatorCount, floorCount) {
        this.elevators = [];
        for (let i = 0; i < elevatorCount; i++) {
            this.elevators.push(new Elevator(floorCount));
        }
    }
    getElevatorUnoccupiedCurrentFl(floor) {
        const elevatorsUnoccupiedCurrentFl = this.elevators
            .filter(elevator => !elevator.occupied)
            .filter(elevator => elevator.currentFloor == floor);

        if (elevatorsUnoccupiedCurrentFl.length) {
            return elevatorsUnoccupiedCurrentFl[0];
        }
    }
    async requestElevator(floor) {
        // find elevator and tell it to go to a given floor
        // is there an unoccupied elevator on this floor
        // is an occupied elevator moving past this floor
        // closest unoccupied elevator

        //return elevator instance via promise, after elevator arrives
        return getElevatorUnoccupiedCurrentFl(floor);
    }
}