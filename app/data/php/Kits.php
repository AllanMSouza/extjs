<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Kits extends Base {
    
       public function insert(){
           $data = (object)$_POST;
           
           $arquivo = $_FILES['imagem']['tmp_name']; 
         $tamanho = $_FILES['imagem']['size'];
         $tipo    = $_FILES['imagem']['type'];
         $nome    = $_FILES['imagem']['name'];
         
         if ( $arquivo != "none" ){
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            //$conteudo = addslashes($conteudo);
            
          }
          
          $db = $this->getDb();
          $stm = $db->prepare('insert into kits 
              (titulo, descricao, imagem_kit, ativo, validade, desconto, permissao, mercado_id_mercado) 
              values (:titulo, :descricao, :imagem_kit, :ativo, :validade, :desconto, :permissao, :mercado_id_mercado) ');
          $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
          $stm->bindValue(':imagem_kit', $conteudo);
          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
          else
            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          
          $result = $stm->execute();
          
          if($result == true)
            $msg = "Produto Cadastrado com Sucesso!";
          else
            $msg = "Erro ao Cadastrar Produto!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
          
       }
       
       public function select(){
           $db = $this->getDb();
           $stm= $db->prepare('select * from kits');
           $stm->execute();
           
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
        ));
       }
       
       public function selectKitsCliente(){
           $db = $this->getDb();
           $stm= $db->prepare('select * from kits where mercado_id_mercado = :id_mercado');
           $stm->bindValue(':id_mercado', 1);
           $stm->execute();
           
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
            
            for($i = 0; $i < count($result); $i++){
                $result[$i]['text'] = $result[$i]['titulo'];
                $result[$i]['leaf'] = true;
            }
            
            echo json_encode(array(
           "success" => true,
           "data" => $result
        )); 
           
       }
       
       public function destroy(){
           
       }
       
       public function update(){
        $data = (object)$_POST;
        $file = $_FILES['imagem'];
        if($file['tmp_name']==""){
            $db = $this->getDb();
            $stm = $db->prepare('update kits set 
              titulo = :titulo, 
              descricao = :descricao, 
              ativo = :ativo, 
              validade = :validade, 
              desconto = :desconto, 
              permissao = :permissao, 
              mercado_id_mercado = :mercado_id_mercado 
              where id_kit = :id_kit');
            $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
//          $stm->bindValue(':imagem_kit', $conteudo);
          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
          else
            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          $stm->bindValue(':id_kit', $data->id_kit);
          $result = $stm->execute();
          
          if($result == true)
            $msg = "Kit alterado com Sucesso!";
          else
            $msg = "Erro ao editar Kit!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
            
        }
        else {
            $arquivo = $_FILES['imagem']['tmp_name']; 
            $tamanho = $_FILES['imagem']['size'];
            $tipo    = $_FILES['imagem']['type'];
            $nome    = $_FILES['imagem']['name'];
            
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            $db = $this->getDb();
            $stm = $db->prepare('update kits set 
              titulo = :titulo, 
              descricao = :descricao, 
              imagem_kit = :imagem_kit, 
              ativo = :ativo, 
              validade = :validade, 
              desconto = :desconto, 
              permissao = :permissao, 
              mercado_id_mercado = :mercado_id_mercado 
              where id_kit = :id_kit');
            $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
          $stm->bindValue(':imagem_kit', $conteudo);
          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
          else
            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          $stm->bindValue(':id_kit', $data->id_kit);
          $result = $stm->execute();
          
          if($result == true)
            $msg = "Kit alterado com Sucesso!";
          else
            $msg = "Erro ao editar Kit!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
        }
        
       }
       
        public function getImgKit(){
      $id = $_GET['id_kit'];
      $db = $this->getDb();
      $stm = $db->prepare('select * from kits where id_kit = :id');
      $stm->bindValue(':id', $id);
      $stm->execute();

      $produto = $stm->fetchAll( PDO::FETCH_ASSOC);
                  
        header('Content-Type: image/png');
        echo $produto[0]['imagem_kit'];
        //echo "<a href='".$produto[0]['imagem_produto']."' data-lightbox='roadtrip'>";
        //echo "<img src='".$produto[0]['imagem_produto']."' border='0' style='width: 100px; height: 90px; padding: 5px;'></a>";
    }
   
}

new Kits();
?>
