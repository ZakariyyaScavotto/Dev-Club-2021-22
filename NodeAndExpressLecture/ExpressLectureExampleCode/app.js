// Part 1: Bringing in Express

//Brings in express like another module,
//as discussed in the Node lecture
// const express = require("express");

//create a new instance of express, call it app
// const app = express();

//Setting up a homepage
// app.get("/", (req, res) => {
// 	res.send("Welcome to the homepage");
// });

// //Setting up an about page
// app.get("/about", (req, res) => {
// 	res.send("About me");
// });

//Creating a port constant based on process.env.PORT
//or our usual 3000, useful if the web app will be deployed
//to an external service
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

// Part 2: An Example POST Request: What Color Is The Sky?

// const express = require("express");
// const app = express();

//Setting up the form
//Does this feel hacky? Wrong? Good, because it should!
// app.get("/", (req, res) => {
// 	res.send(`
//     <h1>What color is the sky on a clear day?</h1>
//     <form action="/result" method="POST">
//         <input type = "text" name="color">
//         <button>Submit Answer</button>
//     </form>
//     `);
// });

// app.post("/result", (req, res) => {
// 	res.send("Thank you for your response.");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

// Part 3: What Color Is The Sky? Handling User Input

// const express = require("express");
// const app = express();

//using middleware to let us see in the request body
//looks at the body of the request, adds convenient properties
//to accesss what the user submitted
// app.use(express.urlencoded({ extended: false }));

//Setting up the form
//Does this feel hacky? Wrong? Good, because it should!
// app.get("/", (req, res) => {
// 	res.send(`
//     <h1>What color is the sky on a clear day?</h1>
//     <form action="/result" method="POST">
//         <input type = "text" name="color">
//         <button>Submit Answer</button>
//     </form>
//     `);
// });

// app.post("/result", (req, res) => {
// 	if (req.body.color.trim().toUpperCase() == "BLUE") {
// 		res.send("Congrats, that is correct.");
// 	} else {
// 		res.send("Incorrect, try again.");
// 	}
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

// Part 4: Creating Middleware: Is it Raining?

// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: false }));

//our middleware function
//next let's express know it's time to move on
// function getWeather(req, res, next) {
// 	req.visitorWeather = true; //it's raining
// 	next();
// }

// app.get("/", getWeather, (req, res) => {
// 	res.send(`
//     <h1>What color is the sky on a clear day?</h1>
//     <form action="/result" method="POST">
//         <input type = "text" name="color">
//         <button>Submit Answer</button>
//     </form>
//     <p>${req.visitorWeather ? "It is raining" : "It is not raining"}</p>
//     `);
// });

// app.post("/result", (req, res) => {
// 	if (req.body.color.trim().toUpperCase() == "BLUE") {
// 		res.send("Congrats, that is correct.");
// 	} else {
// 		res.send("Incorrect, try again.");
// 	}
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

// Part 5/6/7: Using EJS, Dynamic Value, CSS

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

//using path to create the path to our views folder
const path = require("path");

//setting our view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//adding CSS
app.use(express.static(path.join(__dirname, "public")));

function getWeather(req, res, next) {
	req.visitorWeather = true; //it's raining
	next();
}

app.get("/", getWeather, (req, res) => {
	res.render("home", {
		isRaining: req.visitorWeather
	});
});

app.post("/result", (req, res) => {
	if (req.body.color.trim().toUpperCase() == "BLUE") {
		res.send("Congrats, that is correct.");
	} else {
		res.send("Incorrect, try again.");
	}
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
