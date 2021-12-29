// Part 1: basic program to show how to run JS with node

// function sayHello(name) {
// 	//just a simple console log
// 	console.log("Hello " + name);
// }
// sayHello("Zak"); //Calls the function, printing Hello Zak in terminal

// Part 2: showing that variables are not added to global object

// var message = "";
// console.log(global.message);

// Part 3: showing what a module looks like

// console.log(module);

// Part 4: using logger module

//loads the logger module
// const logger = require("./logger"); // .js end is optional

// console.log(logger);

// logger.log("My message");

// Part 5: A better import of logger

// const log = require("./logger");
// log("My message");

// Part 6: The Path Module

// const path = require("path");

//example use: the parse method
// var filePath = path.parse(__filename);
// console.log(filePath);

// Part 7: The OS Module

// const os = require("os");

//example: get the total/free amount of memory a system has
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total: ${totalMemory}`); //logging using ES6 template string
// console.log(`Free: ${freeMemory}`);

// Part 8: The File System Module

// const fs = require("fs");

//Sync version
// const files = fs.readdirSync("./");
// console.log("Sync, ", files);

//Async version
// fs.readdir("./", function (err, files) {
// 	//Callback function: executed on completion,
// 	//depending on whether there's an error or success
// 	if (err) console.log("Error, ", err);
// 	else console.log("Async, ", files);
// });

// Part 9: Basics of Using the Events Module

//require returns the EventEmitter class
// const EventEmitter = require("events");
//	  ^Caps signfiy class

//create EventEmitter object
// const emitter = new EventEmitter();

// register a listener
// emitter.on("messageLogged", function () {
// 	console.log("Listener called");
// });

// raise an event
// emitter.emit("messageLogged");

// Part 10: Events with Arguments

// const EventEmitter = require("events");

//create EventEmitter object
// const emitter = new EventEmitter();

// register a listener
// emitter.on("messageLogged", (arg) => {
// 	console.log("Listener called", arg);
// });

// raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// Part 11: Extending Logger

// const EventEmitter = require("events");

//import and create a Logger instance
// const Logger = require("./logger");
// const logger = new Logger();
//create a listener for the logger object
// logger.on("messageLogged", (arg) => {
// 	console.log("Listener called", arg);
// });
//log a message
// logger.log("message");

// Part 12: the HTTP module, basics of getting a connection

// const http = require("http");

//create a web server
//it's also an EventEmitter!
// const server = http.createServer();

// server.on("connection", (socket) => {
// 	console.log("New connection...");
// });
//have the server listen on a port
// server.listen(3000);

// console.log("Listening on port 3000...");

// Part 13: HTTP module:

const http = require("http");

//create a web server
//it's also an EventEmitter!
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello World!");
		res.end();
	}
});

//have the server listen on a port
server.listen(3000);

console.log("Listening on port 3000...");
