'use strict';

const apiURL = 'http://localhost:4000/users/:_id';

let UserResourceFactory = function ($resource) {
  return $resource(apiURL, { _id: '@_id' });
};

export default UserResourceFactory;
