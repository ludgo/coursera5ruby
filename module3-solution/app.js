(function () {
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			items: '<',
			onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'ctrl',
		bindToController: true
	};

	return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

	var ctrl = this;

	ctrl.getMatchedMenuItems = function(searchTerm) {
		MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {

			if (searchTerm===undefined || searchTerm=="") {
				ctrl.found = [];
			} else {
				ctrl.found = result;
			}
		});
	};

	ctrl.removeItem = function(index) {
		ctrl.found.splice(index, 1);
	};

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {

	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		
		return $http({
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			}).then(function (result) {
		    // process result and only keep items that match
		    
		    var foundItems = [];
		    var items = result.data.menu_items;
		    for (var key in items) {

		    	if (items[key].description.search(searchTerm) > -1) {
		    		foundItems.push(items[key]);
		    	}
		    }


		    // return processed items
		    return foundItems;
		});

	};

}


})();