class UserHeaderController {
  constructor($rootScope) {
    this.name = 'userHeader';

    this.user = $rootScope.currentUser.facebook;

  }
}

export default UserHeaderController;
