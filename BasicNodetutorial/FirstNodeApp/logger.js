//Going to log messages, gonna say we use in multiple spots/applications
const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'http://mylogger.io/log'; //made up

class Logger extends EventEmitter{
    log(message) { //Want to access this in app.js
        //send an HTTP request, for now console.log
        console.log(message);
    
        //raises an event of a certain name with event argument
        this.emit('messageLogged', {id: 1, url: 'http://'}); 
    }
}
//module.exports = log;
module.exports = Logger;
//if you only wanted to export 1 function, module.exports = log