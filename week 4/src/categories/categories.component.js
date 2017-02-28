(function() {

	angular.module("MenuApp")

	.component('categoriesList', {
		templateUrl: 'src/categories/templates/categorieslist.html',
		bindings: {
			categories: '<'
		}
	})

})();