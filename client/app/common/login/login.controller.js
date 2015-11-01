'use strict';

class LoginController {
  constructor (User, $rootScope, $location) {
    this.name = 'Dinner Quest';

    if (User.getUser()) {
      return $location.path('/');
    }

    this.login = () => {
      User.Auth.login((data) => {
        $rootScope.user = data.facebook;
        $location.path('/');
      });
    };
  }
}

export default LoginController;
