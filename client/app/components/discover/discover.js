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
      controller: ($scope, recepies) => {
        $scope.recepies = recepies;
      },
      resolve: {
        recepies: (Recepies) => Recepies.query({})
      },
      template: '<discover recepies="recepies"></discover>'
    })
})

.directive('discover', discoverComponent);

export default discoverModule;
