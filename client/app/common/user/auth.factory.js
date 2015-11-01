'use strict';

import 'angularfire';
import Firebase from 'firebase';

import { FIREBASEPATH } from '../common';

let AuthFactory = function ($firebaseAuth, $rootScope, $cookies, $location) {

  var self = this;

  let ref = new Firebase(FIREBASEPATH);
  let auth = $firebaseAuth(ref);

  /**
   * Login
   */

  let login = (cb) => {
    self.cb = cb;

    auth.$authWithOAuthRedirect('facebook', function (error) {
      console.log(error)
    })

    auth.$onAuth(function (authData) {
      if (authData) {
        console.log('Logged in as:', authData.uid);
        $rootScope.$emit('USER_LOGGED_IN', authData);
        self.cb(authData);
      } else {
        console.log('Authentication failed:', error);
      }
    });
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
