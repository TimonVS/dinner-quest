import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';

let createModule = angular.module('create', [
  uiRouter
])

    .config(($stateProvider) => {
      $stateProvider
          .state('create', {
            url: '/create',
            template: '<create></create>'
          });
    })

.directive('create', createComponent);

export default createModule;
