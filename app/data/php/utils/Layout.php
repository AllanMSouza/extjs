<!DOCTYPE html>
<html>
    <head>     
            
        <title></title>
    </head>
    <body>
        <?php
        session_start();
                
        if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 1){?>
            <script type="text/javascript" src="./app/view/layout/LayoutCliente.js"> </script>
            
        <?php }
        else{
            if($_SESSION['id_usuarios'] == 1){?>
            <script type="text/javascript" src="./app/view/layout/LayoutAdministrador.js"></script>
        <?php }
          if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 2){?>
              <script type="text/javascript" src="./app/view/layout/LayoutMercadoGestor.js"></script>
                          
       <?php } ?>
        <?php
         if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 3){?>
        <script type="text/javascript" src="./app/view/layout/LayoutMercadoAdministrador.js"></script>
         <?php } ?>
        <?php
        if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 4){?>
        <script type="text/javascript" src="./app/view/layout/LayoutMercadoEstoquePedidos.js"></script>
        <?php } ?>
        <?php
        if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 5){?>
        <script type="text/javascript" src="./app/view/layout/LayoutMercadoPaineldeControle.js"></script>
        <?php } ?>
        <?php
        if($_SESSION['id_usuarios'] > 1 && $_SESSION['acesso'] == 6){?>
        <script type="text/javascript" src="./app/view/layout/LayoutMercadoSuporte.js"></script>
       <?php } ?>
        <?php } ?>
       ?>
       
       <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />-->
<!--        <script type="text/javascript">
//                
                window.location.reload();
                //
        </script>-->
    </body>
</html>
