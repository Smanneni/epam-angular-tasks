(function (angular) {
    "use strict";

    angular.module("catviewer")
        .config(config);



    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("about", {
                url: "/",
                template: '<p>Angular Routing using UI route</p>'
            })
            .state("addcat", {
                url: "/add",
                resolve: {
                    catresult: ['catviewerservice',
                        function (catviewerservice) {
                            return catviewerservice.GetCats();
                        }]
                },
                templateUrl: "Views/addcat.html",
                controller: "addcatcontroller",
                controllerAs: 'vm'
            })
            .state("votecat", {
                url: "/vote",
                templateUrl: "Views/catvoter.html",
                controller: "catvoterController",
                controllerAs: 'vm'
            })
           ;
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }

})(angular);