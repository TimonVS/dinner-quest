'use strict';

import uiRouter from 'angular-ui-router';
import discoverComponent from './discover.component';

let discoverModule = angular.module('discover', [
  uiRouter,
  'rzModule'
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('discover', {
      url: '/',
      template: '<discover></discover>'
    })
    .state('discover.search', {
      views: {
        'listView': {
          template: '<list></list>',
          controller: function ($scope) {
          }
        }
      }
    })
    .state('discover.default', {
      views: {
        'listView': {
          template: '<list></list>',
          controller: function ($scope) {
          }
        }
      }
    })
    .state('discover.category', {
      views: {
        'listView': {
          template: '<list></list>',
          controller: function ($scope) {
          }
        }
      }
    })
    .state('discover.rating', {
      views: {
        'listView': {
          template: '<list></list>',
          controller: function ($scope) {
          }
        }
      }
    })
    .state('discover.location', {
      views: {
        'listView': {
          template: '<list></list>',
          controller: function ($scope) {
          }
        }
      }
    })
})

.directive('discover', discoverComponent);

export default discoverModule;
