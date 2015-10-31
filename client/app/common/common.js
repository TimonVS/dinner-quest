'use strict';

import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Footer from './footer-nav/footer-nav';
import Auth from './user/auth';
import Login from './login/login';
import List from './list/list';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Footer.name,
  Auth.name,
  Login.name,
  List.name

]);

export default commonModule;
