// Función para recoger los datos de PHP según el navegador, se usa siempre.
function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
 
	try {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	} catch (E) {
		xmlhttp = false;
	}
}
 
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	  xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
 
//Función para recoger los datos del formulario y enviarlos por post  
function enviarDatos(){
 
  //div donde se mostrará lo resultados
  divResultado = document.getElementById('resultado');
  //recogemos los valores de los inputs
  fecha     = document.nuevaAsistencia.fecha.value;
  profesor  = document.nuevaAsistencia.profesor.value;
  hora      = document.nuevaAsistencia.hora.value;
  sustituto = document.nuevaAsistencia.sustituto.value;
  presentes = document.nuevaAsistencia.presentes.value;
  tc        = document.nuevaAsistencia.tc.value;
  faltantes = document.nuevaAsistencia.faltantes.value;
  comments  = document.nuevaAsistencia.comments.value;
 
  //instanciamos el objetoAjax
  ajax=objetoAjax();
 
  //uso del medotod POST
  //archivo que realizará la operacion
  //registro.php
  ajax.open("POST", "insert.php",true);
  //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
  ajax.onreadystatechange=function() {
	  //la función responseText tiene todos los datos pedidos al servidor
  	if (ajax.readyState==4) {
  		//mostrar resultados en esta capa
		divResultado.innerHTML = ajax.responseText
  		//llamar a funcion para limpiar los inputs
		LimpiarCampos();
	}
 }
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores a registro.php para que inserte los datos
	ajax.send("fecha="+fecha+"&profesor="+profesor+"&hora="+hora"&sustituto="+sustituto+"&presentes="+presentes+"&tc="+tc+"&ausentes="+faltantes+"&comentarios="+comments)
}
 
//función para limpiar los campos
function LimpiarCampos(){
  document.nuevaAsistencia.profesor.value;
  document.nuevaAsistencia.hora.value;
  document.nuevaAsistencia.sustituto.value;
  document.nuevaAsistencia.presentes.value;
  document.nuevaAsistencia.tc.value;
  document.nuevaAsistencia.faltantes.value;
  document.nuevaAsistencia.comments.value;
  document.nuevaAsistencia.fecha.focus();
}