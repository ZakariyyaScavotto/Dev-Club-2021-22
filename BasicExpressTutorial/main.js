//I have made this comment on the desktop

const express = require("express"); //requires express
const app = express(); //makes new instance of express
const path = require("path");
app.use(
	express.urlencoded({ extended: false })
); /*use piece of middleware globally
  built in part of express, looks at body of post request, will add properties to request.body object
  so it's easy to access values
  adds request.body properties of user's form inputs*/
//app.use(getWeather) if you wanted to use it application-wide
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function getWeather(req, res, next) {
	//middleware, when done next is called
	req.visitorWeather = true;
	next(); //auto moves to next function
}
/*get request: basic url request, html form: post request
  req: represents incoming request from visitor
  res: lets us respond (send a text response)*/
app.get("/", getWeather, (req, res) => {
	// localhost:3000
	//res.send('Welcome to our homepage.'); //sends the message
	/*hacky, just for proof of concept
    action is the route, method is the type of request
    in forms, browser defaults to GET request
    POST request: user values will live in body of request instead of URL
    */ //back ticks: multiple lines, HTML
	res.render("home", {
		isRaining: req.visitorWeather,
		pets: [
			{ name: "Meowsalot", species: "cat" },
			{ name: "Barksalot", species: "dog" },
		],
	});
	// res.send(`
	// <h1>What color is the sky on a clear day?</h1>
	// <form action="/result" method="POST">
	//     <input type = "text" name = "color">
	//     <button>Submit Answer</button>
	// </form>
	// <p>${req.visitorWeather ? 'It is raining.' : 'It is not raining.'}</p>
	// `); //^ ternary operator if statement
});

app.get("/about", (req, res) => {
	//localhost:3000/about
	res.send("Thanks for learning more about us.");
});
/*listening to post request for Color question
post request url: localhost:3000/result
if it was get request: localhost:3000/result?color=inputtedAnswer
Cannot manually go to localhost:3000/result since the browser can't GET it*/
app.post("/result", (req, res) => {
	if (req.body.color.trim().toUpperCase() === "BLUE") {
		//can do req.body.color thanks to the urlencoded thing at top
		res.send("Congrats, that is correct!");
	} else {
		res.send("Incorrect, please try again.");
	}
	//res.send('Thank you for submitting the form.');
});

app.get("/result", (req, res) => {
	res.send("Why are you visiting this URL directly??");
});

app.get("/api/pets", (req, res) => {
	res.json([
		{ name: "Meowsalot", species: "cat" },
		{ name: "Barksalot", species: "dog" },
	]);
});

app.listen(3000);
