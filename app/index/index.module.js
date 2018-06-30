(function () {
    'use strict';

    /** @namespace rating.index */
    var index = angular.module('rating.index', [
        'rating.services',
        'rating.vendor'
    ]);

    index.config(config);

    /**
     * rating.index config function.
     * @param {$stateProvider} $stateProvider
     */
    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('rating.index', {
                abstract: true,
                url: '/index',
                views: {
                    'main': {
                        controller: 'IndexController',
                        templateUrl: '/app/index/index.html',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('rating.index.home', {
                url: '/home',
                views: {
                    'index': {
                        controller: 'HomeController',
                        templateUrl: '/app/index/components/home/home.html',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('rating.index.review', {
                url: '/review',
                views: {
                    'index': {
                        controller: 'ReviewController',
                        templateUrl: '/app/index/components/review/review.html',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
