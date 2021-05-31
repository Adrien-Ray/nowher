</div>
<?php include "../includes/sidebar.php"; ?>
<footer>
<a>Copyright@2021 - NOWHER</a>
<a href="../pages/mentionslégales.php">Mentions légales</a>
<a href="../pages/contact.php">Contact</a>
<a href="#websitelogo">Haut de page</a>
</footer>
<?php
if ($_SESSION['js1'] === '1') {
?>
<script src="../scripts/dyslexia.js"></script>
<h1>script 1</h1>
<?php
}
if ($_SESSION['js2'] === '1') {
?>
<script src="../scripts/fontsize.js"></script> 
<h1>script 2</h1>
<?php
}
if ($_SESSION['js3'] === '1') {
?>
<script src="../scripts/vocal.js"></script> 
<h1>script 3</h1>
<?php
}
?>
   <script src="../scripts/main.js"></script>
</body>
</html>