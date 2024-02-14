const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());


class Logger extends EventEmitter{ // inheriting the properties and methods of EventEmitter module to create a blue print 
    // i am using the method to carry out a task with the emit properties i have inherited from the eventEmitter module
    log(msg) { // the method 
        // call event  
        this.emit('message', uuid.v4()); // here this rep the class name (Logger)and i am extending or inheriting the emit task and assigning it to this class in the method
        this.emit('events', {id:uuid.v4()});
        
        // here this rep
    }
    cog(msg){
        this.emit('message', {id:uuid.v4(), msg});
    }
    mog(msg){
        this.emit('event', {id:uuid.v4(), msg});
    }
}

module.exports = Logger;