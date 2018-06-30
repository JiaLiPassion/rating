(function () {
    'use strict';

    angular.module('rating.directives').directive('reviewInit', reviewInitDirective);

    function reviewInitDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: reviewInitDirectiveController,
            scope: {
                review: '=',
                ratingChanged: '&'
            },
            bindToController: true,
            templateUrl: '/app/directives/components/review-init/reviewinitdirective.html',
        };
    }

    function reviewInitDirectiveController() {
        this.ratingChangedHandler = function (rating) {
            if (!this.ratingChanged) {
                return;
            }
            this.ratingChanged({rating: rating});
        }
        this.margin = true;
        this.editable = true;
    }
})();