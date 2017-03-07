(function() {

	angular.module('public')

	.controller('SignUpController',  ['MenuService', function (MenuService) {
		var $ctrl = this;
		$ctrl.user = {

		};
		$ctrl.status = "";
		$ctrl.favDishNotFound = true;

		$ctrl.processReg = function () {
			var data = MenuService.getItem($ctrl.user.favdish);
			data.then(
				function (response) {
					$ctrl.status = "Thank you Your Informations have been saved";
					$ctrl.favDishNotFound = false
					MenuService.setInfos($ctrl.user);
				},
				function(response){
					$ctrl.status = "No such menu number exist";
					regform.favdish.$valid = false;
					$ctrl.favDishNotFound = true;
					console.log("No such menu number exist");
				}
			)
			;
			
			console.log($ctrl.favDishNotFound);
		}
	}])

	.controller('InfosController', ["MenuService", "ApiPath", function (MenuService, ApiPath) {
		$infos = this;

		$infos.user = MenuService.getInfos();

		$infos.dishImage = ApiPath + "/images/" + $infos.user.favdish;
		MenuService.getItem($infos.user.favdish)
		.then(function (response) {
			$infos.dishInfos = response.data;
		})	

		console.log($infos.user);
		console.log($infos.dishImage);
	}])

	
})();