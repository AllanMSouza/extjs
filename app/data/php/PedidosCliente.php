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
                   . ' values(now(), "Aberto", :valor_pedido, :entregar_retirar, :lista_cliente_id_lista_cliente)');
           $stm->bindValue(':entregar_retirar', $data->retirarEntregar);
           $stm->bindValue(':valor_pedido', $data->total);
           $stm->bindValue(':lista_cliente_id_lista_cliente', $id_lista);
           $result = $stm->execute();
           $id_pedido = $db->lastInsertId();
           
           $this->copiarProdutosPedido($id_pedido);
           $this->copiarKitPedido($id_pedido);
           
            echo json_encode(array(
             "success" => $result,
//             "data" => $result
         ));
           
       }
       
       else {
           $db = $this->getDb();
           $stm = $db->prepare('insert into pedido '
                   . '(data, status, valor_pedido, entregar_retirar, lista_cliente_id_lista_cliente) '
                   . ' values(now(), "Aberto", :valor_pedido, :entregar_retirar, :lista_cliente_id_lista_cliente)');
           $stm->bindValue(':entregar_retirar', $data->retirarEntregar);
           $stm->bindValue(':lista_cliente_id_lista_cliente', $id_lista);
           $stm->bindValue(':valor_pedido', $data->total);
           $result = $stm->execute();
           $stm->fetch(PDO::FETCH_ASSOC);
           
           $id_pedido = $db->lastInsertId();
           
           
           if($result){
                $result = $this->insertEntrega($data, $id_pedido);
                $this->copiarProdutosPedido($id_pedido);   
                $this->copiarKitPedido($id_pedido);
           }
           
           else
               return;
           
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
//        var_dump($data);
        $db = $this->getDb();
        $stm = $db->prepare('insert into entrega '
                . '(endereco, numero, bairro, complemento, cep, uf, pedido_id_pedido, cidade) '
                . 'values (:endereco, :numero, :bairro, :complemento, :cep, :uf, :pedido_id_pedido, :cidade)');
        $stm->bindValue(':endereco', $data->endereco);
        $stm->bindValue(':numero', $data->numero);
        $stm->bindValue(':bairro', $data->bairro);
        $stm->bindValue(':complemento', $data->complemento);
        $stm->bindValue(':cep', $data->cep);
        $stm->bindValue(':uf', $data->estado);
        $stm->bindValue(':cidade', $data->cidade);
        $stm->bindValue(':pedido_id_pedido', $id_pedido);
        $result = $stm->execute();
        $stm->fetch(PDO::FETCH_ASSOC);
        
        return $result;
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
    
    public function copiarProdutosPedido($id_pedido){
        $db = $this->getDb();
        
        $stm = $db->prepare('
                                select PELC.id_pedido, LCHLPM.quantidade, LCHLPM.lista_produtos_mercado_id_lista_produtos_mercado from 
                                (
                                    select * from pedido PE inner join lista_cliente LC on (PE.lista_cliente_id_lista_cliente = LC.id_lista_cliente)
                                ) as PELC inner join lista_cliente_has_lista_produtos_mercado LCHLPM on (PELC.id_lista_cliente = LCHLPM.lista_cliente_id_lista_cliente)

                            where PELC.id_pedido = :id_pedido
                            
                            ');
        $stm->bindValue(':id_pedido',$id_pedido);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i = 0; $i < count($result); $i++){
            $this->insertProdutoPedidoHasListaProdutosMercado($result[$i]['id_pedido'], 
                    $result[$i]['lista_produtos_mercado_id_lista_produtos_mercado'], 
                    $result[$i]['quantidade']);
        }
        
        
    }
    
    public function copiarKitPedido($id_pedido){
        $db = $this->getDb();
        
        $stm = $db->prepare('
            select PELC.id_pedido, LCHK.kits_id_kit, LCHK.quantidade from 
            (
                select * from pedido PE inner join lista_cliente LC on (PE.lista_cliente_id_lista_cliente = LC.id_lista_cliente)
            ) as PELC inner join lista_cliente_has_kits LCHK on (LCHK.lista_cliente_id_lista_cliente = PELC.id_lista_cliente)

            where PELC.id_pedido = :id_pedido');
        
        $stm->bindValue(':id_pedido',$id_pedido);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i = 0; $i < count($result); $i++){
            $this->insertKitsPedidosHasKits($result[$i]['id_pedido'], 
                    $result[$i]['kits_id_kit'], 
                    $result[$i]['quantidade']);
            
            $this->getProdutosKit($result[$i]['kits_id_kit'], (int) $result[$i]['quantidade']);
        }
        
        
    }
    
    public function insertKitsPedidosHasKits($id_pedido, $id_kit, $quantidade){
        $db = $this->getDb();
        
        $stm = $db->prepare('insert into pedido_has_kits 
            (pedido_id_pedido, kits_id_kit, quantidade) 
            values (:pedido_id_pedido, :kits_id_kit, :quantidade)');
        $stm->bindValue(':pedido_id_pedido', $id_pedido);
        $stm->bindValue(':kits_id_kit', $id_kit);
        $stm->bindValue(':quantidade', $quantidade);
        
        $stm->execute();
    }
    
    public function getProdutosKit($id_kit, $quantidade_kit){
        $db = $this->getDb();
        
        $stm = $db->prepare('select KHLPM.kits_id_kit, KHLPM.quantidade, LPM.id_lista_produtos_mercado 
            from kits_has_lista_produtos_mercado KHLPM inner join lista_produtos_mercado LPM 
            on (KHLPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado)

            where KHLPM.kits_id_kit = :id_kit');
        $stm->bindValue(':id_kit', $id_kit);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i = 0; $i < count($result); $i++){
            $this->baixaProdutosEstoque($result[$i]['id_lista_produtos_mercado'], $result[$i]['quantidade'] * (int) $quantidade_kit);
        }
    }
    
    public function insertProdutoPedidoHasListaProdutosMercado($id_pedido, $id_lista_produtos_mercado, $quantidade){
        
        $db = $this->getDb();
        
        $stm = $db->prepare('insert into pedido_has_lista_produtos_mercado 
            (pedido_id_pedido, lista_produtos_mercado_id_lista_produtos_mercado, quantidade) 
            values (:pedido_id_pedido, :lista_produtos_mercado_id_lista_produtos_mercado, :quantidade)');
        $stm->bindValue(':pedido_id_pedido', $id_pedido);
        $stm->bindValue(':lista_produtos_mercado_id_lista_produtos_mercado', $id_lista_produtos_mercado);
        $stm->bindValue(':quantidade', $quantidade);
        $stm->execute();
        
        $this->baixaProdutosEstoque($id_lista_produtos_mercado, (int) $quantidade);
    }
    
    public function baixaProdutosEstoque($id_lista_produtos_mercado, $quantidade){
        $quantidadeAtual = (int) $this->selectQuantidade($id_lista_produtos_mercado);
                
        $db = $this->getDb();
        $stm = $db->prepare('update lista_produtos_mercado set quantidade = :quantidade 
            where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue(':quantidade', $quantidadeAtual - $quantidade);
        $stm->bindValue(':id_lista_produtos_mercado', $id_lista_produtos_mercado);
        $stm->execute();
    }
    
    public function selectQuantidade($id_lista_produtos_mercado){
        $db = $this->getDb();
        
        $stm = $db->prepare('select quantidade from lista_produtos_mercado where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue(':id_lista_produtos_mercado', $id_lista_produtos_mercado);
        $stm->execute();
        
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
        return $result['quantidade'];
    }

}

new PedidosCliente();
?>
