</div>
<footer>
<a>Copyright@2021 - NOWHER</a>
<a href="../pages/mentionslégales.php">Mentions légales</a>
<a href="../pages/contact.php">Contact</a>
<a href="#websitelogo">Haut de page</a>
</footer>
<?php
if (isset($_SESSION['js1']) AND $_SESSION['js1'] === '1') {
?>
<script src="../scripts/fontsize.js"></script> 
<?php
}
if (isset($_SESSION['js3']) AND $_SESSION['js3'] === '1') {
?>
<script src="../scripts/dyslexia.js"></script>
<?php
}
?>
   <script src="../scripts/main.js"></script>
</body>
</html>