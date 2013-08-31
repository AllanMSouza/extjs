<?php
session_start();
require_once 'DB/Base.php';

class ListaProdutosCliente extends Base {
   
    public function selectListas(){
//        var_dump($_SESSION);
        
        $db = $this->getDb();
        $stm = $db->prepare('select * from lista_cliente 
            where cliente_id_cliente = :id');
        $stm->bindValue(':id', $_SESSION['id_cliente']);
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
                    "data" => $result,
                   // "message" => $msg
                ));
    }
}

new ListaProdutosCliente();
?>
