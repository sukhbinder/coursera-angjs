(
function(){
angular.module("checkoutApp",[])
.controller("checkoutController1",checkoutController1)
.controller("checkoutController2",checkoutController2)
.service("checkoutservice",checkoutservice);


checkoutController1.$inject =["checkoutservice"]
function checkoutController1(checkoutservice){
var itemBuyer=this;
itemBuyer.buyitems=checkoutservice.getToBuyItems();

itemBuyer.logmessage=function(){
	console.log('this is clicked');};
	
itemBuyer.buyItem=function (itemindex){
	checkoutservice.buyItem(itemindex);};

itemBuyer.isBuyEmpty=checkoutservice.isBuyEmpty();

};

checkoutController2.$inject =["checkoutservice"]
function checkoutController2(checkoutservice){
var itemBought=this;
itemBought.boughtitems=checkoutservice.getBoughtItems();

itemBought.isBoughtEmpty=checkoutservice.isBoughtEmpty(); 
};

function checkoutservice(){
var service=this;
var boughtItems=[];
var boughtEmpty=true;
var tobuyEmpty=false;

var toBuyItems=[
	{name:"WholeMilk", quantity:2},
	{name:"Sugar cubes", quantity:1},
	{name:"Tea bags", quantity:40},
	{name:"Coffee sticks", quantity:50},
	{name:"Ginger Biscuits", quantity:20},
	{name:"Mobile Top-up", quantity:100}];

service.buyItem=function (itemIndex){
	var item = toBuyItems[itemIndex];
	boughtItems.push(item);
	toBuyItems.splice(itemIndex,1);
	boughtEmpty=false;
	tobuyEmpty=(toBuyItems.length > 0);
};

service.getBoughtItems=function(){
	return boughtItems;
};

service.getToBuyItems=function(){
	return toBuyItems;
};

service.isBuyEmpty=function(){
	return (toBuyItems.length > 0);
	};

service.isBoughtEmpty=function(){return boughtEmpty;};

};

	
}
)();