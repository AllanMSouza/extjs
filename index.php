<?php
	session_start();
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
         <!--<link rel="stylesheet" type="text/css" href="extjs/examples/build/KitchenSink/ext-theme-neptune/lib/prettify/prettify.css"/>-->
          <link rel="stylesheet" href="extjs/examples/build/KitchenSink/ext-theme-neptune/resources/KitchenSink-all.css">
          <link rel="stylesheet" href="extjs/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css">
          
          
          <link rel="stylesheet" href="extjs/examples/build/KitchenSink/ext-theme-neptune/resources/KitchenSink-example.css">
          <link rel="stylesheet" href="extjs/examples/view/data-view.css">
          <!--<link rel="stylesheet" href="extjs/resources/css/clifton.css">-->
          <!--<link rel="stylesheet" href="extjs/resources/css/ext-all-gray.css">-->
          <!--<link rel="stylesheet" href="resources/themes/css/ext-all.css">-->
          <link rel="stylesheet" type="text/css" href="resources/css/imagens.css">
          <!--<link rel="stylesheet" type="text/css" href="resources/css/tooltip.css">-->
          <!--<link rel="stylesheet" type="text/css" href="extjs/examples/layout-browser/layout-browser.css">-->
          <link rel="stylesheet" type="text/css" href="app/view/dataview/organizer.css">
          <link rel="stylesheet" type="text/css" href="extjs/examples/shared/example.css">
          <link rel="stylesheet" type="text/css" href="extjs/examples/desktop/css/desktop.css">
          <!--<script type="text/javascript" src="app/view/utils/ViewRedir.js"></script>-->
       
         
            
            <script type="text/javascript" src="extjs/ext-all-debug.js"></script>
            <link rel="stylesheet" href="extjs/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all-debug.css">
            <!--<script type="text/javascript" src="extjs/examples/shared/include-ext.js"></script>-->
            <!--<script type="text/javascript" src="extjs/examples/shared/options-toolbar.js"></script>-->
             <script type="text/javascript" src="app/view/utils/ViewRedir.js"></script>
             <script type="text/javascript" src="extjs/examples/shared/examples.js"></script>
             <script type="text/javascript" src="resources/ext-lang-pt_BR.js"></script>
              <!--<script type="text/javascript" src="extjs/examples/example-data.js"></script>-->

             
            
            
        <title>Supermercado</title>
    </head>
    <body>
    <div id="msg-div"></div>
    <div id="telaprincipal"></div>
    
    <div style="display:none;">

        <!-- Start page content -->
        <div id="start-div">
           <div style="margin-left:100px;">
                
            </div>
        </div>
        
        
        <?php
		//echo $_SESSION['login'];
		if(!isset($_SESSION['id_usuarios'])) { ?>
                                                  
			<script type="text/javascript" src="app.js"></script>
    <?php }
		else { 
                    include ("./app/data/php/utils/Layout.php");
                    ?>
                      <!-- <script type="text/javascript" src ="./app/view/layout.js"></script> ->
    <?php } ?>
    </body>
</html>
