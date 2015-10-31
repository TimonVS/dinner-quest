let UserFactory = function (Auth, $rootScope) {
  let user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return !!Object.keys(user).length;
  };

  $rootScope.$on('USER_LOGGED_IN', (e, data) => {
    user = data;
  });

  return { getUser, isSignedIn, Auth };
};

export default UserFactory;
