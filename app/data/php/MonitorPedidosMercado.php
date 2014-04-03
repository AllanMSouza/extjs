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
        
        if($status == 'Todos'){
            $db = $this->getDb();
            $stm = $db->prepare('select * from pedido P inner join lista_cliente LC 
                                on (P.lista_cliente_id_lista_cliente = LC.id_lista_cliente) inner join
                                cliente C on (C.id_cliente = LC.cliente_id_cliente) inner join usuarios U
                                on (U.id_usuarios = C.usuarios_id_usuarios)');
            $stm->execute();

            $result = $stm->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(array(
               "success" => true,
               "data" => $result
                    ));
        }
        else { 
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
        
        if($status == 'Cancelado'){
            $this->getProdutosPedido($id_pedido);
            $this->getKitsPedido($id_pedido);
        }
        
         echo json_encode(array(
           "success" => $result,
//           "data" => $result
      ));
        
        
    }

      public function getProdutosPedido($id_pedido){
        $db = $this->getDb();
        
        $stm = $db->prepare('select PELC.id_pedido, LCHLPM.quantidade, LCHLPM.lista_produtos_mercado_id_lista_produtos_mercado from 
                                (
                                    select * from pedido PE inner join lista_cliente LC on (PE.lista_cliente_id_lista_cliente = LC.id_lista_cliente)
                                ) as PELC inner join lista_cliente_has_lista_produtos_mercado LCHLPM on (PELC.id_lista_cliente = LCHLPM.lista_cliente_id_lista_cliente)

                            where PELC.id_pedido = :id_pedido
                            
                            ');
        $stm->bindValue(':id_pedido',$id_pedido);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);  
        
         for($i = 0; $i < count($result); $i++){
            $this->estornoPedidosCancelados($result[$i]['lista_produtos_mercado_id_lista_produtos_mercado'], $result[$i]['quantidade']);
        }
        
    }
    
    public function getKitsPedido($id_pedido){
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
                    
            $this->getProdutosKit($result[$i]['kits_id_kit'], (int) $result[$i]['quantidade']);
        }
             
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
            $this->estornoPedidosCancelados($result[$i]['id_lista_produtos_mercado'], $result[$i]['quantidade'] * (int) $quantidade_kit);
        }
    }
    
     public function estornoPedidosCancelados($id_lista_produtos_mercado, $quantidade){
        $quantidadeAtual = (int) $this->selectQuantidade($id_lista_produtos_mercado);
                
        $db = $this->getDb();
        $stm = $db->prepare('update lista_produtos_mercado set quantidade = :quantidade 
            where id_lista_produtos_mercado = :id_lista_produtos_mercado');
        $stm->bindValue(':quantidade', $quantidadeAtual + $quantidade);
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
    
    public function getRecebidoReceber(){
        $db = $this->getDb();
        $stm = $db->prepare('select "Recebido" , sum(valor_pedido) as valor from pedido where status = "Finalizado" union 
                            select "A Receber", sum(valor_pedido) as valor from pedido where status = "Separando em estoque" 
                            or status = "Aberto" or status = "Aguardando retirada" or status = "Em transporte"');
        
//                    var_dump($stm);
        $stm->execute();
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
        for($i=0; $i < count($result); $i++){
            $result[$i]['valor'] = number_format((double)$result[$i]['valor'],2,',','');
        }
        
        $result[0]['img'] = 'recebido.jpg';
        $result[1]['img'] = 'areceber.png';
        
        echo json_encode(array(
//           "success" => $result,
           "data" => $result
      ));
        
        
    }
}

new MonitorPedidosMercado();
?>
