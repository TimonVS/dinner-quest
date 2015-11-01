'use strict';

import 'angularfire';
import Firebase from 'firebase';

import { FIREBASEPATH } from '../common';

let AuthFactory = function ($firebaseAuth, $rootScope, $cookies, $location) {

  let ref = new Firebase(FIREBASEPATH);

  let fail = (err) => console.log(err);

  let afterLogin = function (authData) {
    if (authData) {
      console.log('Logged in as:', authData.uid);
      $rootScope.$emit('USER_LOGGED_IN', authData);
      $rootScope.currentUser = authData.facebook;
      $location.path('/');
    } else {
      console.log('Authentication failed:', authData);
    }
  };

  let auth = $firebaseAuth(ref);
  auth.$onAuth(afterLogin);

  /**
   * Login
   */

  let login = () => {
    auth.$authWithOAuthRedirect('facebook', fail);
  };

  /**
   * Logout
   */

  let logout = () => {
    ref.unauth();
    $cookies.remove('user');
    $location.path('/login');
  };

  return { login, logout };
};

export default AuthFactory;
