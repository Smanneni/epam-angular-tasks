
//h-w-1 section 2
(function (module) {
    function cat2Controller($scope) {
        var vm = this;
        vm.cat1Clik = 0;
        vm.cat2Clik = 0;
        vm.clickCount1 = function () {
            vm.cat1Clik++;
        };
        vm.clickCount2 = function () {
            vm.cat2Clik++;
        }
    }
  module.controller("cat2Controller",cat2Controller) ;
})(angular.module("catclick"));


