import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('user', ['auth'])

.factory('User', UserFactory);

export default userModule;
