function HeaderController($scope, $mdMedia) {
    $scope.isXs = $mdMedia('xs');
    $scope.isSm = $mdMedia('sm');
    $scope.isMd = $mdMedia('md');
    $scope.isLg = $mdMedia('lg');
    $scope.isXl = $mdMedia('xl');

    console.log('isXs: ' + $scope.isXs);
    console.log('isSm: ' + $scope.isSm);
    console.log('isMd: ' + $scope.isMd);
    console.log('isLg: ' + $scope.isLg);
    console.log('isXl: ' + $scope.isXl);
}