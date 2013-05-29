<h3><?php print render ($row->node_title); ?></h3>
        <p class="contAdress">  
        <?php print render ($row->field_field_nom_du_contact); ?><br/>
		<?php print render ($row->field_field_n_adresse); ?><br/>
		<?php print render ($row->field_field_cp_ville); ?><br/>
        </p>   

        <p class="contTel">
        <?php print render ($row->field_field_num_gsm); ?>
        </p>

        <p class="contMail">
        <?php print render ($row->field_field_mail_contact); ?>    
        </p>