</div>
<?php 
include "../includes/sidebar.php"; 
 ?>
<footer class="footer" <?php if($show==0){echo 'id="coucou"' ;}?> > 
<p>Copyright@2021 - NOWHER</p>
<a href="../pages/mentionslégales.php" aria-label="Accéder à la page mentions légales" role="link">Mentions légales</a>
<a href="../pages/contact.php" aria-label="Accéder à la page contact" role=link>Contact</a>
<a href="#websitelogo" aria-label="Revenir en haut de la page" role=link>Haut de page</a>
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