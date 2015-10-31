import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reviewComponent from './review.component';

let reviewModule = angular.module('review', [
  uiRouter
])

    .config(($stateProvider) => {
      $stateProvider
          .state('review', {
            url: '/review',
            template: '<review></review>'
          });
    })

.directive('review', reviewComponent);

export default reviewModule;
