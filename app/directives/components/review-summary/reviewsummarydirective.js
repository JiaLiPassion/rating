(function () {
    'use strict';

    angular.module('rating.directives').directive('summary', summaryDirective);

    function summaryDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: summaryDirectiveController,
            scope: {
                average: '=',
                total: '='
            },
            bindToController: true,
            templateUrl: '/app/directives/components/review-summary/reviewsummarydirective.html',
        };
    }

    function summaryDirectiveController() {
    }
})();