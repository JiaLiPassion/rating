(function () {
    'use strict';

    angular.module('rating.index').controller('ReviewController', ['reviewService', 'companyService', '$state', 'exceptionService', ReviewController]);

    /**
     * ContactController
     * @class
     * @classdesc Controller method of 'rating.index' contact component.
     * @memberOf rating.index
     */
    /* @ngInject */
    function ReviewController(reviewService, companyService, $state, exceptionService) {
        this.myReview = reviewService.getCurrentEditingReview();
        this.rating = this.myReview.rating;
        this.ratingText = getRatingText(this.rating);
        this.ratingChanged = (rating) => {
            this.rating = this.myReview.rating = rating;
            this.ratingText = getRatingText(rating);
        }
        this.margin = true;
        this.editable = true;
        companyService.getFirstCompany().then(company => {
            this.companyName = company && company.displayName;
            this.title = `Review ${this.companyName}`;
        });

        this.close = function () {
            // don't keep userName and comment.
            reviewService.setCurrentEditingReview({
                rating: this.rating,
                icon: this.myReview.icon,
                isInit: this.myReview.isInit,
                source: this.myReview.source
            });
            $state.go('rating.index.home');
        }

        this.save = () => {
            this.myReview.isInit = false;
            reviewService.updateMyReview(this.myReview).then(() => {
                this.popupVisibleClass = 'popup-show';
            }, err => exceptionService.handle(err));
        }

        this.ok = () => {
            this.popupVisibleClass = 'popup-hidden';
            $state.go('rating.index.home');
        }

        this.popupTitle = 'Thank you for the review';
        this.popupSubTitle = 'You\'re helping others make smarter decisions every day.';
        this.popupVisibleClass = 'popup-hidden';
    }

    function getRatingText(rating) {
        switch (rating) {
            case 1:
                return 'I hated it!';
            case 2:
                return 'I didn\'t like it!';
            case 3:
                return 'It was OK!';
            case 4:
                return 'I liked it!';
            case 5:
                return 'I love it!';
            default:
                return '';
        }
    }
})();
