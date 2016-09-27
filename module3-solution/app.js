(function () {
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

	var NIDctrl = this;
	NIDctrl.getMatchedMenuItems = function(searchTerm) {
		NIDctrl.found = MenuSearchService.getMatchedMenuItems(searchTerm);
	}

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