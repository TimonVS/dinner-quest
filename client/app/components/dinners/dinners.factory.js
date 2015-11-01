'use strict';

const apiURL = 'http://localhost:4000/dinners/:_id';
// const apiURL = 'http://dinner-quest-api.herokuapp.com/dinners/:_id';

let dinnerFactory = function ($resource) {
  return $resource(apiURL, { _id: '@_id' }, {});
};

export default dinnerFactory;
