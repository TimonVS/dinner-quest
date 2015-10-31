import template from './app.html';

let appComponent = () => {
  return {
    template,
    restrict: 'E',
    controller: function (User, $rootScope, $location) {
      if (!User.isSignedIn()) {
        $location.path('/login');
      } else {
        $rootScope.user = User.getUser();
      }
    }
  };
};

export default appComponent;
