class DiscoverController {
  constructor($rootScope, User) {
    this.name = 'discover';
    User.Auth.login((data) => {
      this.user = data.facebook;
    });
  }
}

export default DiscoverController;
