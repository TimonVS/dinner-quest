'use strict';

const apiURL = 'https://dinner-quest-api.herokuapp.com/dinners';
// const apiURL = 'http://localhost:4000/dinners';


class CreateController {
  constructor($rootScope, $http, $location) {
    var vm = this;

    vm.closeModal = function () {
      $rootScope.$emit('close_modal');
    };

    let location;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        location = [];
        if (position && position.coords) {
          location[0] = position.coords.longitude;
          location[1] = position.coords.latitude;
        }
      });
    }

    vm.people = 0;
    vm.coins = 0;

    vm.start = function () {
      $http.post(apiURL, {
        location: location,
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
