(function(){

	angular.module("LunchCheck", [])

	.controller("LunchCheckController", ['$scope', function ($scope) {
		$scope.menu = "";
		$scope.message = "";
		$scope.checkMenu = function () {
			var items = $scope.menu.split(",").length;
		
			if ($scope.menu == "") {
				$scope.message = "Please Enter data First";
			} 
			else if (items <= 3) {
				$scope.message = "Enjoy";			
			}
			else {
				$scope.message = "Too Much";
			}
		}
	}])

	;

})();
