$(document).ready(function(){

	$("#Enviar").click(function(){
		var nombreE     = $("#nombreE").val();
		var nssE	    = $("#nssE").val();
		var tipoE       = $("#tipoE").val();
        console.log(tipoE);
		if (nombreE == ''|| nssE == ''||tipoE == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'Nombre='+ nombreE + '&Nss='+ nssE + '&Tipo='+ tipoE;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insert.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});
	$("#EnviarNuevoProfe").click(function(){
		var IdEmpleado	    = $("#idEmpleadoP").val();
		var Categoria       = $("#categoria").val();
		var Especialidad    = $("#especialidad").val();
        console.log(IdEmpleado);
        console.log(Categoria);
        console.log(Especialidad);
		if (IdEmpleado == ''|| Categoria == ''||Especialidad == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'IdEmpleado='+ IdEmpleado + '&Categoria='+ Categoria + '&Especialidad='+ Especialidad;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoProfesor.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});
	
	$("#EnviarNuevoDepartamento").click(function(){
		var NombreDepto	    = $("#nombreNuevoDepartamento").val();
		var IdJefeDepto       = $("#nombreJefeDepartamento").val();
		
        console.log(NombreDepto);
        console.log(IdJefeDepto);
        
		if (NombreDepto == ''|| IdJefeDepto == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'NombreDpto='+ NombreDepto + '&IdJefeDepto='+ IdJefeDepto;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoDepartamento.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			$("#nombreNuevoDepartamento").val("");
			$("#nombreJefeDepartamento").val("");
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});
	$("#EnviarNuevoCurso").click(function(){
		var deptoDeCurso      = $("#idDeDepartamentoParaCurso").val();
		var nombreDeCurso     = $("#nombreDeCurso").val();
		var descripCurso      = $("#descripcionDeCurso").val();
		var creditosCurso     = $("#creditosDeCurso").val();
		
        console.log(deptoDeCurso);
        console.log(nombreDeCurso);
        console.log(descripCurso);
        console.log(creditosCurso);
        
		if (deptoDeCurso == ''|| nombreDeCurso == ''|| descripCurso == ''|| creditosCurso == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'deptoDeCurso='+ deptoDeCurso + '&nombreDeCurso='+ nombreDeCurso + '&descripCurso='+ descripCurso + '&creditosCurso='+ creditosCurso;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoCurso.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			$("#nombreNuevoDepartamento").val("");
			$("#nombreJefeDepartamento").val("");
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});

	$("#EnviarNuevoEdificio").click(function(){
		var nombreDeEdificioNuevo      = $("#nombreDeEdificioNuevo").val();

		
        console.log(nombreDeEdificioNuevo);

        
		if (nombreDeEdificioNuevo == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'nombreDeEdificioNuevo='+ nombreDeEdificioNuevo;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoEdificio.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			$("#nombreDeEdificioNuevo").val("");
			
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});

	$("#EnviarNuevoSalon").click(function(){
		var tipoDeNuevoSalon      = $("#tipoDeNuevoSalon").val();
		var idDeEdificioParaSalon = $("#idDeEdificioParaSalon").val();

		
        console.log(tipoDeNuevoSalon);
        console.log(idDeEdificioParaSalon);

        
		if (idDeEdificioParaSalon == '' || tipoDeNuevoSalon == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'tipoDeNuevoSalon='+ tipoDeNuevoSalon + '&idDeEdificioParaSalon='+ idDeEdificioParaSalon;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoSalon.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			$("#tipoDeNuevoSalon").val("");
			$("#idDeEdificioParaSalon").val("");
			
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});
	
	$("#EnviarNuevoEstudiante").click(function(){
		var nombreDeNuevoEstudiante      = $("#nombreDeNuevoEstudiante").val();
		var emailDeNuevoEstudiante = $("#emailDeNuevoEstudiante").val();
		var fechaNacDeNuevoEstudiante = $("#fechaNacDeNuevoEstudiante").val();
		var idCalendarioDeNuevoEstudiante = $("#idCalendarioDeNuevoEstudiante").val();
		var idProfesorDeNuevoEstudiante = $("#idProfesorDeNuevoEstudiante").val();
		var idEstatusDeNuevoEstudiante = $("#idEstatusDeNuevoEstudiante").val();

		console.log(nombreDeNuevoEstudiante);
		console.log(emailDeNuevoEstudiante);
		console.log(fechaNacDeNuevoEstudiante);
        console.log(idCalendarioDeNuevoEstudiante);
        console.log(idProfesorDeNuevoEstudiante);
        console.log(idEstatusDeNuevoEstudiante);

        
		if (idEstatusDeNuevoEstudiante == '' || nombreDeNuevoEstudiante == '' || emailDeNuevoEstudiante == ''|| fechaNacDeNuevoEstudiante == ''|| idCalendarioDeNuevoEstudiante == ''|| idProfesorDeNuevoEstudiante == '') {
			$("#myErrorModal").modal('show');
		}else{
		//la cadena que se enviara como datos
		var dataString = 'nombreDeNuevoEstudiante='+ nombreDeNuevoEstudiante + '&emailDeNuevoEstudiante='+ 
		emailDeNuevoEstudiante + '&fechaNacDeNuevoEstudiante='+ fechaNacDeNuevoEstudiante + '&idCalendarioDeNuevoEstudiante='+ 
		idCalendarioDeNuevoEstudiante + '&idProfesorDeNuevoEstudiante='+ idProfesorDeNuevoEstudiante + '&idEstatusDeNuevoEstudiante='+ idEstatusDeNuevoEstudiante;

		// AJAX codigo para mandar datos a insert.php
		$.ajax({
		type: "POST",
		url: "insertNuevoEstudiante.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#myModal").modal('show');
			console.log(result);
			$("#nombreDeNuevoEstudiante").val("");
			$("#emailDeNuevoEstudiante").val("");
			$("#fechaNacDeNuevoEstudiante").val("");
			$("#idCalendarioDeNuevoEstudiante").val("");
			$("#idProfesorDeNuevoEstudiante").val("");
			$("#idEstatusDeNuevoEstudiante").val("");
			
			//$("input:gt(0)").val("");
			//$("#Enviar").val("Enviar");
		}
		});
		}
		return false;		
	});
});

