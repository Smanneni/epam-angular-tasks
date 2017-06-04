(function (module) {
    'use strict';


    function imagePreview() {
        return {
            restrict: 'EA',
            scope: {
                catUrl: '=catUrl',
                catObj: '=catObj'
            },
            templateUrl: './Partials/image-preview.html',

        }
    };
    
    module.directive('imagePreview', imagePreview);
}(angular.module('catviewer')));