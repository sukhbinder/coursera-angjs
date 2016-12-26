angular.module("lunch",[])
.controller("lunchController", lunchController)

lunchController.$inject=["$scope"];

function lunchController($scope){
	$scope.message="";
	//$scope.text="";
	$scope.checkHowMany = function (){
	
	if ($scope.textlist ===""){
		$scope.message= "Please enter data first";
		return;
	}
	var nums=$scope.textlist.split(",").length;
	//console.log(nums);
	if (nums >=4){
		$scope.message= "Too much!";
	}
	else{
		$scope.message="Enjoy!";
	}
		
	};
}