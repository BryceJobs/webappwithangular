(function () {
	

angular.module("NarrowItDownApp", [])

.constant("baseURL", "http://davids-restaurant.herokuapp.com")

.service("MenuSearchService", ['$http', 'baseURL', function($http, baseURL){

	this.getMatchedMenuItems = function (searchTerm) {
		
		return $http({

					method: 'GET',
					url: baseURL + "/menu_items.json"

				})
				.then(function(response) {
					var foundItems = [];

					var results = response.data.menu_items;
					console.log(results);
					
					for (var i = results.length - 1; i >= 0; i--) {
						if(results[i].description.indexOf(searchTerm) != -1 )
						{
							foundItems.push(results[i]);
						}
					}
					
					return foundItems;
				});

	}

}])

.controller("NarrowItDownController", ['MenuSearchService', function (MenuSearchService) {

		var search_controller = this;

		search_controller.error = "";

		search_controller.found = [];

		search_controller.search = function () {
			var promise = MenuSearchService.getMatchedMenuItems(this.searchTerm);
			console.log(promise);
			promise.then(
				function (response) {
					search_controller.found = response;
					if (response.length == 0)
						search_controller.error = 'Nothing Found'

			}
		);
		
	};

	search_controller.removeItem = function (index) {
		search_controller.found.splice(index, 1);
	}


}])

.directive("foundItems", function () {
	var ddo = {
		templateUrl: 'founds.html',
		restrict: 'E',
		scope: {
			foundItems: '<',
			onRemove: '&'
		}
	};
	return ddo;
})
;


})();