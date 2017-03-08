var app = angular.module("toDoApp",["ngResource"]);

app.controller("toDoController",function($scope, $resource){

	var ToDo = $resource("/api/toDos");
	ToDo.query(function(result){
		$scope.toDos = result;
	});
	$scope.toDos = [];



	$scope.createToDo = function (){
		var toDoName = $scope.toDoName;
		var toDoReminder = $scope.toDoReminder;
		var todo = new ToDo();
		todo.name = toDoName;
		todo.reminder = toDoReminder;
		todo.$save(function(result){
			$scope.toDos.push(result);
			$scope.toDoName = "";
		});
	}


	$scope.deleteToDo = function (id){
		console.log("Deleting To Do: " + id);
		
	}
});