<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Nowher" content="Ce site sensibilise le public aux problèmatiques que rencontrent les déficients mentaux sur le web.">
    <link rel="shortcut icon" href="../assets/logo/nowhereblanc.png" type="image/x-icon">
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="../styles/sidebar.css">
    <title>Nowher</title>
        
    <?php
    if (isset($_SESSION['js1']) AND $_SESSION['js1'] === '1') {
    ?>
    <style>
    html{
        font-size:120%;
    }
    </style>
    <?php
    }
    ?>
</head>
<body onload="dislexNodes(document.body)">
<header>
    <a href="index.php"><img src="../assets/logo/nowhere.png" alt="logo du site" id="websitelogo"></a>
    <div id="hamb_menu">
        <div id="hamb_menu_btn">
            <div class="barre" id='barre1'></div>
            <div class="barre" id='barre2'></div>
            <div class="barre" id='barre3'></div>
        </div>
    </div> <!-- fermeture hamb_menu -->
        <div class="dropdown" id="dropbtn1">
        <button class="dropbtn">La démence 
        </button>
        <div class="dropdown-content" id="dropcontent1">  
        <div class="row">
            <div class="column">
            <a href="articledemence.php">Explications</a>
            <a href="donnees-chiffrees.php">Données chiffrées</a>
            </div> <!-- column -->
        </div><!-- ferme row -->
        </div><!-- ferme dropdown content -->
    </div> <!-- ferme dropdown -->
    <div class="dropdown" id="dropbtn2">
        <button class="dropbtn">Les solutions 
        </button>
        <div class="dropdown-content" id="dropcontent2">  
        <div class="row">
            <div class="column">
            <a href="solutionfamille.php">pour les familles</a>
            <a href="solutiondev.php">pour les développeurs</a>
            </div> <!-- column -->
        </div><!-- ferme row -->
        </div><!-- ferme dropdown content -->
    </div> <!-- ferme dropdown -->
</header>
    <div id="menumobile">
        <h1>La démence</h1>
<!--         <div class="link-demence"> -->
        <a href="articledemence.php">Explications</a><br>
        <a href="donnees-chiffrees.php">Données chiffrées</a>
<!--         </div> -->
        <h1>Les solutions</h1>
        <a href="solutionfamille.php">pour les familles</a><br>
        <a href="solutiondev.php">pour les développeurs</a>
    </div>
<div class="content">

