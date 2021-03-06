(function() {
    'use strict';

    angular.module('rating.services').service('httpService', httpService);

    /**
     * Abstraction for angular $http service.
     * @class
     * @classdesc Abstraction for angular $http service for improve controls over http calls.
     * @memberOf rating.services
     */
    /* @ngInject */
    function httpService($q, $http) {

        return {
            get: get,
            post: post,
            put: put,
            del: del,
            join: join,
            postWithTransform: postWithTransform
        };

        /**
         * Send a http request over the wrapped angular $http service.
         * @param {string} method
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @private
         */
        function call(method, url, data, headers, transformRequest) {

            var deferred = $q.defer();

            $http({
                method: method,
                url: url,
                data: data,
                headers: headers,
                transformRequest: transformRequest
            }).then(function(successResponse) {
                    deferred.resolve(successResponse.data);
                },
                function(failedResponse) {
                    deferred.reject(failedResponse);
                });

            return deferred.promise;
        }

        /**
         * Send http get request to given url with data.
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @public
         */
        function get(url, data) {
            return call('GET', url, data);
        }

        /**
         * Send http post request to given url with data.
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @public
         */
        function post(url, data, headers) {
            return call('POST', url, data, headers);
        }

        /**
         * Send http post request to given url with data.
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @public
         */
        function postWithTransform(url, data, headers) {
            return call('POST', url, data, headers, function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            });
        }

        /**
         * Send http put request to given url with data.
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @public
         */
        function put(url, data) {
            return call('PUT', url, data);
        }

        /**
         * Send http delete request to given url with data.
         * @param {string} url
         * @param {Object} [data]
         * @returns {Promise}
         * @public
         */
        function del(url, data) {
            return call('DELETE', url, data);
        }

        /**
         * Build a url from given array.
         * @param {string[]} paths
         * @returns {string}
         * @public
         */
        function join(paths) {
            var cleanPaths = _.map(paths,
                function(path) {
                    return _.trim(path, '/');
                });
            return cleanPaths.join('/');
        }
    }
})();
