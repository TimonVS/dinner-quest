'use strict';

let UserFactory = function (Auth, $rootScope, $cookies) {
  let user = {};

  let getUser = () => {
    let stored = $cookies.getObject('user');
    return stored;
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
