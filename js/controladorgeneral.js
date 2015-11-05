var aplicacion = angular.module("Universidad",[]);

aplicacion.controller("ControlGeneral",function($scope,$http)
{
	//LA funcion se llama cargarDatos()
	$scope.cargarDatos = function()
	{
		$http
		({
			url:"obtenerInfoEmpleados.php",
			$method: "GET",
			params:{ nombreParc:$scope.nombre}
		})
		.success(function(registrados)
		{
			$scope.empleados = registrados;
		})
	}
});