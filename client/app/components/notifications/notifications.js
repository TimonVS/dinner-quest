import angular from 'angular';
import uiRouter from 'angular-ui-router';
import notificationsComponent from './notifications.component';

let notificationsModule = angular.module('notifications', [
  uiRouter
])

    .config(($stateProvider) => {
      $stateProvider
          .state('notifications', {
            url: '/notifications',
            template: '<notifications></notifications>'
          });
    })

.directive('notifications', notificationsComponent);

export default notificationsModule;
