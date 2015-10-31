'use strict';

class DiscoverController {
  constructor($rootScope, User) {
    this.name = 'discover';

    if (!User.isSignedIn) {
      User.Auth.login((data) => {
        this.user = data.facebook;
      });
    } else {
      this.user = $rootScope.currentUser;
    }
  }
}

export default DiscoverController;
