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

$query = $result->query('SELECT * FROM Departamento as d INNER JOIN Profesor as p ON d.IdJefe=p.IdProfesor INNER JOIN Empleado as e ON p.IdEmpleadoP=e.IdEmpleado ORDER BY d.IdDepto ASC');
$array = array();
while($row = $query->fetch_object())
{
	$array[] = $row;
}
echo json_encode($array);


 ?>