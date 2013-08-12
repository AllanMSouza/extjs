<!DOCTYPE html>
<html>
    <head>     
            
        <title></title>
    </head>
    <body>
        <?php
        session_start();
                
        if($_SESSION['id_usuarios'] == NULL){?>
            <script type="text/javascript" src="./app/view/layout.js"></script>
        <?php }
        else{
            if($_SESSION['id_usuarios'] == 1){?>
            <script type="text/javascript" src="./app/view/layout/LayoutAdministrador.js">
               
            </script>
        <?php }
           if($_SESSION['id_usuarios'] != NULL && $_SESSION['id_usuarios'] != 1){?>
             <script type="text/javascript" src="./app/view/LayoutUserFinal.js"></script>
       <?php } ?>
             <?php } 
       ?>
    </body>
</html>
