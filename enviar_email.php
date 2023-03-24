<?php
  // Recibe los datos del formulario
  $nombre = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $cedula = $_POST['cedula'];
  $email = $_POST['email'];
  $address = $_POST['address'];
  $provincia = $_POST['provincia'];
  $municipios = $_POST['municipios'];
  $zip = $_POST['zip'];
  $Empadronador = $_POST['Empadronador'];
  
  // Configuración del correo electrónico
  $destinatario = 'jansgreen@example.com';
  $asunto = "Aqui te envio mis datos para registrarme" + [$nombre, $lastName,  $cedula, $email,  $address, $provincia, $municipios,  $zip,  $Empadronador ];
  $cuerpo = "Nombre: $nombre, $lastName \n Email: $email\nMensaje: $mensaje";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  
  // Envía el correo electrónico
  if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo 'Mensaje enviado exitosamente';
  } else {
    echo 'Error al enviar el mensaje';
  }
?>
