(function () {
	
	angular.module("MenuApp")

	.controller("CategoriesController", ['categories', function(categories) {
		console.log(categories);
		this.categories = categories;
	}])

})();