(function () {
	
	angular.module('MenuApp')

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider

		.state('home',{
			url: '/',
			templateUrl: 'src/templates/home.html'
		})

		.state('categories',{
			url: '/categories',
			templateUrl: 'src/categories/templates/categories.html',
			controller: 'CategoriesController as catctrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					var data = MenuDataService.getAllCategories();
					console.log(data);
					return data
				}]
			}
		})

		.state('categories.category', {
			url: '/menu_items/{category}',
			templateUrl: 'src/items/templates/items.html',
			controller: 'ItemsController as itemsctrl',
			resolve: {
				menu_items: ["MenuDataService", "$stateParams", function (MenuDataService,$stateParams) {
						
						var data = MenuDataService.getItemsForCategory($stateParams.category);
						console.log(data);
						return data	

				}]
			}

		})
	}])

})();