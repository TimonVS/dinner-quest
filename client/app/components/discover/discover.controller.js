class DiscoverController {
  constructor(User) {
    this.name = 'discover';
    User.Auth.login()
  }
}

export default DiscoverController;
