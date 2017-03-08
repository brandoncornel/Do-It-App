var express = require("express");
var app = new express();
var toDoController = require("./server/controllers/toDoController");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/to-do-app");


app.use(bodyParser());

app.get("/", function(req,res){
    res.sendFile(__dirname + "/client/views/index.html");
});

app.use("/js", express.static(__dirname + "/client/js"));

app.post("/api/todos", toDoController.create);
app.get("/api/toDos", toDoController.list);

app.listen(3000, function(){
    console.log("Listening on port 3000");
});