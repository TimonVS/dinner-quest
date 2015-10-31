class CreateController {
  constructor($rootScope) {
    this.closeModal = function () {
      $rootScope.$emit('close_modal');
    }
  }
}

export default CreateController;
