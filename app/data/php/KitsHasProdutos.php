<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class KitsHasProdutos extends Base {
    
       public function insert(){
          $data = json_decode($_POST['data']);
          $idKit = $_GET['id_kit'];
          
          $db = $this->getDb();
          $stm = $db->prepare('insert into kits_has_lista_produtos_mercado 
              (kits_id_kit, lista_produtos_mercado_id_lista_produtos_mercado) 
              values (:idKit, :idLista)');
          $stm->bindValue(':idKit', $idKit);
          $stm->bindValue(':idLista', $data->id_lista_produtos_mercado);
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
           $db= $this->getDb();
           
           $id_kit = $_GET['id_kit'];
           
           $stm = $db->prepare('select LM.*, P.* 
                                from lista_produtos_mercado LM inner join
                                kits_has_lista_produtos_mercado KHLPM on 
                                (LM.id_lista_produtos_mercado = KHLPM.lista_produtos_mercado_id_lista_produtos_mercado) 
                                inner join produtos P on (LM.produtos_id_produtos = P.id_produtos)
                                where LM.mercado_id_mercado = :id_mercado and KHLPM.kits_id_kit = :id_kit');
           $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
           $stm->bindValue(':id_kit', $id_kit);
            $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);

        
        echo json_encode(array(
 
              "data" => $result
          ));
       }
       
       public function destroy(){
           
       }
       
       public function update(){
           
       }
   
}

new KitsHasProdutos();
?>
