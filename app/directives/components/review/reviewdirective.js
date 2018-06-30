(function () {
    'use strict';

    angular.module('rating.directives').directive('review', reviewDirective);

    function reviewDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: reviewDirectiveController,
            scope: {
                review: '=',
                ratingChanged: '&',
                edit: '&'
            },
            bindToController: true,
            templateUrl: '/app/directives/components/review/reviewdirective.html',
            link: function (scope, elem, attrs) {
                if (attrs.hasOwnProperty('editable')) {
                    scope.vm.editable = true;
                }
            }
        };
    }

    function reviewDirectiveController() {
        this.ratingChangedHandler = function (rating) {
            var editable = this.editable === true;
            if (!editable || !this.ratingChanged) {
                return;
            }
            this.ratingChanged({rating: rating});
        }
    }
})();