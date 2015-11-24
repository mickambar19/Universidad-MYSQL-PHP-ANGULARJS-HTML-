<?php
$data=file_get_contents("php://input");



$mysqli = new mysqli("localhost", "mickalex_MaBaseD", " LosChingones1234", " mickalex_dbUniversidad");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
//$User      = $objData->usuario;
//$Password  = $objData->password;
//$User      = json_decode($_POST['usuario']);
//$Password  = json_decode($_POST['Password']);
$User      = $_POST['usuario'];
//echo $_POST['usuario'];
//echo $User;
$Password  = $_POST['password'];
//echo $_POST['password'];
//echo $Password;
$resultado = $mysqli->query("SELECT * FROM SuperUsuarios WHERE Usuario ='".$User."'ORDER BY idSuperUsuario ASC");
$loginURL  = "https://inoveloper.com/ProUni/index.html";
$homeURL   = "https://inoveloper.com/ProUni/home.html";
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
