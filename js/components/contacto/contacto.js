function ContactoController($scope, $http) {
  $scope.usuario = {
    nombre: {
      nombre: "",
      apellidos: {
        primer: "",
        segundo: "",
      },
    },
    direccion: {
      direccion: "",
      provincia: "",
      idProvincia: "",
      canton: "",
      idCanton: "",
      distrito: "",
      idDistrito: "",
    },
    email: "",
    telefono: "",
  };

  $scope.provincias = [];
  $scope.cantones = [];
  $scope.distritos = [];

  $scope.provinciasloading = false;
  $scope.cantonesloading = false;
  $scope.distritosloading = false;

  this.$onInit = function () {
    $scope.getProvincias();
  };

  $scope.getProvincias = function () {
    $scope.provinciasloading = true;

    $http
      .get("https://ubicaciones.paginasweb.cr/provincias.json")
      .then(function (response) {
        $scope.provinciasloading = false;
        $scope.provincias = response.data;
      });
  };

  $scope.getCantones = function () {
    $scope.cantonesloading = true;

    let keys = window.Object.keys($scope.provincias);

    keys.forEach((item) => {
      if ($scope.provincias[item] == $scope.usuario.direccion.provincia)
        $scope.usuario.direccion.idProvincia = item;
    });

    $http
      .get(
        "https://ubicaciones.paginasweb.cr/provincia/" +
          $scope.usuario.direccion.idProvincia +
          "/cantones.json"
      )
      .then(function (response) {
        $scope.cantonesloading = false;
        $scope.cantones = response.data;
      });
  };

  $scope.getDistritos = function () {
    $scope.distritosloading = true;

    let keys = window.Object.keys($scope.cantones);

    keys.forEach((item) => {
      if ($scope.cantones[item] == $scope.usuario.direccion.canton)
        $scope.usuario.direccion.idCanton = item;
    });

    $http
      .get(
        "https://ubicaciones.paginasweb.cr/provincia/" +
          $scope.usuario.direccion.idProvincia +
          "/canton/" +
          $scope.usuario.direccion.idCanton +
          "/distritos.json"
      )
      .then(function (response) {
        $scope.distritosloading = false;
        $scope.distritos = response.data;
      });
  };
}
