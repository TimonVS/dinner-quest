'use strict';

import uiRouter from 'angular-ui-router';
import discoverComponent from './discover.component';

const apiURL = 'https://frahmework.ah.nl/ah/json/recepten?receptomschrijving=pasta&nasanr=1&personalkey=QIMw3XwUtCI3H102gZTbTpK7NMCjtNtz';

let discoverModule = angular.module('discover', [
  uiRouter,
  'rzModule'
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('discover', {
      url: '/',
      template: '<discover></discover>',
      // resolve: ['']
    });
})

.directive('discover', discoverComponent);

export default discoverModule;
