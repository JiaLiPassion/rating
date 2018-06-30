(function () {
    'use strict';

    angular.module('rating.services').service('companyService', ['httpService', 'exceptionService', 'getCompanyUrl', companyService]);

    /**
     * Logger service.
     * @class
     * @classdesc A angular service for logging.
     * @memberOf rating.services
     */
    /* @ngInject */
    function companyService(httpService, exceptionService, getCompanyUrl) {
        return {
            getAllCompanies: getAllCompanies,
            getFirstCompany: getFirstCompany,
        };

       function getAllCompanies() {
           return httpService.get(getCompanyUrl).then(function (results) {
               return results && results.result && results.result.companies;
           }, function (error) {
               exceptionService.handle(error);
           });
       }

       function getFirstCompany() {
           return getAllCompanies().then(function (companies) {
               return companies && companies.company.length > 0 ? companies.company[0] : null;
           });
       }
    }
})();
