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
       
       public function destroy(){
           
       }
       
       public function update(){
           
       }
   
}

new Kits();
?>
