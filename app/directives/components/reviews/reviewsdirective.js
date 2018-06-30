(function () {
    'use strict';

    angular.module('rating.directives').directive('reviews', reviewsDirective);

    function reviewsDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: reviewsDirectiveController,
            scope: {
                reviews: '='
            },
            bindToController: true,
            templateUrl: '/app/directives/components/reviews/reviewsdirective.html',
        };
    }

    function reviewsDirectiveController() {
    }
})();