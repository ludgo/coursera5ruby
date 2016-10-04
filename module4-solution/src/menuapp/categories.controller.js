(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
/*CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {*/
  var catCtrl = this;
  catCtrl.categories = categories;

/*
  catCtrl.$onInit = function () {
  MenuDataService.getAllCategories()
   .then(function (result) {
     catCtrl.categories = result.data;
   });
  };
*/

}

})();
