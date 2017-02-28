(function () {
	
	angular.module("MenuApp")	

	.controller("ItemsController", ['menu_items', function (menu_items) {
		
		console.log("welcome", menu_items);
		this.menu_items = menu_items;

	}])

})();