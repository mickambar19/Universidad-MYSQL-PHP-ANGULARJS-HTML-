<?php 
$db        = new mysqli ('localhost' ,'mickalex_MaBaseD' ,'LosChingones1234',' mickalex_dbUniversidad');

//$comando="INSERT INTO `Profesor`( `IdEmpleadoP` ) VALUES ('".$_POST['IdEmpleado']."')";
$comando="INSERT INTO `Edificio`(   `NombreE`) VALUES ('".$_POST['nombreDeEdificioNuevo']."')";
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