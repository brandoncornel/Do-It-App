var ToDo = require("../models/toDo");

module.exports.create = function(req, res){
	var todo = new ToDo(req.body);
	todo.save(function(err, result){
		res.json(result);
	});
}

module.exports.list = function(req, res){
	ToDo.find({}, function(err, results){
		res.json(results);

	});
}