(function () {
    'use strict';

    angular.module('rating.index').controller('HomeController', ['companyService', 'reviewService', '$state', HomeController]);

    /**
     * HomeController
     * @class
     * @classdesc Controller method of 'rating.index' home component.
     * @memberOf rating.index
     */
    /* @ngInject */
    function HomeController(companyService, reviewService, $state) {
        this.ratingChanged = function (rating) {
            this.myReview.rating = rating;
            reviewService.setCurrentEditingReview(this.myReview);
            $state.go('rating.index.review');
        }

        this.edit = function () {
            $state.go('rating.index.review');
        }

        companyService.getFirstCompany().then(company => {
            this.companyName = company && company.displayName;
        });

        this.myReview = reviewService.getCurrentEditingReview();
        this.isInit = this.myReview.isInit;

        reviewService.getAllReviews().then((result) => {
            this.average = result.average;
            this.total = result.total;
            this.allReviews = result.allReviews;
        });
    }
})();
