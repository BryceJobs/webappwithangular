(function() {

	angular.module("MenuApp")

	.component('itemsList', {
		templateUrl: 'src/items/templates/menuitemslist.html',
		bindings: {
			items: '<'
		}
	})

})();