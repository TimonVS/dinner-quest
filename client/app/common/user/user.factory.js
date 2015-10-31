let UserFactory = function (Auth) {
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let auth = Auth;

  return { getUser, isSignedIn, auth };
};

export default UserFactory;
