(function() {
    'use strict';

    angular.module('rating.services').service('exceptionService', exceptionService);

    /**
     * Exception service.
     * @class
     * @classdesc A angular service for handling the aplication exceptions
     * @memberOf rating.services
     */
    /* @ngInject */
    function exceptionService() {

        return {
            handle: handle
        };

        /**
         * Handle the given exception.
         * @param {Error} exception
         * @param {Object} cause
         * @public
         */
        function handle(exception, cause){
            //TODO: Override with your own exception handling mechanism...
            console.error(exception.message, cause);
        }
    }
})();
