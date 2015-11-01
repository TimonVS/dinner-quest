import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dinnerComponent from './dinner.component';

let dinnerModule = angular.module('dinner', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dinner', {
      url: '/dinner/:_id',
      controller: ($scope, dinner) => {
        $scope.dinner = dinner;
      },
      resolve: {
        dinner: (Dinners, $stateParams) => {
          return Dinners.get({ _id: $stateParams._id });
        }
      },
      template: '<dinner dinner="dinner"></dinner>'
    });
})

.directive('dinner', dinnerComponent);

export default dinnerModule;
