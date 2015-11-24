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

if($_GET['empleadoEliminar'] != "")
{
	$query = $result->query('DELETE FROM Empleado WHERE IdEmpleado = "'.$_GET['empleadoEliminar'].'"');
	$query = $result->query('DELETE FROM Email WHERE IdEmpleadoE = "'.$_GET['empleadoEliminar'].'"');
}

 ?>