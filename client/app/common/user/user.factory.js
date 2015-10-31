'use strict';

// import Firebase from 'firebase';
// import { FIREBASEPATH } from '../common';



let UserFactory = function (Auth, $rootScope, $cookies, $resource, UserResource) {
  let user = {};

  $rootScope.$on('USER_LOGGED_IN', (e, data) => {
    $cookies.putObject('user', data);
    $rootScope.currentUser = user;
    user = new UserResource(data.facebook);
    user.$save();
  });

  let getUser = () => {
    user = $cookies.getObject('user');
    $rootScope.currentUser = user;
    return user;
  };

  return {
    Auth,
    getUser
  };
};

export default UserFactory;

