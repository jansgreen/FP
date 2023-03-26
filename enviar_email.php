<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Recibe los datos del formulario
  $nombre = isset($_POST['firstName']) ? $_POST['firstName'] : '';
  $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
  $cedula = isset($_POST['cedula']) ? $_POST['cedula'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $address = isset($_POST['address']) ? $_POST['address'] : '';
  $provincia = isset($_POST['provincia']) ? $_POST['provincia'] : '';
  $municipios = isset($_POST['municipios']) ? $_POST['municipios'] : '';
  $zip = isset($_POST['zip']) ? $_POST['zip'] : '';
  $Empadronador = isset($_POST['Empadronador']) ? $_POST['Empadronador'] : '';
  
  // Configuración del correo electrónico
  $destinatario = 'jansgreen@gmail.com';
  $asunto = "Aqui te envio mis datos para registrarme: $nombre $lastName, $cedula, $email, $address, $provincia, $municipios, $zip, $Empadronador";
  $cuerpo = "Nombre: $nombre $lastName \n Email: $email\nMensaje: $mensaje";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  
  // Envía el correo electrónico
  if (mail($destinatario, $asunto, $cuerpo, $headers)) {
   header('Location: thanks.html');
   exit();
  } else {
   header('Location: error.html');
   exit();
  }
}

?>