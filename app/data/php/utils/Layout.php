<!DOCTYPE html>
<html>
    <head>     
            
        <title></title>
    </head>
    <body>
        <?php
        session_start();
                
        if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 1){?>
            <script type="text/javascript" src="./app/view/layout/LayoutCliente.js"></script>
        <?php }
        else{
            if($_SESSION['id_usuarios'] == 1){?>
            <script type="text/javascript" src="./app/view/layout/LayoutAdministrador.js">
               
            </script>
        <?php }
          if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 2){?>
              <script type="text/javascript" src="./app/view/layout/LayoutMercado.js"></script>
       <?php } ?>
             <?php } 
       ?>
    </body>
</html>
