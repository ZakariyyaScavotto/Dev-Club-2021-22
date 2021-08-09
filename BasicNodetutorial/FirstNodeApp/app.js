// function sayHello(name){ //Basic function
//     console.log("Hello "+ name);
// }

// sayHello("Zak"); //Calls the function, printing Hello Zak in terminal

/*console.log(window) should get exception that window is not defined
    This is because in Node there is no "document" or "window"
*/

// console.log(module)
// Module {
//     id: '.',
//     path: 'C:\\Users\\zs811\\OneDrive\\Documents\\Dev-Club-2021-22\\FirstNodeApp',
//     exports: {},
//     parent: null,
//     filename: 'C:\\Users\\zs811\\OneDrive\\Documents\\Dev-Club-2021-22\\FirstNodeApp\\app.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\zs811\\OneDrive\\Documents\\Dev-Club-2021-22\\FirstNodeApp\\node_modules',
//       'C:\\Users\\zs811\\OneDrive\\Documents\\Dev-Club-2021-22\\node_modules',
//       'C:\\Users\\zs811\\OneDrive\\Documents\\node_modules',
//       'C:\\Users\\zs811\\OneDrive\\node_modules',
//       'C:\\Users\\zs811\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }

//const logger = require('./logger'); //"."" in the name of path since the 2 files are in the same folder. Could add .js in the end
//                                     //But it is assumed it is a js file
//                                     //Best to save as constant to prevent accidental override
// //console.log(logger); //{ log: [Function: log] }
// logger.log('message');
// if exported one function, logger('message');

const path = require('path') // node assumes built-in module
// var pathObj = path.parse(__filename);
// console.log(pathObj);
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\zs811\\OneDrive\\Documents\\Dev-Club-2021-22\\FirstNodeApp',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
// }

const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);
// Template String
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
// Total Memory: 8496713728
// Free Memory: 2294136832

const fs = require('fs');
//const files = fs.readdirSync('./') // Sync is easier to understand, returns all files and folders in this folder, string array
//console.log(files);
//[ 'app.js', 'logger.js' ]

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// }); //2nd param callback function that is called once done, error and result
//Result [ 'app.js', 'logger.js' ]

const EventEmitter = require('events');
//const emitter = new EventEmitter(); //declares instance of the class
//2 main methods
//register a listener
// emitter.on('messageLogged', (eventArg) => {
//     console.log('Listener called', eventArg);
// }); //could also use addListener
//raises an event of a certain name with event argument
//emitter.emit('messageLogged', {id: 1, url: 'http://'}); prints Listener called { id: 1, url: 'http://' }
//message, arg not in console because 2 different event emitters
// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('messageLogged', (eventArg) => {
//     console.log('Listener called', eventArg);
// });
// logger.log('message');
//message
//Listener called { id: 1, url: 'http://' }

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World'); //makes blank site with Hello World on it
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); //Is an event emitter
// server.on('connection', (socket) => {
//     console.log('New Connection');
// })
server.listen(3000);
console.log('Listening on port 3000...');
//New Connection