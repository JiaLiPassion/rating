(function () {
    'use strict';

    angular.module('rating.directives').directive('rating', ratingDirective);

    function ratingDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: ratingDirectiveController,
            scope: {
                rating: '=',
                max: '=',
                editable: '=',
                margin: '=',
                updated: '&ratingChanged'
            },
            bindToController: true,
            templateUrl: '/app/directives/components/rating/ratingdirective.html',
            link: function (scope) {
                updateRatings(scope.vm);
            }
        };
    }

    function updateRatings(vm) {
        vm.starClasses = [];
        var rating = vm.rating || 0;
        var max = vm.max || 5;
        var i = 0;
        for (; i < rating; i++) {
            if (vm.margin) {
                vm.starClasses.push('checked margin-span');
            } else {
              vm.starClasses.push('checked');
            }
        }
        for (; i < max; i++) {
            if (vm.margin) {
                vm.starClasses.push('unchecked margin-span');
            } else {
              vm.starClasses.push('unchecked');
            }
        }
    }

    function ratingDirectiveController() {
        this.check = function (idx) {
            if (this.editable !== true) {
                return;
            }
            this.rating = idx + 1;
            updateRatings(this);
            if (this.updated) {
                this.updated({rating: this.rating});
            }
        }
    }
})();