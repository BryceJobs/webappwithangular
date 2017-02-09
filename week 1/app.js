

angular.module("LunchCheck", [])

.controller("LunchCheckController", ['$scope', function ($scope) {
	$scope.menu = "";
	$scope.message = "";
	$scope.checkMenu = function () {
		var items = $scope.menu.split(",");
		console.log(items.length);
		console.log(items);
		if ($scope.menu == "") {
			$scope.message = "Please Enter data First";
		} 
		else if (items.length <= 3) {
			$scope.message = "Enjoy";			
		}
		else {
			$scope.message = "Too Much";
		}
	}
}])

;