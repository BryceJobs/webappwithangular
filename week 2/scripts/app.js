(function () {
	

angular.module("ShoppingListCheckOff", [])

.service("ShoppingListCheckOffService", function() {
	var toBuyItems = [
		{
			name: 'Xbox One', 
			quantity: 3
		},
		{
			name: 'PS4 + VR', 
			quantity: 4
		},
		{
			name: 'Nintendo Switch', 
			quantity: 10
		},
		{
			name: 'Nvidia Shield', 
			quantity: 5
		},
		{
			name: 'Alienware area-51', 
			quantity: 2
		}
	];
	var alreadyBoughtItems = [];

	this.checkOff = function (index) {
		alreadyBoughtItems.push(toBuyItems[index]);
		toBuyItems.splice(index, 1);
	}

	this.getToBuyItems = function () {
		return toBuyItems;
	}
	this.getBoughtItems = function () {
		return alreadyBoughtItems;
	}
} )

.controller("ToBuyController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
	this.items = ShoppingListCheckOffService.getToBuyItems();

	this.moveItem = function (index) {
		ShoppingListCheckOffService.checkOff(index);
	}
} ])

.controller("AlreadyBoughtController", ["ShoppingListCheckOffService", function(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.getBoughtItems();
} ])
;


})();