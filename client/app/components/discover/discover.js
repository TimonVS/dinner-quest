'use strict';

import uiRouter from 'angular-ui-router';
import discoverComponent from './discover.component';
import Recepies from '../recepies/recepies';

let discoverModule = angular.module('discover', [
  uiRouter,
  'rzModule',
  Recepies.name
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('discover', {
      url: '/',
      template: '<discover recepies="recepies"></discover>',
      controller: ($scope, recepies) => {
        $scope.recepies = recepies;
      },
      resolve: {
        recepies: (Recepies) => Recepies.query({})
      }
    });
})

.directive('discover', discoverComponent);

export default discoverModule;
