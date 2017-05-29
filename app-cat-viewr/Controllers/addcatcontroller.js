//need to refractor h-w-1 secti.on 3
(function (module) {
    "use strict";
    function addcatcontroller(catviewerservice, $log) {
        var vm = this;
        GetCats();
        function GetCats() {
            catviewerservice.GetCats().then(function (result) {
                vm.cats = result;
            }, function (error) {
                $log.info(error);
            });
        }
        vm.Allcats = vm.cats;
        vm.addCat = addCat;
        vm.resetAll = resetAll;
        function addCat() {           
            catviewerservice.AddCat(vm.name, vm.url);
           
            vm.resetAll();
        }

        function resetAll() {
            vm.cats = GetCats();
            vm.name = '';
            vm.url = '';
        }

    }
    addcatcontroller.$inject = ["catviewerservice","$log"];
    module.controller("addcatcontroller", addcatcontroller);

})(angular.module("catviewer"));