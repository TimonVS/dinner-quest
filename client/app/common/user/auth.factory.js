'use strict';

import 'angularfire';
import Firebase from 'firebase';

const FIREBASEPATH = 'https://torrid-fire-8656.firebaseio.com';

let AuthFactory = function ($firebaseAuth) {

  let ref = new Firebase(FIREBASEPATH);
  let auth = $firebaseAuth(ref);

  /**
   * Login
   */

  let login = () => {
    auth.$authWithOAuthPopup('facebook').then(function(authData) {
      console.log('Logged in as:', authData.uid);
    }).catch(function(error) {
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
