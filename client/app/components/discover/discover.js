'use strict';

import uiRouter from 'angular-ui-router';
import discoverComponent from './discover.component';

let discoverModule = angular.module('discover', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('discover', {
        url: '/',
        template: '<discover></discover>'
      });
  })

  .directive('discover', discoverComponent);

export default discoverModule;
