(function () {
    'use strict';

    /** @namespace rating.directives */
    var directives = angular.module('rating.directives',
        [
            'rating.services',
            'rating.vendor'
        ]);

    directives.config(config);

    /**
     * rating.directives config function.
     */
    /* @ngInject */
    function config() {
    }

})();
