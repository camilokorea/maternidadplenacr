function CitasController($scope) {
  $scope.cita = {
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    fecha: "",
    from: "",
    to: "",
  };

  $scope.servicios = [
    "Medicina General",
    "Consejería en lactancia materna",
    "Control prenatal y salud femenina",
    "Control del crecimiento y desarrollo infantil",
    "Estimulación temprana infantil",
    "Consejería en alimentación complementaria y Baby Led Weaning",
    "Consejería en disciplina positiva",
  ];
}
