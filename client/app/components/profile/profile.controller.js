class ProfileController {
  constructor (User) {
    this.name = 'profile';
    this.logout = User.Auth.logout;
  }
}

export default ProfileController;
