var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
    console.log("Someone made a request to /");
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    console.log("Someone made a request to /bye");
	res.send("Goodbye!");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res){
	console.log("Someone made a request to /dog");
	res.send("MEAOW!");
});

// "*" all routes that haven't matched before
app.get("*", function(req, res){
	res.send("OOPS! Nothing here!");
});

//Tell Express to listen for requests (start server)
app.listen(3000, process.env.IP, function(){
	console.log("Server has started!");
});