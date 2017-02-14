(function () {
	

angular.module("ShoppingListCheckOff", [])

.service("ShoppingListCheckOffService", function() {
	this.toBuyItems = [
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
	this.alreadyBoughtItems = [];

	this.checkOff = function (index) {
		this.alreadyBoughtItems.push(this.toBuyItems[index]);
		this.toBuyItems.splice(index, 1);
	}
} )

.controller("ToBuyController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
	this.items = ShoppingListCheckOffService.toBuyItems;

	this.moveItem = function (index) {
		ShoppingListCheckOffService.checkOff(index);
	}
} ])

.controller("AlreadyBoughtController", ["ShoppingListCheckOffService", function(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.alreadyBoughtItems;
} ])
;


})();