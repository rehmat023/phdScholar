<?php
    session_start();
    $user = $_SESSION['user'];
    $name = $_SESSION['userName'];
    if($user == 'student'){ ?>
          {
            "success" : true,
            "message" : "welcome"
          }
    <?php
  }else { ?>
          {
            "success" : false,
            "message" : "not logged in"
          }
  <?php
  }
?>
