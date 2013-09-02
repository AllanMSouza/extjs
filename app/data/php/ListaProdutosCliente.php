<?php
session_start();
require_once 'DB/Base.php';

class ListaProdutosCliente extends Base {
    
    public function select(){
        $nomeLista = $_GET['nome_lista'];
        $idLista = $this->getIdListaProdutos($nomeLista);
        
        $db = $this->getDb();
        $stm = $db->prepare('select * from 
            lista_cliente_has_produtos inner join produtos 
            on (lista_cliente_has_produtos.produtos_id_produtos = produtos.id_produtos) 
            where lista_cliente_has_produtos.lista_cliente_id_lista_cliente = :id_lista_cliente');
        $stm->bindValue(':id_lista_cliente', $idLista);
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
                    "data" => $result,
                   // "message" => $msg
                ));
    }
   
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
    
    public function insert(){
        $data = json_decode($_POST['data']);
        $nomeLista = $_GET['nome_lista'];
        $idListaCliente = $this->getIdListaProdutos($nomeLista);
        
        $db = $this->getDb();
        $stm = $db->prepare('insert into lista_cliente_has_produtos 
            (lista_cliente_id_lista_cliente, produtos_id_produtos, quantidade) 
            values (:lista_cliente_id_lista_cliente, :produtos_id_produtos, :quantidade)');
        $stm->bindValue(':lista_cliente_id_lista_cliente', $idListaCliente);
        $stm->bindValue(':produtos_id_produtos', $data->id_produtos);
        $stm->bindValue(':quantidade', 1);
        $result = $stm->execute();
        
        $msg = $result ? 'Registro Inserido com Sucesso' : 'Erro ao inserir Registro.' ;
        
        echo json_encode(array(
                    "data" => $result,
                    "message" => $msg
                ));
        
    }
    
    private function getIdListaProdutos($nome_lista){
        $db = $this->getDb();
        $stm = $db->prepare('select id_lista_cliente from lista_cliente 
            where nome_lista = :nome_lista and cliente_id_cliente = :id_cliente');
        $stm->bindValue(':nome_lista', $nome_lista);
        $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
        $stm->execute();
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
        return $result['id_lista_cliente'];
    }
    
    public function insertNovaLista(){
        $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        $stm = $db->prepare('insert into lista_cliente (nome_lista, cliente_id_cliente) 
            values (:nome_lista, :id_cliente)');
        $stm->bindValue(':nome_lista', $data->nome_lista);
        $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
        $result = $stm->execute();
        
        $msg = $result ? 'Registro Inserido com Sucesso' : 'Erro ao inserir Registro.' ;
        
        echo json_encode(array(
                    "data" => $result,
                    "message" => $msg
                ));
    }
}

new ListaProdutosCliente();
?>
