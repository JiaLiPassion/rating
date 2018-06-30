(function () {
    'use strict';

    angular.module('rating.directives').directive('popup', popupDirective);

    function popupDirective() {
        return {
            restrict: 'E',
            controllerAs: 'vm',
            controller: popupDirectiveController,
            scope: {
                title: '=',
                subTitle: '=',
                visbile: '=',
                ok: '&ok'
            },
            bindToController: true,
            templateUrl: '/app/directives/components/popup/popupdirective.html',
        };
    }

    function popupDirectiveController() {
    }
})();