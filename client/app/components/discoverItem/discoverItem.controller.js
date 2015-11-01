'use strict';

class DiscoverItemController {
  constructor ($location) {
    this.name = 'discoverItem';

    this.gotoDetail = (id) => $location.path('/dinner/' + id);
  }
}

export default DiscoverItemController;
