<?php
session_start();
require_once 'DB/Base.php';

class ListaProdutosCliente extends Base {
    
    public function select(){
        $nomeLista = $_GET['nome_lista'];
        $idLista = $this->getIdListaProdutos($nomeLista);
        
        $db = $this->getDb();
        $stm = $db->prepare('select * from 
            lista_cliente_has_lista_produtos_mercado  LCPM inner join lista_produtos_mercado LPM
            on (LCPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado)
            inner join produtos P
            on (LPM.produtos_id_produtos = P.id_produtos) 
            where LCPM.lista_cliente_id_lista_cliente = :id_lista_cliente');
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
//            var_dump($idListaCliente);
            $db = $this->getDb();
            $stm = $db->prepare('insert into lista_cliente_has_lista_produtos_mercado 
                (lista_cliente_id_lista_cliente, lista_produtos_mercado_id_lista_produtos_mercado, quantidade) 
                values (:lista_cliente_id_lista_cliente, :lista_produtos_mercado_id_lista_produtos_mercado, :quantidade)');
            $stm->bindValue(':lista_cliente_id_lista_cliente', $idListaCliente);
            $stm->bindValue(':lista_produtos_mercado_id_lista_produtos_mercado', $data->id_lista_produtos_mercado);
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
        
        if($data->isNoBanco > 0){
            $result = $this->update($data);
            $msg = $result ? 'Registro alterado com sucesso': 'Erro ao alterar registro';
            
        }
        else{
            $db = $this->getDb();
            $stm = $db->prepare('insert into lista_cliente (nome_lista, cliente_id_cliente) 
                values (:nome_lista, :id_cliente)');
            $stm->bindValue(':nome_lista', $data->nome_lista);
            $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
            $result = $stm->execute();

            $msg = $result ? 'Registro Inserido com Sucesso' : 'Erro ao inserir Registro.' ;
        }
        echo json_encode(array(
                    "data" => $result,
                    "message" => $msg
                ));
    }
    
    public function update($data){
        $id_lista = $this->getIdListaProdutos($data->last_name);
        $db = $this->getDb();
        $stm = $db->prepare('update lista_cliente set nome_lista = :nome_lista 
            where id_lista_cliente = :id_lista');
        $stm->bindValue(':nome_lista', $data->nome_lista);
        $stm->bindValue(':id_lista', $id_lista);
        $result = $stm->execute();
        
        return $result;
    }
}

new ListaProdutosCliente();
?>
