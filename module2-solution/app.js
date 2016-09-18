(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {

	var buyList = this;
	buyList.items = ShoppingListCheckOffService.getToBuyItems();

	buyList.buyItem = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	};

}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService() {

	var service = this;

	var toBuyItems = [{ name: "cookies", quantity: 10 }, { name: "bananas", quantity: 9 }, { name: "carrots", quantity: 8 }];
	var alreadyBoughtItems = [];

	service.getToBuyItems = function() {
		return toBuyItems;
	};

	service.getAlreadyBoughtItems = function() {
		return alreadyBoughtItems;
	};

	service.buyItem = function(index) {
		var removed = toBuyItems.splice(index, 1);
		alreadyBoughtItems.push(removed[0]);
	};

}

})();