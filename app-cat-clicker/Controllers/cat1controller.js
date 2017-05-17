//h-w-1 section 1
(function(module) {
  function cat1Controller($scope) {
      var vm = this;
      vm.count = 0;

      vm.catClick = function () {
          vm.count++;
      }
    }
  module.controller("cat1Controller", cat1Controller);
})(angular.module("catclick"));



