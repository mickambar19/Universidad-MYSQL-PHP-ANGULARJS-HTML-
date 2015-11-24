var aplicacion = angular.module("Universidad",[]);

aplicacion.controller("ControlGeneral",function($scope,$http)
{
	//LA funcion se llama cargarDatos()
	$scope.activoTipos=false;
	$scope.activoProfesoresNoRegistrados=false;
	$scope.activoProfesoresParaJefes = false;
	$scope.activoDepartamentosParaCursos = false;
	$scope.activoEdificiosParaSalones = false;
	$scope.activoCalendariosParaEstudiante = false;
	$scope.activoProfesoresParaEstudiante = false;
	$scope.EstatusesParaEstudiante = false;

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
	$scope.cargarDatosProfesores = function()
	{

		$http
		({
			url:"obtenerInfoProfesores.php",
			$method: "GET",
			params:{ nombrePro:$scope.nombreProfesor}
		})
		.success(function(registrados)
		{
			$scope.profesores = registrados;

		})
	}
	$scope.cargarDatosDepartamentos = function()
	{
		$http
		({
			url:"obtenerInfoDepartamentos.php",
			$method: "GET",
			params:{ nombreParc:$scope.nombreDepartamento
			}
		})
		.success(function(registrados)
		{
			$scope.departamentos = registrados;
		})
	}
	$scope.cargarDatosCursos = function()
	{
		$http
		({
			url:"obtenerInfoCursos.php",
			$method: "GET",
			params:{ nombreParc:$scope.nombreCurso}
		})
		.success(function(registrados)
		{
			$scope.cursos = registrados;
		})
	}
	$scope.cargarDatosClases = function()
	{
		$http
		({
			url:"obtenerInfoClases.php",
			$method: "GET",
			params:{ nombreParc:$scope.idClase
			}
		})
		.success(function(registrados)
		{
			$scope.clases = registrados;
		})
	}
	$scope.cargarDatosEdificios = function()
	{
		$http
		({
			url:"obtenerInfoEdificios.php",
			$method: "GET",
			params:{ nombreParc:$scope.nombreEdificio
			}
		})
		.success(function(registrados)
		{
			$scope.edificios = registrados;
		})
	}
	$scope.cargarDatosSalones = function()
	{
		$http
		({
			url:"obtenerInfoSalones.php",
			$method: "GET",
			params:{ nombreParc:$scope.tipoSalon
			}
		})
		.success(function(registrados)
		{
			$scope.salones = registrados;
		})
	}
	$scope.cargarDatosEstudiantes = function()
	{
		$http
		({
			url:"obtenerInfoEstudiantes.php",
			$method: "GET",
			params:{ nombreParc:$scope.nombreEstudiante}
		})
		.success(function(registrados)
		{
			$scope.estudiantes = registrados;
		})
	}	
	$scope.obtenerTodosLosEmpleados= function()
	{
		$http
		({
			url:"obtenerTodosLosEmpleados.php",
			$method: "GET"
		})
		.success(function(registrados)
		{
			$scope.empleados = registrados;
		})
		.error(function(registrados,status){
			$scope.errorEmpleados="Hubo un fallo";
		});

	}
	$scope.obtenerTipoEmpleados= function()
	{
		//$scope.llamaste="SI LA LLAMASTE";
		if ($scope.activoTipos === false) {
			$http
			({
				url:"obtenerTipoEmpleados.php",
				$method: "GET"
			})
			.success(function(registrados)
			{
				//$scope.llamaste="FUE exitosa";
				$scope.tipos = registrados;
			})
			$scope.activoTipos=true;
		}		
	}
	$scope.eliminarEmpleado= function(idEmpleado)
	{
		$http
		({
			url:"eliminarEmpleado.php",
			$method: "GET",
			params:{empleadoEliminar:idEmpleado}
		})
		.success(function(registrados)
		{
			$scope.obtenerTodosLosEmpleados();
			//$scope.llamaste="FUE exitosa";
			//$scope.tipos = registrados;
		})
	}
	$scope.banderaEmailModal = false;
	$scope.mostrarEmails = function(idEmpleado, nombreEmpleado)
	{

		$http
		({
			url:"obtenerEmails.php",
			$method: "GET",
			params:{idEmpleadoBuscado:idEmpleado}
		})
		.success(function(registrados)
		{
			$scope.empleadoBuscado = nombreEmpleado;
			$scope.empleadoIdBuscado = idEmpleado;			
			$scope.emails = registrados;
			$scope.banderaEmailModal = true;
		})
        
    
	}
	$scope.agregarEmail = function(idEmpleado){
		
		$http
		({
			url:"insertEmails.php",
			$method: "GET",
			params:{idEmpleadoBuscado:idEmpleado,nuevoEmail:$scope.emailNuevo}
			//params:{idEmpleadoBuscado:"2"}
		})
		.success(function(registrados,status)
		{
			
			//$scope.emailNuevo=registrados ;
			$scope.mostrarFormularioEmail=false;
			$scope.mostrarEmails(idEmpleado,$scope.empleadoBuscado);
		})
	};
	$scope.eliminarEmail=function(idEmail){
		$http
		({
			url:"eliminarEmail.php",
			$method: "GET",
			params:{Email:idEmail}
			//params:{idEmpleadoBuscado:"2"}
		})
		.success(function(registrados,status)
		{
			
			//$scope.emailEliminado=registrados ;
			//$scope.mostrarFormularioEmail=false;
			$scope.mostrarEmails($scope.empleadoIdBuscado,$scope.empleadoBuscado);
			
		})
		
	}
	$scope.obtenerTodosLosProfesores = function()
	{
		$http
		({
			url:"obtenerTodosLosProfesores.php",
			$method: "GET",
		})
		.success(function(registrados,status)
		{
			
			//$scope.emailEliminado=registrados ;
			//$scope.mostrarFormularioEmail=false;
			$scope.profesores = registrados;
			
		})
	}
	$scope.obtenerProfesoresNoResgistrados= function()
	{
		if($scope.activoProfesoresNoRegistrados===false)
		{
			$http
			({
				url:"obtenerProfesoresNoRegistrados.php",
				$method: "GET",
			})
			.success(function(registrados,status)
			{
				
				//$scope.emailEliminado=registrados ;
				//$scope.mostrarFormularioEmail=false;
				$scope.profesoresNoRegistrados = registrados;
				
			})	
		    $scope.activoProfesoresNoRegistrados = true;
		}
		
	}
	$scope.obtenerTodosLosDepartamentos = function()
	{
		$http
		({
			url:"obtenerTodosLosDepartamentos.php",
			$method: "GET",
		})
		.success(function(registrados)
		{
			$scope.departamentos = registrados;
		})
	}
	$scope.obtenerProfesoresParaJefes= function(){
		if($scope.activoProfesoresParaJefes===false)
		{
			$http
			({
				url:"obtenerProfesorParaJefes.php",
				$method: "GET",
			})
			.success(function(registrados,status)
			{
				
				//$scope.emailEliminado=registrados ;
				//$scope.mostrarFormularioEmail=false;
				$scope.profesorParaJefes = registrados;
				
			})	
		    $scope.activoProfesoresParaJefes = true;
		}
	}
	$scope.obtenerTodosLosCursos= function()
	{
		$http
		({
			url:"obtenerTodosLosCursos.php",
			$method: "GET",
		})
		.success(function(registrados)
		{
			$scope.cursos = registrados;
		})
	}
	$scope.obtenerDepartamentosParaCursos= function()
	{
		if($scope.activoDepartamentosParaCursos===false)
		{
			$http
			({
				url:"obtenerDepartamentosParaCursos.php",
				$method: "GET",
			})
			.success(function(registrados)
			{
				$scope.departamentosParaCurso = registrados;
			})
			$scope.activoDepartamentosParaCursos = true;
		}
	}
	$scope.obtenerTodosLosEdificios = function ()
	{
		$http
		({
			url:"obtenerTodosLosEdificios.php",
			$method: "GET",
		})
		.success(function(registrados)
		{
			$scope.edificios = registrados;
		})
	}
	$scope.obtenerTodosLosSalones=function()
	{

		$http
		({
			url:"obtenerTodosLosSalones.php",
			$method: "GET",
		})
		.success(function(registrados)
		{
			$scope.salones = registrados;
		})
	}
	$scope.obtenerEdificiosParaSalones= function()
	{
		if($scope.activoEdificiosParaSalones===false)
		{
			$http
			({
				url:"obtenerEdificiosParaSalones.php",
				$method: "GET",
			})
			.success(function(registrados)
			{
				$scope.edificiosParaSalon = registrados;
			})
			$scope.activoEdificiosParaSalones = true;
		}
	}
	$scope.obtenerTodosLosEstudiantes = function ()
	{
		$http
		({
			url:"obtenerTodosLosEstudiantes.php",
			$method: "GET",
		})
		.success(function(registrados)
		{
			$scope.estudiantes = registrados;
		})
	}
	$scope.obtenerCalendariosParaEstudiante= function(){
		if($scope.activoCalendariosParaEstudiante===false)
		{
			$http
			({
				url:"obtenerCalendariosParaEstudiante.php",
				$method: "GET",
			})
			.success(function(registrados)
			{
				$scope.calendarios = registrados;
			})
			$scope.activoCalendariosParaEstudiante = true;
		}
	}
	$scope.obtenerEstatusesParaEstudiante= function(){
		if($scope.EstatusesParaEstudiante===false)
		{
			$http
			({
				url:"obtenerEstatusesParaEstudiante.php",
				$method: "GET",
			})
			.success(function(registrados)
			{
				$scope.estatuses = registrados;
			})
			$scope.EstatusesParaEstudiante = true;
		}
	}

	$scope.obtenerProfesoresParaEstudiante= function(){
		if($scope.activoProfesoresParaEstudiante===false)
		{
			$http
			({
				url:"obtenerProfesoresParaEstudiante.php",
				$method: "GET",
			})
			.success(function(registrados)
			{
				$scope.profesores = registrados;
			})
			$scope.activoProfesoresParaEstudiante = true;
		}
	}
	
});

 