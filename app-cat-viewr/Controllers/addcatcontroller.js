//need to refractor h-w-1 secti.on 3
(function (module) {
    "use strict";
    function addcatcontroller(catviewerservice) {
        var vm = this;
        vm.cats = catviewerservice.GetCats();
        vm.Allcats = vm.cats;
        vm.addCat = addCat;
        vm.resetAll = resetAll;
        function addCat() {           
            catviewerservice.AddCat(vm.name, vm.url);
            vm.resetAll();
        }

        function resetAll() {
            vm.cats = vm.Allcats;
            vm.name = '';
            vm.url = '';
        }

    }
    addcatcontroller.$inject = ["catviewerservice"];
    module.controller("addcatcontroller", addcatcontroller);

})(angular.module("catviewer"));