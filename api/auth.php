<?php
  $_POST = json_decode(file_get_contents('php://input'), true);
  session_start();
  if (isset($_POST) && !empty($_POST)) {
    $userEmail = $_POST['email'];
    $userPassword = $_POST['password'];
    if ($userEmail == 'abc@abc.com' && $userPassword == 'admins') {
      $_SESSION['user'] = 'student';
      $_SESSION['userName'] = 'Mubi';
      ?>
      {
        "success" : true,
        "message" : "You are logged in"
      }
      <?php
    } else {
    ?>
      {
        "success" : false,
        "message" : "Invalid Credentials"
      }
    <?php
      }
  } else{ ?>
    {
      "success" : false,
      "message" : "Only POST access accepted"
    }
  <?php
}
 ?>
