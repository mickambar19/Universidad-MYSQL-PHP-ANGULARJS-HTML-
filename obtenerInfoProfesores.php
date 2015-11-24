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

if($_GET['nombrePro'] != "")
{
	$query = $result->query('SELECT * FROM Profesor INNER JOIN Empleado ON IdEmpleadoP=IdEmpleado WHERE Nombre LIKE "'.$_GET['nombrePro'].'%"');
	$array = array();
	while($row = $query->fetch_object())
	{
		$array[] = $row;
	}
	echo json_encode($array);
}
/*$A="A";
if("A"!= "")
{
	$query = $result->query('SELECT Nombre FROM Profesor INNER JOIN Empleado AS E ON IdEmpleadoP=IdEmpleado WHERE Nombre   LIKE "'.$A.'%"');
	$array = array();
	while($row = $query->fetch_object())
	{
		$array[] = $row;
	}
	echo json_encode($array);
}*/

 ?>