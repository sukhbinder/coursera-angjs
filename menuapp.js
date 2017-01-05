(
function(){
	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService)
	.directive("foundItems",FoundItemsDirective)
	.controller('FoundItemsDirectiveController',FoundItemsDirectiveController);
	
	function FoundItemsDirective(){
		var ddo={
			templateUrl:'founditems.html',
			scope:{
				items:'<',
				onRemove:'&'
			},
			controller:'FoundItemsDirectiveController as list',
			bindToController:true
		};
		
		return ddo;
	};
	
	function FoundItemsDirectiveController(){
		var mcontrl=this;
		
	};
	
	NarrowItDownController.$inject=["MenuSearchService"];
	function NarrowItDownController(MenuSearchService){
		var control=this;
		control.getMatchedMenuItems = function (searchTerm){
			var promise=MenuSearchService.getMatchedMenuItems(control.searchTerm);
			
			promise.then(function(response) {control.found=response;
			console.log(control.found)});
		};
	
control.removethis=function(indexItem){
	console.log(indexItem);
	control.found.splice(indexItem,1);
};	
	};
	
	MenuSearchService.$inject =["$http","$filter"];
	function MenuSearchService($http,$filter){
	var service= this;
	
	service.getMatchedMenuItems = function(searchTerm){
		
		return $http({
		method:"GET",
		url:("https://davids-restaurant.herokuapp.com/menu_items.json")
		}).then(function (result){
			var foundItems = result.data;
			var temp= $filter('filter')(foundItems.menu_items,searchTerm);
			//console.log(temp);
			return temp;
		});
	};
	
	};
}
)();