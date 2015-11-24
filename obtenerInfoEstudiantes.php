<?php 
//preparamos la conexion a la DB
$servidor 	= "";
$usuario 	= "";
$contraseña = "";
$db 		= "";
$result 	= new mysqli('localhost' ,'mickalex_MaBaseD' ,'LosChingones1234',' mickalex_dbUniversidad');
if(mysqli_connect_errno())
{
	printf("La conexion a base de datos a fallado %s\n", mysqli_connect_errno());
}

if($_GET['nombreParc'] != "")
{
	$query = $result->query('SELECT IdEstudiante, NombreEs,EmailEs,FechaNac,YEAR(CURDATE())-YEAR(FechaNac) as Edad,NombreCalendario,Nombre as NombreDeProfesor,TipoDeEstatus, Semestre FROM (SELECT rownumDeEstudiante-rownum+2 as Semestre, NombreEs as NombreEst, IdEstudiante as IdEstudianteEst FROM (SELECT rownum FROM (SELECT @rownum:=@rownum+1 AS rownum, u.IdCalendario,u.NombreCalendario FROM (SELECT * FROM Calendario ORDER BY NombreCalendario ) u,(SELECT @rownum:=0)r)x WHERE IdCalendario=(SELECT IdCalendario FROM Calendario WHERE Estatus="Activo")
 ) x,

(SELECT @rownum:=@rownum+1 AS rownumDeEstudiante, ss.IdCalendario, ss.NombreCalendario, IdCalendario as IdCalendario2 FROM 
 	(SELECT * FROM Calendario as k ORDER BY k.NombreCalendario ) ss,
 	(SELECT @rownum:=0)y
) z
INNER JOIN Estudiante as es ON es.CalendarioE = IdCalendario2 )l INNER JOIN 
		Estudiante as es ON IdEstudianteEst=es.IdEstudiante INNER JOIN Profesor as p ON es.IdAsesor=p.IdProfesor  INNER JOIN Empleado as e ON p.IdEmpleadoP=e.IdEmpleado INNER JOIN Calendario as c ON es.CalendarioE=c.IdCalendario INNER JOIN Estatus as est ON es.IdEstatusS=est.IdEstatus WHERE NombreEs LIKE "'.$_GET['nombreParc'].'%"');
	$array = array();
	while($row = $query->fetch_object())
	{
		$array[] = $row;
	}
	echo json_encode($array);
}

 ?>