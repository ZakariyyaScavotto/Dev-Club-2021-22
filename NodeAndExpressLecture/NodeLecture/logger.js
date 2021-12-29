// Example module for logging messages using remote logging service

// Logger version 1: Pre-EventEmitter
// var url = "http://myFakeLogger.io/log";

// function log(message) {
// 	//Sending an HTTP request
// 	//Not actually doing this right now, the focus is on learning about modularity

// 	console.log(message);
// }

// // Adding a method which we are calling log
// // to the exports object, setting it equal to
// // our log function
// // module.exports.log = log;

// // Better export in this case
// module.exports = log;

// Logger v2: Using EventEmitter
const EventEmitter = require("events");
var url = "http://myFakeLogger.io/log";

class Logger extends EventEmitter {
	log(message) {
		// 'Send' HTTP reqest
		console.log(message);
		// raise an event
		this.emit("messageLogged", { id: 1, url: "http://" });
	}
}
module.exports = Logger;
