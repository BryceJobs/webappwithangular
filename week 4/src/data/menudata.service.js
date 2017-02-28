(function () {
	
	angular.module('Data')

	.constant("baseURL", "http://davids-restaurant.herokuapp.com")

	.service('MenuDataService', ['$http', 'baseURL', function ($http, baseURL) {
		
		this.getAllCategories = function() {
			return $http({
							method: 'GET',
							url: baseURL + "/categories.json" 
						})
					.then(function (response) {
						return response.data;
					  }, 
						  function(error) {
						  	console.log('something wrong happened', error)
					  }
					);
		};

		this.getItemsForCategory = function(categoryShortName) {
			return $http({
							method: 'GET',
							url: baseURL + "/menu_items.json?category=" + categoryShortName 
						})
					.then(function (response) {
						console.log(response.data.menu_items);
						return response.data.menu_items;
					});
		}

	}]);

})();