var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hi there, welcome to my assigment!");
});

app.get('/speak/:animal', function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you humans",
        goldfish: "..."
    }

    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get('/repeat/:word/:ntimes', function(req, res){
    var nTimes = req.params.ntimes;
    var word = req.params.word;
    var finalString = ""

    for(var i = 0; i < nTimes; i++){
       finalString += (word + " ");
    }

    res.send(finalString);
});

app.get('*', function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, process.env.IP, function(){
    console.log("Server demoExpress has started!");
});