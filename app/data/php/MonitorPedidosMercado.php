<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class MonitorPedidosMercado extends Base {
    
    public function insert(){
    
    }
    
    public function select(){
        $db = $this->getDb();
        $stm = $db->prepare('select * from pedido P inner join lista_cliente LC 
                            on (P.lista_cliente_id_lista_cliente = LC.id_lista_cliente) inner join
                            cliente C on (C.id_cliente = LC.cliente_id_cliente) inner join usuarios U
                            on (U.id_usuarios = C.usuarios_id_usuarios)');
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i = 0; $i < count($result); $i++){
            
            if($result[$i]['entregar_retirar'] == '2'){
                $entrega = $this->getEntrega($result[$i]['id_pedido']);
//                var_dump($entrega);
                $result[$i]['endereco'] = $entrega[0]['endereco'];
                $result[$i]['complemento'] = $entrega[0]['complemento'];
                $result[$i]['bairro'] = $entrega[0]['bairro'];
                $result[$i]['numero'] = $entrega[0]['numero'];
                $result[$i]['cep'] = $entrega[0]['cep'];
                $result[$i]['estado'] = $entrega[0]['uf'];
                $result[$i]['cidade'] = $entrega[0]['cidade'];
            }
        }
        
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
        
    }
    
    public function getEntrega($id_pedido){
        $db = $this->getDb();
        $stm = $db->prepare('select * from entrega where pedido_id_pedido = :id_pedido');
        $stm->bindValue(':id_pedido', $id_pedido);
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        return $result;
                
    }
    
    public function filtrarPor(){
        $status = $_GET['status'];
        $db = $this->getDb();
        $stm = $db->prepare('select * from pedido P inner join lista_cliente LC 
                            on (P.lista_cliente_id_lista_cliente = LC.id_lista_cliente) inner join
                            cliente C on (C.id_cliente = LC.cliente_id_cliente) inner join usuarios U
                            on (U.id_usuarios = C.usuarios_id_usuarios) where P.status = :status');
        $stm->bindValue('status', $status);
        $stm->execute();
         
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
        
    }
    
    public function destroy(){
     
        
    }
    
    public function changeStatus(){
        $id_pedido = $_GET['id_pedido'];
        $status = $_GET['status'];
        
        $db = $this->getDb();
        $stm = $db->prepare('update pedido set status = :status '
                . 'where id_pedido = :id_pedido');
        $stm->bindValue(':status', $status);
        $stm->bindValue(':id_pedido', $id_pedido);
        $result = $stm->execute();
        
         echo json_encode(array(
           "success" => $result,
//           "data" => $result
      ));
        
        
    }

}

new MonitorPedidosMercado();
?>
