'use strict';

import 'angularfire';
import Firebase from 'firebase';

const FIREBASEPATH = 'https://diner-quest.firebaseio.com';

let AuthFactory = function ($firebaseAuth, $rootScope) {

  let ref = new Firebase(FIREBASEPATH + '/users');
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
  };

  return { login, logout };
};

export default AuthFactory;
