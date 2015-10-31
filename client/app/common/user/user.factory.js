'use strict';

let UserFactory = function (Auth, $rootScope, $cookies) {
  let user = {};

  let getUser = () => {
    user = $cookies.getObject('user');
    $rootScope.currentUser = user;
    return user;
  };

  $rootScope.$on('USER_LOGGED_IN', (e, data) => {
    user = data;
    $cookies.putObject('user', data);
    $rootScope.currentUser = user;
  });

  return {
    getUser,
    Auth
  };
};

export default UserFactory;
