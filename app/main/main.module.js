(function () {
    'use strict';

    /** @namespace rating.main */
    var main = angular.module('rating.main',
        [
            'rating.services',
            'rating.vendor'
        ]);

    main.config(config);

    /* @ngInject */
    function config() {
    }

})();
