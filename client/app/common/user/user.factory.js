'use strict';

import _ from 'lodash';
import Firebase from 'firebase';
import { FIREBASEPATH } from '../common';

let UserFactory = function (Auth, $rootScope, $cookies) {
  let user = {};

  $rootScope.$on('USER_LOGGED_IN', (e, data) => {
    user = data;
    $cookies.putObject('user', data);
    $rootScope.currentUser = user;

    console.log(data, data.facebook.id)

    getUserByFb(data.facebook.id, function (val) {
      console.log(val)
      console.log(data.facebook)
      if (!val) {
        createNewUser(data.facebook)
      }
    });
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
      .once('value', function () {
        console.log('hahah')
      });
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
