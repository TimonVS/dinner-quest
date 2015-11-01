'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footer from './footer-nav/footer-nav';
import Auth from './user/auth';
import Login from './login/login';
import List from './list/list';
import Parallax from './parallax/parallax'

const FIREBASEPATH = 'https://diner-quest.firebaseio.com';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Footer.name,
  Auth.name,
  Login.name,
  List.name,
  Parallax.name
])

.constant('token', function ($window, $q, $cookies) {
  return {
    request: function (config) {
      if (~config.url.indexOf('frahmework.ah.nl')) return config;
      var user = $cookies.getObject('user');
      // Set the x-auth-token to authenticate endpoints
      config.headers['x-auth-token'] = user.facebook.id;
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status >= 400) console.error(rejection);
      return $q.reject(rejection);
    }
  };
})

.config(['$httpProvider', 'token', function ($httpProvider, token) {
  $httpProvider.interceptors.push(token);
}]);

export default commonModule;

export {
  FIREBASEPATH
};
