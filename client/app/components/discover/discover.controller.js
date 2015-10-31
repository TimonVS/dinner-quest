class DiscoverController {
  constructor($rootScope, User) {
    this.name = 'discover';

    if (!$rootScope.currentUser) {
      User.Auth.login((data) => {
        this.user = data.facebook;
      });
    } else {
      this.user = $rootScope.currentUser;
    }
  }
}

export default DiscoverController;
