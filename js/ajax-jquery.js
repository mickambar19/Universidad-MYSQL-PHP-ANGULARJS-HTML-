
$(document).ready(function(){
	$("#Enviar").click(function(){
		var nombreE     = $("#nombreE").val();
		var nssE	    = $("#nssE").val();
		var tipoE       = $("#tipoE").val();

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
});