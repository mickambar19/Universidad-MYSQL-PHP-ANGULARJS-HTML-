<?php 
$db        = new mysqli ('localhost','LosChingones','12345','dbUniversidad');
$comando="INSERT INTO `Empleado`(`Nombre`, `Nss`, `Tipo`) 
VALUES ('".$_POST['Nombre']."','".$_POST['Nss']."','".$_POST['Tipo']."')";
if(mysqli_connect_errno())
{
	printf("La conexion a base de datos a fallado %s\n",mysqli_connect_errno());
	exit();
}
if(mysqli_query($db,$comando) === TRUE){
	echo "Se ha realizado la inserccion";
}
else
{
	echo "Error.";
	echo mysqli_sqlstate($db);
}
$db->close();
?>