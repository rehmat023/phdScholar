<?php
  if (isset($_POST) && !empty($_POST)) {
    $userEmail = $_POST['userEmail'];
    $userPassword = $_POST['userPassword'];
    if ($userEmail == 'admin' && $userPassword == 'admin') {
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
