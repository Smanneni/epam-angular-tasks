//need to refractor h-w-1 section 3
(function(module) {
    function catvoterController($cookies) {
  var vm=this;
	  vm.cats = [{
      name: 'cat1',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
      tickmark:false

    }, {
      name: 'cat2',
      url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
      tickmark:false

    }, {
      name: 'cat3',
      url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg',
      tickmark:false

    }, {
      name: 'cat4',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
      tickmark:false

    }, {
      name: 'cat5',
      url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
      tickmark:false

    }];
	  vm.selectedOne = null;
	  vm.getmycookiesback = null
    vm.selectedCat = function(item) {
      vm.selectedOne = item;
      vm.selectedCatClicks = 0;
      item.tickmark=true;
    };
    vm.incrementCatClick = upvotes;
    function upvotes() {
        vm.selectedCatClicks++;
        $cookies.putObject('catVotes', { 'name': vm.cats.name, 'vote': vm.selectedCatClicks });
        vm.getmycookiesback = $cookies.getObject('catVotes');
       alert(vm.getmycookiesback.name)
    };
    vm.decrementCatClick = function() {
      if(vm.selectedCatClicks>0)
      {
       vm.selectedCatClicks--;
      }
    };
}
 
   catvoterController.$inject = ["$cookies"];
  module.controller("catvoterController", catvoterController);

})(angular.module("catviewer"));





