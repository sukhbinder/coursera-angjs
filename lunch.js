angular.module("lunch",[])
.controller("lunchController", lunchController)

lunchController.$inject=["$scope"];

function lunchController($scope){
	$scope.message="";
	//$scope.text="";
	$scope.checkHowMany = function (){
	var nums=$scope.textlist.split(",").length;
	//console.log(nums);
	if (nums >=4){
		$scope.message= "Too much!";
	}else{
		$scope.message="Enjoy!";
	}
		
	};
}