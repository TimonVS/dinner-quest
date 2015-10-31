import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';
import createModal from './create-modal.html'

let createModule = angular.module('create', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('create', {
      url: '/create',
      onEnter: function ($ionicModal) {
        $ionicModal.fromTemplate(createModal).show()
      }

        //template: '<create></create>'
    });
})

.directive('create', createComponent);

export default createModule;
