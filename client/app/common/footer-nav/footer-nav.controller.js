import createModalTemplate from 'components/create/create-modal.html'

class FooterNavController {
  constructor($scope, $ionicModal) {
    this.openCreateModal = function () {
      let modal = $ionicModal.fromTemplate(createModalTemplate, {
        scope: $scope
      });
      modal.show();
    }
  }
}

export default FooterNavController;
