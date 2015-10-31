'use strict';

const apiURL = 'https://dinner-quest-api.herokuapp.com/dinners';
// const apiURL = 'http://localhost:4000/dinners';

class CreateController {
  constructor($rootScope, $http, $location) {
    var vm = this

    vm.closeModal = function () {
      $rootScope.$emit('close_modal');
    };

    vm.people = 0
    vm.coins = 0

    vm.start = function () {
      $http.post(apiURL, {
        location: '',
        attendees: vm.people,
        fee: vm.coins,
        recepie: {} // this is the albert heijn recepie object
      })
      .success(() => $location.path('/discover'))
      .error(console.log);
    };
  }
}

export default CreateController;
