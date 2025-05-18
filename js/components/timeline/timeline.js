function TimelineController($scope, $mdDialog) {
  $scope.dialogTemplates = [
    "4.html",
    "9.html",
    "13.html",
    "18.html",
    "22.html",
    "27.html",
    "31.html",
    "36.html",
    "40.html",
  ];

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }

  $scope.showDialog = function (indexTemplate) {
    let template = "/js/components/timeline/templates/" + $scope.dialogTemplates[indexTemplate];

    $mdDialog.show({
      controller: DialogController,
      templateUrl: template,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen,
    });
  };

  this.$onInit = function () {
   
  };

  this.$onDestroy = function () {
  };  
}
