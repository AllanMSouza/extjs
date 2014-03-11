<?php
session_start();
require_once 'DB/Base.php';

class Ofertas extends Base {
   
    public function select(){
        $db = $this->getDb();
        $stm = $db->prepare('select * from lista_produtos_mercado inner join produtos 
            on(produtos.id_produtos = lista_produtos_mercado.produtos_id_produtos)
            where valor_oferta > 0');
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
         echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }
    
    public function selectOfertaMercado(){
        $db = $this->getDb();
        $stm = $db->prepare('select * from lista_produtos_mercado inner join produtos 
            on(produtos.id_produtos = lista_produtos_mercado.produtos_id_produtos)
            where valor_oferta > 0');
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i=0; $i < count($result); $i++){
            $result[$i]['valor'] = $result[$i]['valor_oferta'];
            $result[$i]['valor1'] = number_format((double)$result[$i]['valor'],2,',','');
        }
        
         echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }
    
    public function insert(){
        $data = (object)$_POST;
//        var_dump($data);
        $db = $this->getDb();
        $stm = $db->prepare('update lista_produtos_mercado set 
            validade_oferta = :validade_oferta,
            status_oferta = :status_oferta,
            valor_oferta = :valor_oferta
            where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue('validade_oferta', implode(preg_match("~\/~", $data->validade_oferta) == 0 ? "/" : "-", 
                                         array_reverse(explode(preg_match("~\/~", $data->validade_oferta) == 0 ? "-" : "/", 
                                         $data->validade_oferta))));
        $stm->bindValue('status_oferta', $data->status_oferta);
        $stm->bindValue('valor_oferta', $data->valor_oferta);
        $stm->bindValue('id_lista_produtos_mercado', $data->id_lista_produtos_mercado);
        $result = $stm->execute();
        
        echo json_encode(array(
             "success" => $result,             
         ));
    }
    public function destruir(){
        $id = $_GET['id_lista_produtos_mercado'];
//        var_dump($data);
        $db = $this->getDb();
        $stm = $db->prepare('update lista_produtos_mercado set 
            validade_oferta = :validade_oferta,
            status_oferta = :status_oferta,
            valor_oferta = :valor_oferta
            where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue('validade_oferta', 0);
        $stm->bindValue('status_oferta', 0);
        $stm->bindValue('valor_oferta', 0);
        $stm->bindValue('id_lista_produtos_mercado', $id);
        $result = $stm->execute();
        
        echo json_encode(array(
             "success" => $result,             
         ));
    }

}

new Ofertas();
?>
