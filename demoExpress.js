var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hi there, welcome to my assigment!");
});

app.get('/speak/:animal', function(req, res){
    var animal = req.params.animal;
    if(animal == "pig"){
        res.send("The pig says 'Oink!'");
    }else if(animal == "cow"){
        res.send("The pig says 'Moo!'");
    }else if(animal == "dog"){
        res.send("The pig says 'Woof Woof!'");
    }else {
        res.send("Animal unavailable! Select pig, cow or dog");
    }
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