const ElevatorDispatch = require('./ElevatorDispatch');

const dispatch = new ElevatorDispatch(6, 6);

const elevatorOne = dispatch.requestElevator(1);