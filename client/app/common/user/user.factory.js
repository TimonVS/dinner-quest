'use strict';

import Firebase from 'firebase';
import { FIREBASEPATH } from '../common';

let UserFactory = function (Auth, $rootScope, $cookies) {
  let user = {};

  $rootScope.$on('USER_LOGGED_IN', (e, data) => {
    user = data;
    $cookies.putObject('user', data);
    $rootScope.currentUser = user;
  });

  let getUser = () => {
    user = $cookies.getObject('user');
    $rootScope.currentUser = user;
    return user;
  };

  let fb = new Firebase(FIREBASEPATH);

  /**
   * Looks up a user id by email address and invokes callback with the id or null if not found
   * @return {Object|null} the object contains the key/value hash for one user
   */

  function getUserByFb (fbid, callback) {
    fb.child('users/' + fbid)
      .once('value', (snap) => callback(snap.val()));
  }

  /**
   * Creates a new user record and also updates the index
   */

  function createNewUser (userRecord) {
    let id = fb.child('users')
      .push(userRecord)
      .name();

    return id;
  }

  return {
    Auth,
    createNewUser,
    getUser,
    getUserByFb
  };
};

export default UserFactory;
