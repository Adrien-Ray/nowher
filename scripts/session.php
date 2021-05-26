<?php
session_start();
if (isset($_GET['js1'])) {
      if (isset($_SESSION['js1'])) {
            if ($_SESSION['js1'] === '0') {
                  $_SESSION['js1'] = '1';
            }else{
                  $_SESSION['js1'] = '0';
            }
      }else{
            $_SESSION['js1'] = '1';
      }
}elseif(isset($_GET['js2'])){
      if (isset($_SESSION['js2'])) {
            if ($_SESSION['js2'] === '0') {
                  $_SESSION['js2'] = '1';
            }else{
                  $_SESSION['js2'] = '0';
            }
      }else{
            $_SESSION['js2'] = '1';
      }
}elseif(isset($_GET['js3'])){
      if (isset($_SESSION['js3'])) {
            if ($_SESSION['js3'] === '0') {
                  $_SESSION['js3'] = '1';
            }else{
                  $_SESSION['js3'] = '0';
            }
      }else{
            $_SESSION['js3'] = '1';
      }
}
header("location:". $_GET['url']);