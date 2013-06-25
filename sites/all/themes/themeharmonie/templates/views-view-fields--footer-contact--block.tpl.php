
        <p><?php print render ($row->field_field_nom_du_contact); ?><br/></p>
        <p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"class="contAdress">  
        
		<span itemprop="streetAddress"><?php print render ($row->field_field_n_adresse); ?></span><br/>
		<span itemprop="addressLocality" ><?php print render ($row->field_field_cp_ville); ?></span><br/>
        </p>   

        <p class="contTel" itemprop="telephone">
        <?php print render ($row->field_field_num_gsm); ?>
        </p>

       
        <a  class="contMail" title="Envoyer un e-mail à la société" itemprop="email" href="mailto:<?php print render ($row->field_field_mail_contact); ?>"><?php print render ($row->field_field_mail_contact); ?></a>    
   