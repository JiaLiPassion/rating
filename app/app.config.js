(function () {
    'use strict';

    /** @namespace rating */
    var rating = angular.module('rating', [
        'rating.services',
        'rating.directives',
        'rating.main',
        'rating.vendor',
        'rating.index'
    ]);

    rating.config(config);
    rating.value('getCompanyUrl', 'http://localhost:3003/companies');
    rating.value('imageUrl', 'http://localhost:3003');
    rating.value('getAllReviewsUrl', 'http://localhost:3003/reviews');
    rating.value('postReview', 'https://test.hitta.se/reviews/v1/company');

    /**
     * rating application config.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     * @param {$provide} $provide
     * @param {$logProvider} $logProvider
     * @param {$compileProvider} $compileProvider
     */
    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $provide, $logProvider, $compileProvider) {

        //Disable the log messages.
        $logProvider.debugEnabled(false);

        //Disable the debug info.
        $compileProvider.debugInfoEnabled(false);

        //Register the exception handler.
        $provide.decorator('$exceptionHandler', exceptionHandler);

        //Register the abstract states.
        registerStates($stateProvider, $urlRouterProvider);
    }

    /**
     * Register the abstract application-wide states.
     * @param {$stateProvider} $stateProvider
     * @param {$urlRouterProvider} $urlRouterProvider
     */
    /* @ngInject */
    function registerStates($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('rating', {
                abstract: true,
                views: {
                    '': {
                        controller: 'MainController',
                        templateUrl: '/app/main/main.html',
                        controllerAs: 'vm'
                    },
                }
            });

        //Default url.
        $urlRouterProvider.otherwise('/index/home');
    }

    /**
     * Angular global exception handler.
     * @param {exceptionService} exceptionService
     */
    /* @ngInject */
    function exceptionHandler(exceptionService) {
        return function (exception, cause) {
            exceptionService.handle(exception, cause);
        };
    }
})();
