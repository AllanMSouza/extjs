<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class PagnaPanfletoHasProdutos extends Base {
   
    public function select(){
        $idPagina = $_GET['id_pagina_panfleto'];
        $db = $this->getDb();
        $stm = $db->prepare('select *, P.*
            from pagina_panfleto PP inner join pagina_panfleto_has_produtos PFHP 
            on (PP.id_pagina_panfleto = PFHP.pagina_panfleto_id_pagina_panfleto) 
             inner join produtos P on(P.id_produtos = PFHP.produtos_id_produtos) 
             where PP.id_pagina_panfleto = :id');
        $stm->bindValue(':id', $idPagina);
//        $stm->execute();
        $r = $stm->execute();

        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        for($i =0; $i < count($result); $i++)
            $result[$i]['valor'] = number_format ((double)$result[$i]['valor'],2,',','');

        echo json_encode(array(
             "success" => $r,
             "data" => $result
        ));  
    }
    
    public function insert(){
        $data = json_decode($_POST['data']);
       // var_dump(floatval($data->valor));
//        return;
        if($data->valor == NULL){
            return;
        }
        else {
           $db = $this->getDb();
           $stm = $db->prepare('insert into pagina_panfleto_has_produtos 
            (pagina_panfleto_id_pagina_panfleto, produtos_id_produtos, valor) 
            values (:pagina_panfleto_id_pagina_panfleto, :produtos_id_produtos, :valor)');
            $stm->bindValue(':pagina_panfleto_id_pagina_panfleto', $data->pagina_panfleto_id_pagina_panfleto);
            $stm->bindValue(':produtos_id_produtos', $data->produtos_id_produtos);
            $stm->bindValue(':valor', $data->valor);
            $result = $stm->execute();
            $msg = $result ? 'Registro inserido com sucesso' : 'Erro ao inserir registro';
            
            echo json_encode(array(
                   "success" => $result,
                   "msg" => $msg,
                   //"data" => $newdata
               ));
            
        }


    }
    
    public function update(){
        
    }
    
    public function destroy(){
        $data = json_decode($_POST['data']);
        $db = $this->getDb();
        $stm = $db->prepare('delete from pagina_panfleto_has_produtos 
            where id_pagina_panfleto_has_produtos = :id');
        $stm->bindValue(':id', $data->id_pagina_panfleto_has_produtos);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           //"data" => $data
      )); 
    }
}

new PagnaPanfletoHasProdutos();
?>
