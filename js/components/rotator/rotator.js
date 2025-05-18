function RotatorController($scope) {
  $scope.timer = null;
  $scope.curImage = 0;
  $scope.numImages = 4;

  $scope.nextImage = function () {
    window.jQuery("#slideimg" + $scope.curImage).removeClass("showMe");

    $scope.curImage++;
    if ($scope.curImage > $scope.numImages - 1) {
      $scope.curImage = 0;
    }

    window.jQuery("#slideimg" + $scope.curImage).addClass("showMe");
  };

  this.$onInit = function () {
    $scope.timer = window.setInterval($scope.nextImage, 10000);
  };

  this.$onDestroy = function () {
    window.clearInterval($scope.timer);
  };
}
