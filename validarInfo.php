<?php
$data = file_get_contents("php://input");

$objData = json_decode($data);

$mysqli = new mysqli("localhost", "root", "bubu1995", "dbUniversidad");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$User      = $objData->usuario;
$Password  = $objData->password;
//$User      = json_decode($_POST['Usuario']);
//$Password  = json_decode($_POST['Password']);
$resultado = $mysqli->query("SELECT * FROM SuperUsuarios WHERE Usuario ='".$User."'ORDER BY idSuperUsuario ASC");
$loginURL  = "http://localhost/html/BasesDatostratahttpPost/index.html";
$homeURL   = "http://localhost/html/BasesDatostratahttpPost/home.html";
$valido    = false;
for ($num_fila = $resultado->num_rows - 1; $num_fila >= 0; $num_fila--) {
    $resultado->data_seek($num_fila);
    $fila = $resultado->fetch_assoc();
    //echo " Id = ".$fila['IdSuperUsuario']." Usuario = " . $fila['Usuario'] ."Pass:". $fila['Password'] ."gvg".$Password."\n";
    if($fila['Password'] == $Password)
    {
    	$valido = true;
    }
    
}

if($valido == false)
{
    echo $loginURL;
	//header('Location: '.$loginURL);
}
else
{
    echo $homeURL;
	//header('Location: '.$homeURL);
}

?>
