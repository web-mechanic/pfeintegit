

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
       
        <title>La royale harmonie concorde Saint-Martin d'Antheit</title>
        <meta name="description" content="L'harmonie d'antheit joue pour vous un répertoire allant de la musique classique au musique les plus contemporaines.">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <script type="text/javascript" src="//use.typekit.net/lqz6sck.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <link rel="stylesheet" href="../css/main.css">
        

        
    </head>

    <?php

if(isset($_POST['submit'])) {

    //On s'assure que le champ du nom est bien rempli
    if(trim($_POST['contactname']) == '') {
        $hasError = true;
    } else {
        $name = trim($_POST['contactname']);
    }

    //On vérifie que le sujet n'est pas vide
    if(trim($_POST['subject']) == '') {
        $hasError = true;
    } else {
        $subject = trim($_POST['subject']);
    }

    //On s'assure que l'e-mail est valide
    if(trim($_POST['email']) == '')  {
        $hasError = true;
    } else if (!preg_match("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$^", trim($_POST['email']))) {
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    //On s'assure que tout a été correctement
    if(trim($_POST['message']) == '') {
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['message']));
        } else {
            $comments = trim($_POST['message']);
        }
    }

    //Si il n'y a pas d'erreur, on envoit le message
    if(!isset($hasError)) {
        $emailTo = 'th.lissens@gmail.com'; //Put your own email address here
        $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
        $headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

        mail($emailTo, $subject, $body, $headers);
        $emailSent = true;
    }
}
?>
    <body id="accueil">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

<div class="header">
<div class="wrap">
 <h1 class="logoSite"><img class="logo" src="../img/logo.png" alt="Logo de l'harmonie" width="270" height="97"/></h1>

     <nav >
        <ul class="mainNav">
            <li><a href="../index.html">Accueil</a></li>
            <li><a href="apropos.html">À propos</a></li>
            <li><a href="media.html">Média</a></li>
            <li><a href="agenda.html">Agenda</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.php">Nous Contacter</a></li>
        </ul>
    </nav>
</div>
</div>
<div class="wrap">
<section class="contact">
    <h1>Nous contacter</h1>
    <div class="wrapForm">
    <div class="iContact">
        <h2>Via le formulaire de contact</h2>
        <p>Envie de nous rejoindre? D'avoir des informations sur la société ou bien tout simplement l'envie de nous dire bonjour? N'hésitez pas à utiliser notre formulaire de contact!</p>
    </div>


    <div id="contactWrapper" role="form">
        <?php if(isset($hasError)) { //If errors are found  ?>  
            <p class="error">Avez-vous bien remplis toutes les informations?</p>
        <?php } ?> 

        <?php if(isset($emailSent) && $emailSent == true) { //If email is sent  ?> 
            <div class="success">
                <p><strong>Votre e-mail a bien été envoyé!</strong></p>
                <p>Merci pour nous avoir contactez <strong><?php echo $name;?></strong>!Nous répondrons à votre e-mail dans les plus brefs délais</p>
            </div>
        <?php } ?>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" id="contactform">
            <div class="stage clear topForm">
                <label for="name">Nom: <em>*</em></label>
                <input type="text" name="contactname" id="contactname" value="" placeholder="Pierre Malempré" class="required" role="input" aria-required="true" />
            </div>

            <div class="stage clear topForm">
                <label for="email">Email: <em>*</em></label>
                <input type="email" name="email" id="email" value="" class="required email" placeholder="p.malempre@yourprovider.com" role="input" aria-required="true" />
            </div>

            <div class="stage clear">
                <label for="subject">Sujet: <em>*</em></label>
                <input type="text" name="subject" id="subject" value="" class="required" role="input" aria-required="true" />
            </div>

            <div class="stage clear">
                <label for="message">Message: <em>*</em></label>
                <textarea rows="8" name="message" id="message" class="required" role="textbox" aria-required="true"></textarea>
            </div>
                                
            <p class="requiredNote"><em>*</em>Indique un champ requis</p>
            
            <input type="submit" value="Envoyer le message" name="submit" id="submitButton" title="Cliquez ici pour envoyer votre message!" />
        </form>
        
    </div>
    </div>
    <div class="otherContactInf">
       <div class="adressAdmin">
            <h2>Contacter le secrétariat</h2>
           <p class="contAdress">  
                Thomas Lissens<br/>
                5, rue Basses-Trixhes <br/>
                4218 Couthuin<br/>
           </p>

           <p class="contTel">
               0472 41 55 89
           </p>

           <p class="contMail">
               admin@harmonie-antheit.be
           </p>

            <h2>Contacter le chef de musique</h2>
           <p class="contAdress">  
                Jean-Marc Lissens<br/>
                5, rue Basses-Trixhes <br/>
                4218 Couthuin<br/>
           </p>

           <p class="contTel">
               0479 88 32 01
           </p>

           <p class="contMail">
               direction@harmonie-antheit.be
           </p>

           <h2>Adresse du local</h2>
           <p class="contAdress">
                Harmonie d'Antheit</br>
                Rue des Grandes Ruelles 40</br>
                4520 Antheit</br>

           </p>
       </div>
    </div>



</section>   
<div class="loc">
    <h1>Nous localiser</h1>
<div id="Map">
    
</div> 
</div>
</div>
<div class="footer">
    <div class="wrap">
    <section class="siteMap">
      <h1>Site map</h1>
        <ul>
            <li><a href="../index.html">Accueil</a></li>
            <li><a href="apropos.html">À propos</a></li>
            <li><a href="media.html">Média</a></li>
            <li><a href="agenda.html">Agenda</a></li>
            <li><a href="contact.php">Nous Contacter</a></li>
        </ul>
    </section>

     <section class="contactFoot">
        <h1>Nous contacter</h1>
           <p class="contAdress">
                Harmonie d'Antheit</br>
                Rue des Grandes Ruelles 40</br>
                4520 Antheit</br>

           </p>
            <p class="contTel">
               0472 41 55 89
           </p>
           <p class="contMail">
               admin@harmonie-antheit.be
           </p>
           
    </section>

    <section class="autresInfos">
        <h1 class="presseEtRelations">Presse et relations</h1>
        <ul>
            <li><a href="html/presse.html">Presse</a></li>
            <li><a href="html/liensdivers.html">Liens divers</a></li>
        </ul>
            </section>
        <section class="autresInfos">
        <h1 class="presseEtRelations">Presse et relations</h1>
        <ul>
            <li><a href="html/presse.html">Presse</a></li>
            <li><a href="html/liensdivers.html">Liens divers</a></li>
        </ul>
    </section>

    <p class="signature">Copyright "La Royale Harmonie Concorde Saint-Martind'Antheit". Tous droits réservés.</p>
    </div>
</div>


   
<script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="//ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
<script src="//maps.google.com/maps/api/js?sensor=false"></script>
<script src="../js/main.js"></script>
<script src="../js/tinynav.min.js"></script>

     </body>


    </html>
