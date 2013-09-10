<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Panfletos extends Base {
    
   public function insert(){
     $data = json_decode($_POST['data']);
     $idMercado = $this->getIdMercado($data->nome_mercado);
     
     $db = $this->getDb();
     $stm = $db->prepare('insert into panfleto 
         (titulo, descricao, data_inicio, data_fim, mercado_id_mercado) 
         values (:titulo, :descricao, :data_inicio, :data_fim, :mercado_id_mercado)');
     $stm->bindValue(':titulo', $data->titulo);
     $stm->bindValue(':descricao', $data->descricao);
     $stm->bindValue(':data_inicio', $data->data_inicio);
     $stm->bindValue(':data_fim', $data->data_fim);
     $stm->bindValue(':mercado_id_mercado', $idMercado);
     $result = $stm->execute();
     
//     $newdata = $data;
//     $newdata->id_panfleto = $db->lastInsertId();
     
     $msg = $result ? 'Registro inserido com sucesso' : 'Erro ao inserir registro';
      echo json_encode(array(
             "success" => $result,
             "msg" => $msg,
             //"data" => $newdata
         ));
   }
   
   public function select(){
      $data=  (object)$_POST;
      if($data->node == NaN){
          $db = $this->getDb();
        $stm = $db->prepare('select * from panfleto 
            where mercado_id_mercado = :id_mercado');

        $stm->bindValue(':id_mercado', 1);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
 //             "success" => $result,
 //             "msg" => $msg,
              "data" => $result
          ));
      }
      else {
          $db = $this->getDb();
                $stm = $db->prepare('select PP.* from panfleto P inner join pagina_panfleto PP
                    on(P.id_panfleto = PP.panfleto_id_panfleto)
                    where P.id_panfleto = :id_panfleto
                    ');

                $stm->bindValue(':id_panfleto', $data->node);
                $stm->execute();
                $result = $stm->fetchAll(PDO::FETCH_ASSOC);
                for($i=0; $i<count($result); $i++){
                    $result[$i]['titulo'] = 'Página Nº: ' . $result[$i]['numero_pagina'];
                }
                echo json_encode(array(
         //             "success" => $result,
         //             "msg" => $msg,
                      "data" => $result
                  ));
          
      }
       
   }
   
   public function update(){
       
   }
   public function destroy(){
       
   }
   
   private function getIdMercado($nomeMercado){
       $db = $this->getDb();
       $stm = $db->prepare('select M.id_mercado from usuarios U inner join mercado M 
           on (U.id_usuarios = M.usuarios_id_usuarios) 
           where U.nome = :nome_mercado');
       $stm->bindValue(':nome_mercado', $nomeMercado);
       $stm->execute();
       
       $result = $stm->fetch(PDO::FETCH_ASSOC);
       
       return $result['id_mercado'];
   }
     
}

new Panfletos();
?>
