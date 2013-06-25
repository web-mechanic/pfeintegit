<div itemscope itemtype="http://schema.org/Person" class="otherInfCont">
<h3 itemprop="jobTitle"><?php print render ($row->node_title); ?></h3>
        <p class="contAdress">  
        <span itemprop="name"><?php print render ($row->field_field_nom_du_contact); ?></span><br/>
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
		<span itemprop="streetAddress"><?php print render ($row->field_field_n_adresse); ?></span><br/>
		<span itemprop="addressLocality"><?php print render ($row->field_field_cp_ville); ?></span><br/>
        </div>
        </p>   
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <p class="contTel" itemprop="telephone">
        <?php print render ($row->field_field_num_gsm); ?>
        </p>

        <p class="contMail">
        <a href="mailto:<?php print render ($row->field_field_mail_contact); ?>" itemprop="email"><?php print render ($row->field_field_mail_contact); ?></a>
        </p>
        </div>

</div>