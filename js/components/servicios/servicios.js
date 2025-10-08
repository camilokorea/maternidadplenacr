function ServiciosController($scope, $mdDialog) {
    $scope.showDialog = function (dialog_target) {
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
            },
            templateUrl: 'js/components/servicios/templates/' + dialog_target + '.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: true
        }).then(function (answer) {
            console.log('answer: ' + answer);
        }, function () {
            console.log('cancelled');
        });
    };
}
