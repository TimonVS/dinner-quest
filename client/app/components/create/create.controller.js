'use strict';

// const apiURL = 'https://dinner-quest-api.herokuapp.com/dinners';
const apiURL = 'http://localhost:4000/dinners';

class CreateController {
  constructor($rootScope, $http, $location) {
    this.closeModal = function () {
      $rootScope.$emit('close_modal');
    };

    this.start = function () {
      $http.post(apiURL, {
        location: '',
        attendees: 2,
        fee: 0,
        recepie: {} // this is the albert heijn recepie object
      })
      .success(() => $location.path('/discover'))
      .error(console.log);
    };
  }
}

export default CreateController;
