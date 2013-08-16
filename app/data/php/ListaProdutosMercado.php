<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class ListaProdutosMercado extends Base {
    
    public function insert(){
         $data = json_decode($_POST['data']);
         $id_mercado = $this->getIdMercado();
//         var_dump($data);
         
         $validade = $data->validade;
         $fabricacao =$data->fabricacao;
         
//         var_dump($fabricacao, $validade);
         $db = $this->getDb();
         $stm = $db->prepare('insert into lista_produtos_mercado 
             (produtos_id_produtos, mercado_id_mercado, valor, quantidade, validade, fabricacao)
             values (:produtos_id_produtos, :mercado_id_mercado, :valor, :quantidade, :validade, :fabricacao)');
         $stm->bindValue(':produtos_id_produtos', $data->id_produtos);
         $stm->bindValue(':mercado_id_mercado', $id_mercado);
         $stm->bindValue(':valor', $data->valor);
         $stm->bindValue(':quantidade', $data->quantidade);
         $stm->bindValue(':validade', $validade);
         $stm->bindValue(':fabricacao', $fabricacao);
         $success = $stm->execute();
         
         $id = $db->lastInsertId();        
         
         $stm = $db->prepare('update lista_produtos_mercado set 
             fabricacao = :fabricacao,
             validade = :validade
             where id_lista_produtos_mercado = :id');
         $stm->bindValue(':fabricacao', $fabricacao);
         $stm->bindValue(':validade', $validade);
         $stm->bindValue(':id', $id);
         $success = $stm->execute();         
         
         $msg = $success ? 'Produto inserido com Sucesso' : 'Erro ao inserir Produto.' ;
         //echo $validade . "----- ".$fabricacao;
         echo json_encode(array(
             "success" => $success,
             "msg" => $msg,
//             "data" => $data
         ));
         
    }
            
   public function update(){
    
   }
   
   public function select(){
      $id_mercado = $this->getIdMercado();
      $db = $this->getDb();
      $stm = $db->prepare('select * from lista_produtos_mercado LM
          inner join produtos P on(P.id_produtos = LM.produtos_id_produtos)
          where LM.mercado_id_mercado = :id_mercado');
      
      $stm->bindValue(':id_mercado', $id_mercado);
      $success = $stm->execute();
      
      $result = $stm->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode(array(
             "success" => $success,
             "data" => $result
         ));
   }
   
   public function destroy(){
   
       
   }
   
   public function getIdMercado(){
       $db = $this->getDb();
       $stm =$db->prepare('select id_mercado from mercado 
           where usuarios_id_usuarios = :id_usuarios');
       $stm->bindValue(':id_usuarios', $_SESSION['id_usuarios']);
       $stm->execute();
        
       $id_mercado = $stm->fetch( PDO::FETCH_ASSOC);
       return $id_mercado['id_mercado'];
   }

}

new ListaProdutosMercado();
?>
