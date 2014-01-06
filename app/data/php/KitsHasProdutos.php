<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class KitsHasProdutos extends Base {
    
       public function insert(){
          $data = json_decode($_POST['data']);
          
          if($data->id_produtos != NULL){
             return;
          }
          else{
//            var_dump($data);
//          $idKit = $_GET['id_kit'];
          
          $db = $this->getDb();
          $stm = $db->prepare('insert into kits_has_lista_produtos_mercado 
              (kits_id_kit, lista_produtos_mercado_id_lista_produtos_mercado, quantidade) 
              values (:idKit, :idLista, :quantidade)');
          $stm->bindValue(':idKit', $data->kits_id_kit);
          $stm->bindValue(':idLista', $data->lista_produtos_mercado_id_lista_produtos_mercado);
          $stm->bindValue(':quantidade', $data->quantidade);
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
       }
       
       public function select(){
           $id_kit = $_GET['id_kit'];
           
           $db= $this->getDb();
                    
           $stm = $db->prepare('select LM.*, P.*, KHLPM.*, (select K.desconto from kits K where K.id_kit = :id_kit1) as desconto 
                                from lista_produtos_mercado LM inner join 
                                kits_has_lista_produtos_mercado KHLPM on 
                                (LM.id_lista_produtos_mercado = KHLPM.lista_produtos_mercado_id_lista_produtos_mercado) 
                                inner join produtos P on (LM.produtos_id_produtos = P.id_produtos) 
                                where LM.mercado_id_mercado = :id_mercado and KHLPM.kits_id_kit = :id_kit2');
           $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
           $stm->bindValue(':id_kit1', $id_kit);
           $stm->bindValue(':id_kit2', $id_kit);
            $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i =0; $i < count($result); $i++){
            $result[$i]['total_itens'] = $result[$i]['valor'] * $result[$i]['quantidade'];
//            $result[$i]['por'] += $result[$i]['total'] * (int) (100 - $result[$i]['desconto'])/100;
            $result[$i]['valor'] = number_format ((double)$result[$i]['valor'],2,',','');
//            $total += $result[$i]['total_itens'];
//            $result[$i]['total'] = number_format ((double)$result[$i]['total'],2,',','');
            
        }
//        $por = $total * (int) (100 - $result[0]['desconto'])/100;
        echo json_encode(array(
 
              "data" => $result,
//                "por" => $por,
//                "total" => $total
          ));
       }
       
       public function destroy(){
           $data = json_decode($_POST['data']);
           
           $db = $this->getDb();
           $stm = $db->prepare('delete from kits_has_lista_produtos_mercado 
               where id_kits_has_lista_produtos_mercado = :id');
           $stm->bindValue(':id', $data->id_kits_has_lista_produtos_mercado);
           
           $result = $stm->execute();
          
          if($result == true)
            $msg = "Registro excluido com sucesso!";
          else
            $msg = "Erro ao Excluir registro!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
       }
       
       public function update(){
           
       }
       
       public function down(){
           $idItemKit = $_GET['id'];
           $qnt = $_GET['quantidade'];
           
           $db = $this->getDb();
           $stm = $db->prepare('update kits_has_lista_produtos_mercado 
               set quantidade = :quantidade 
               where id_kits_has_lista_produtos_mercado = :id');
           $stm->bindValue(':quantidade', $qnt);
           $stm->bindValue(':id', $idItemKit);
           
           $result = $stm->execute();
          
          if($result == true)
            $msg = "Quantidade alterada com sucesso!";
          else
            $msg = "Erro ao alterar quantidade!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
           
       }
       
        public function up(){
           $idItemKit = $_GET['id'];
           $qnt = $_GET['quantidade'];
           
           $db = $this->getDb();
           $stm = $db->prepare('update kits_has_lista_produtos_mercado 
               set quantidade = :quantidade 
               where id_kits_has_lista_produtos_mercado = :id');
           $stm->bindValue(':quantidade', $qnt);
           $stm->bindValue(':id', $idItemKit);
           
           $result = $stm->execute();
          
          if($result == true)
            $msg = "Quantidade alterada com sucesso!";
          else
            $msg = "Erro ao alterar quantidade!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
           
       }
               
       
   
}

new KitsHasProdutos();
?>
