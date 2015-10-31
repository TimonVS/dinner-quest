'use strict';

import 'angularfire';
import Firebase from 'firebase';

import { FIREBASEPATH } from '../common';

let AuthFactory = function ($firebaseAuth, $rootScope, $cookies) {

  let ref = new Firebase(FIREBASEPATH);
  let auth = $firebaseAuth(ref);

  /**
   * Login
   */

  let login = (cb) => {
    auth.$authWithOAuthPopup('facebook').then(function (authData) {
      console.log('Logged in as:', authData.uid);
      $rootScope.$emit('USER_LOGGED_IN', authData);
      cb(authData);
    }).catch(function (error) {
      console.log('Authentication failed:', error);
    });
  };

  /**
   * Logout
   */

  let logout = () => {
    ref.unauth();
    $cookies.remove('user');
  };

  return { login, logout };
};

export default AuthFactory;
