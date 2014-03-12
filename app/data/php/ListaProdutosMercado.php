<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class ListaProdutosMercado extends Base {
    
    public function insert(){
         $data = json_decode($_POST['data']);
         //$id_mercado = $this->getIdMercado();
//         var_dump($data);
          if($data->valor == NULL){
            return;
        }
        else{
         $validade = $data->validade;
         $fabricacao =$data->fabricacao;
         
//         var_dump($fabricacao, $validade);
         $db = $this->getDb();
         $stm = $db->prepare('insert into lista_produtos_mercado 
             (produtos_id_produtos, mercado_id_mercado, valor, quantidade, validade, fabricacao, vermelho, verde, laranja)
             values (:produtos_id_produtos, :mercado_id_mercado, :valor, :quantidade, :validade, :fabricacao, :vermelho, :verde, :laranja)');
         $stm->bindValue(':produtos_id_produtos', $data->id_produtos);
         $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
         $stm->bindValue(':valor', $data->valor);
         $stm->bindValue(':quantidade', $data->quantidade);
         $stm->bindValue(':validade', $validade);
         $stm->bindValue(':fabricacao', $fabricacao);
         $stm->bindValue(':vermelho', $data->vermelho);
         $stm->bindValue(':verde', $data->verde);
         $stm->bindValue(':laranja', $data->laranja);
         $success = $stm->execute();
         
         $msg = $success ? 'Produto inserido com Sucesso' : 'Erro ao inserir Produto.' ;
         //echo $validade . "----- ".$fabricacao;
         echo json_encode(array(
             "success" => $success,
             "msg" => $msg,
//             "data" => $data
         ));
        }  
    }
            
   public function update(){
       $data = json_decode($_POST['data']);
       
       $db = $this->getDb();
       $stm = $db->prepare('update lista_produtos_mercado set
           valor = :valor,
           quantidade = :quantidade,
           validade = :validade,
           fabricacao = :fabricacao,
           verde = :verde,
           vermelho = :vermelho,
           laranja = :laranja
           where id_lista_produtos_mercado = :id_lista_produtos_mercado');
       $stm->bindValue(':valor', $data->valor);
       $stm->bindValue(':quantidade', $data->quantidade);
       $stm->bindValue(':validade', $data->validade);
       $stm->bindValue(':fabricacao', $data->fabricacao);
       $stm->bindValue(':verde', $data->verde);
       $stm->bindValue(':vermelho', $data->vermelho);
       $stm->bindValue(':laranja', $data->laranja);
       $stm->bindValue(':id_lista_produtos_mercado', $data->id_lista_produtos_mercado);
       
       $success = $stm->execute();
         
         $msg = $success ? 'Produto atualizado com Sucesso' : 'Erro ao atualizar Produto.' ;
         
         echo json_encode(array(
             "success" => $success,
             "msg" => $msg,
             "data" => $data
         ));
       
   }
   
   public function select(){
      $id_mercado = $this->getIdMercado();
      $db = $this->getDb();
      $stm = $db->prepare('select * from lista_produtos_mercado LM
          inner join produtos P on(P.id_produtos = LM.produtos_id_produtos)
          where LM.mercado_id_mercado = :id_mercado');
      
      $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
      $success = $stm->execute();
      
      $result = $stm->fetchAll(PDO::FETCH_ASSOC);
      for($i=0; $i<count($result); $i++){
            
            $result[$i]['valor1'] = number_format((double)$result[$i]['valor'],2,',','');
        }
      echo json_encode(array(
             "success" => $success,
             "data" => $result
         ));
   }
   
   public function destroy(){
        $data = json_decode($_POST['data']);
        
        $db= $this->getDb();
        $stm = $db->prepare('delete from lista_produtos_mercado 
            where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue(':id_lista_produtos_mercado', $data->id_lista_produtos_mercado);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        
        echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           //"data" => $data
      )); 
       
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
