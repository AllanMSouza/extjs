<?php
session_start();
require_once 'DB/Base.php';

class Relatorios extends Base {
    
    public function getPedidosSimples(){
        $db = $this->getDb();
        $stm = $db->prepare('select id_pedido, data, valor_pedido from pedido');
        $result = $stm->execute();
        
        echo json_encode(array(
             "data" => $stm->fetchAll(PDO::FETCH_ASSOC),
            "success" => $result
         ));
        
    }
   


}

new Relatorios();
?>
