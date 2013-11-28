<?php
session_start();
require_once 'DB/Base.php';

class PedidosCliente extends Base {
    
    public function insert(){
        $data = (object) $_POST;
        $id_lista = $this->getIdListaCliente($data->nome_lista);
//        var_dump($id_lista);
       if($data->retirarEntregar == 1){
           
           $db = $this->getDb();
           $stm = $db->prepare('insert into pedido '
                   . '(data, status, valor_pedido, entregar_retirar, lista_cliente_id_lista_cliente) '
                   . ' values(curdate(), "Aberto", :valor_pedido, :entregar_retirar, :lista_cliente_id_lista_cliente)');
           $stm->bindValue(':entregar_retirar', $data->retirarEntregar);
           $stm->bindValue(':valor_pedido', $data->total);
           $stm->bindValue(':lista_cliente_id_lista_cliente', $id_lista);
           $result = $stm->execute();
//           $stm->fetch(PDO::FETCH_ASSOC);
           
            echo json_encode(array(
             "success" => $result,
//             "data" => $result
         ));
           
       }
       
       else {
           $db = $this->getDb();
           $stm = $db->prepare('insert into pedido '
                   . '(data, status, valor_pedido, entregar_retirar, lista_cliente_id_lista_cliente) '
                   . ' values(curdate(), aberto, :entregar_retirar, :lista_cliente_id_lista_cliente)');
           $stm->bindValue(':entregar_retirar', $data->retirarEntregar);
           $stm->bindValue(':lista_cliente_id_lista_cliente', $id_lista);
           $stm->execute();
           $result = $stm->fetch(PDO::FETCH_ASSOC);
           
           $id_pedido = $db->lastInsertId();
           
           $this->insertEntrega($data, $id_pedido);
           
           echo json_encode(array(
             "success" => $result,
//             "data" => $result
         ));
           
       }
    }
    
    public function getIdListaCliente($nome_lista){
        
      $db = $this->getDb();
        $stm = $db->prepare('select id_lista_cliente from lista_cliente 
            where nome_lista = :nome_lista and cliente_id_cliente = :id_cliente');
        $stm->bindValue(':nome_lista', $nome_lista);
        $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
        $stm->execute();
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
        return $result['id_lista_cliente'];
    }
    
    public function insertEntrega($data, $id_pedido){
        $db = $this->getDb();
        $stm = $db->prepare('insert into entrega '
                . '(endereco, numero, bairro, complemento, cep, uf, pedido_id_pedido) '
                . 'values (:endereco, :numero, :bairro, :complemento, :cep, :uf, :pedido_id_pedido)');
        $stm->bindValue(':endereco', $data->endereco);
        $stm->bindValue(':numero', $data->numero);
        $stm->bindValue(':bairro', $data->bairro);
        $stm->bindValue(':complemento', $data->complemento);
        $stm->bindValue(':cep', $data->cep);
        $stm->bindValue(':uf', $data->uf);
        $stm->bindValue(':pedido_id_pedido', $id_pedido);
        $stm->execute();
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
        return;
    }
    
    public function select(){
//        echo $_SESSION['id_cliente'];
        $db = $this->getDb();
        $stm = $db->prepare('select * from lista_cliente LC inner join pedido P
                on (LC.id_lista_cliente = P.lista_cliente_id_lista_cliente) 
                where LC.cliente_id_cliente = :id_cliente');
        $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
        $result = $stm->execute();
        
        $data = $stm->fetchAll(PDO::FETCH_ASSOC);
        
          echo json_encode(array(
             "success" => $result,
             "data" => $data
         ));
        
    }

}

new PedidosCliente();
?>
