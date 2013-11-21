<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class PagnaPanfleto extends Base {
    
   public function insert(){
    $data = (object)$_POST;

     $arquivo = $_FILES['imagem_panfleto']['tmp_name']; 
     $tamanho = $_FILES['imagem_panfleto']['size'];
     $tipo    = $_FILES['imagem_panfleto']['type'];
     $nome    = $_FILES['imagem_panfleto']['name'];
         
     if ( $arquivo != "none" ){
       $fp = fopen($arquivo, "rb");
       $conteudo = fread($fp, $tamanho);
       fclose($fp);
       //$conteudo = addslashes($conteudo);

     }
     
     $db = $this->getDb();
     $stm = $db->prepare('insert into pagina_panfleto 
         (numero_pagina, imagem_pagina, panfleto_id_panfleto) 
         values (:numero_pagina, :imagem, :panfleto_id_panfleto)');
     $stm->bindValue(':numero_pagina', $data->numero_pagina);
     $stm->bindValue(':imagem', $conteudo);
     $stm->bindValue(':panfleto_id_panfleto', $data->id_panfleto);
     $result = $stm->execute();
     
     if($result == true)
        $msg = "Pagina Cadastrado com Sucesso!";
    else
        $msg = "Erro ao Cadastrar Pagina!";
     echo json_encode(array(
         "success" => $result,
         "msg" => $msg
     ));

   }
   
   public function select(){
      
   }
   
   public function update(){
       $data = (object)$_POST;
       $db = $this->getDb();
       
       if($_FILES['imagem_panfleto']['tmp_name']== ""){
           $stm = $db->prepare('update pagina_panfleto set 
               numero_pagina = :numero_pagina 
               where id_pagina_panfleto = :id');
           $stm->bindValue(':numero_pagina', $data->numero_pagina);
           $stm->bindValue(':id', $data->id_pagina_panfleto);
           $result = $stm->execute();
     
            if($result == true)
               $msg = "Pagina atualizada com Sucesso!";
           else
               $msg = "Erro ao Atualizar Pagina!";
            echo json_encode(array(
                "success" => $result,
                "msg" => $msg
            ));
       }
       else {
//           echo 'update img';
           $arquivo = $_FILES['imagem_panfleto']['tmp_name']; 
            $tamanho = $_FILES['imagem_panfleto']['size'];
            $tipo    = $_FILES['imagem_panfleto']['type'];
            $nome    = $_FILES['imagem_panfleto']['name'];

            if ( $arquivo != "none" ){
              $fp = fopen($arquivo, "rb");
              $conteudo = fread($fp, $tamanho);
              fclose($fp);
              //$conteudo = addslashes($conteudo);

            }
           
            $stm = $db->prepare('update pagina_panfleto set 
               numero_pagina = :numero_pagina,
               imagem_pagina = :imagem
               where id_pagina_panfleto = :id');
           $stm->bindValue(':numero_pagina', $data->numero_pagina);
           $stm->bindValue(':imagem', $conteudo);
           $stm->bindValue(':id', $data->id_pagina_panfleto);
           $result = $stm->execute();
     
            if($result == true)
               $msg = "Pagina atualizada com Sucesso!";
           else
               $msg = "Erro ao Atualizar Pagina!";
            echo json_encode(array(
                "success" => $result,
                "msg" => $msg
            ));
           
       }
   }
   public function destroy(){
       
   }
   
    public function getImagemPanfleto(){
      $id = $_GET['id_pagina_panfleto'];
      $db = $this->getDb();
      $stm = $db->prepare('select * from pagina_panfleto where id_pagina_panfleto = :id');
      $stm->bindValue(':id', $id);
      $stm->execute();

      $produto = $stm->fetchAll( PDO::FETCH_ASSOC);
                  
        header('Content-Type: image/png');
        echo $produto[0]['imagem_pagina'];
        //echo "<a href='".$produto[0]['imagem_produto']."' data-lightbox='roadtrip'>";
        //echo "<img src='".$produto[0]['imagem_produto']."' border='0' style='width: 100px; height: 90px; padding: 5px;'></a>";
    }
  
     
}

new PagnaPanfleto();
?>
