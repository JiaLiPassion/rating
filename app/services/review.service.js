(function () {
    'use strict';

    angular.module('rating.services').service('reviewService', ['httpService', 'exceptionService', 'getAllReviewsUrl', 'imageUrl', reviewService]);

    /**
     * Logger service.
     * @class
     * @classdesc A angular service for review.
     * @memberOf rating.services
     */
    /* @ngInject */
    function reviewService(httpService, exceptionService, getAllReviewsUrl, imageUrl) {
        var currentEditingReview = {
            icon: imageUrl + '/person.png',
            source: 'hitta-se',
            isInit: true
        };
        return {
            getAllReviews: getAllReviews,
            updateMyReview: updateMyReview,
            getCurrentEditingReview: getCurrentEditingReview,
            setCurrentEditingReview: setCurrentEditingReview
        };

        function getCurrentEditingReview() {
            var obj = {};
            Object.assign(obj, currentEditingReview);
            return obj;
        }

        function setCurrentEditingReview(review) {
            currentEditingReview = review;
            currentEditingReview.datetime = moment().format('YYYY-MM-DD HH:mm:ss');
            currentEditingReview.info = parseInfo(currentEditingReview);
        }

        function parseDate(datetime) {
            return moment(datetime).fromNow();
        }

        function parseInfo(review) {
            return parseDate(review.datetime) + '-' + review.source;
        }

        function getAllReviews() {
            return httpService.get(getAllReviewsUrl).then(result => {
                result.allReviews.forEach(r => {
                    r.info = parseInfo(r);
                    r.icon = imageUrl + '/' + r.icon + '.png';
                });
                return result;
            }, err => exceptionService.handle(err));
        }

       function updateMyReview() {}
    }
})();
