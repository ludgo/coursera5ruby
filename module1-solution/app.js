(function () {
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.textbook = "";
	$scope.message = "";

	$scope.determineMessage = function() {
		var content = $scope.textbook.trim();
		if (content == "")
			$scope.message = "Please enter data first";
		else {
			var wordCount = content.split(',').length;
			if (wordCount > 3)
				$scope.message = "Too much!";
			else
				$scope.message = "Enjoy!";
		}
	};

	$scope.showMessage = function() {
		return $scope.message;
	};

}

})();