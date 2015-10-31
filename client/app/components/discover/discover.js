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
    });
})

.directive('discover', discoverComponent);

export default discoverModule;
