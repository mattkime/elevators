const ElevatorDispatch = require('./ElevatorDispatch');

const dispatch = new ElevatorDispatch(6, 6);

dispatch.requestElevator(1);