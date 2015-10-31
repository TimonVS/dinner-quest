'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footer from './footer-nav/footer-nav';
import Auth from './user/auth';
import Login from './login/login';

const FIREBASEPATH = 'https://diner-quest.firebaseio.com';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Footer.name,
  Auth.name,
  Login.name
]);

export default commonModule;

export {
  FIREBASEPATH
};
