<?php
session_start();
if(isset($_SESSION['user'])) { ?>
    {
      "status": true
    }
  <?php } else { ?>
    {
      "status": false
    }
<?php } ?>
