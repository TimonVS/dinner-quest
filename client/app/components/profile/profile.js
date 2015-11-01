'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';

let profileModule = angular.module('profile', [
  uiRouter,
  'user'
])

.config(($stateProvider) => {
  $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
      });
})

.directive('profile', profileComponent);

export default profileModule;
