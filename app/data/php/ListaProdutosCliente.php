<?php
session_start();
require_once 'DB/Base.php';

class ListaProdutosCliente extends Base {
    
    public function select(){
        $nomeLista = $_GET['nome_lista'];
        $id_cliente = $_GET['id_cliente'];
        $idLista = $this->getIdListaProdutos($nomeLista, $id_cliente);
        
        $db = $this->getDb();
        $stm = $db->prepare('select * , LCPM.quantidade as qtd from 
            lista_cliente_has_lista_produtos_mercado  LCPM inner join lista_produtos_mercado LPM
            on (LCPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado)
            inner join produtos P
            on (LPM.produtos_id_produtos = P.id_produtos) 
            where LCPM.lista_cliente_id_lista_cliente = :id_lista_cliente');
        $stm->bindValue(':id_lista_cliente', $idLista);
        $stm->execute();
                        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);

        for($x=0; $x < count($result); $x++){
            $result[$x]['tipo'] = 'Produto';
            $result[$x]['leaf'] = true;
             if($result[$x]['valor_oferta'] > 0)
                $result[$x]['valor'] = $result[$x]['valor_oferta'];
            $result[$x]['valor'] = (double) $result[$x]['valor'];
            $result[$x]['valor1'] = number_format ((double)$result[$x]['valor'],2,',','');
        }
        $k = count($result);
        $kits = $this->getIdKit($idLista);
        for($i =0; $i< count($kits); $i++, $k++){
             $kits[$i]['valor'] = $this->getTotalKit($kits[$i]['id_kit']);
             $kits[$i]['kit'] = true;
             $kits[$i]['leaf'] = true;
             $kits[$i]['tipo'] = 'Kit';
             $kits[$i]['valor1'] = number_format ((double)$kits[$i]['valor'],2,',','');
             $result[$k] = $kits[$i];
        }
        
        echo json_encode(array(
          "data" => $result           
         ));
    }
    
    public function getIdKit($id_lista_cliente){
        $db = $this->getDb();
        $stm = $db->prepare('select K.*, LCK.*, K.id_kit as codigo_produto, LCK.quantidade as qtd, K.titulo as nome_produto from lista_cliente_has_kits LCK inner join kits K 
            on (K.id_kit = LCK.kits_id_kit)
            where lista_cliente_id_lista_cliente = :id_lista');
        $stm->bindValue(':id_lista', $id_lista_cliente);
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    
    
    public function excluirLista(){
        
        $nome_lista = $_GET['nome_lista'];
//        $idLista = $this->getIdListaProdutos($nomeLista, $_SESSION['id_cliente']);
//        var_dump($_SESSION['id_cliente']);
        $db = $this->getDb();
        $stm = $db->prepare('update lista_cliente set ativo = 0 where nome_lista = :nome_lista and cliente_id_cliente = :id_cliente');
        $stm->bindValue(':nome_lista', $nome_lista);
        $stm->bindValue(':id_cliente', $_SESSION['id_cliente']);
        $result = $stm->execute();
        
        if($result)
            $msg = 'Lista excluida com sucesso!';
        else
           $msg = 'Erro ao excluir lista!';
        
        echo json_encode(array(
                    "success" => $result,
                    "message" => $msg
                ));
        
                
    }
   
    public function selectListas(){
//        var_dump($_SESSION);
        
        $db = $this->getDb();
        $stm = $db->prepare('select * from lista_cliente 
            where cliente_id_cliente = :id and ativo = 1');
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
    
     public function listaInsert(){
        $id_lista_produtos_mercado = $_GET['id_lista_produtos_mercado'];
        $nomeLista = $_GET['nome_lista'];
        
               
            $idListaCliente = $this->getIdListaProdutos($nomeLista);
//            var_dump($idListaCliente);
            $db = $this->getDb();
            $stm = $db->prepare('insert into lista_cliente_has_lista_produtos_mercado 
                (lista_cliente_id_lista_cliente, lista_produtos_mercado_id_lista_produtos_mercado, quantidade) 
                values (:lista_cliente_id_lista_cliente, :lista_produtos_mercado_id_lista_produtos_mercado, :quantidade)');
            $stm->bindValue(':lista_cliente_id_lista_cliente', $idListaCliente);
            $stm->bindValue(':lista_produtos_mercado_id_lista_produtos_mercado', $id_lista_produtos_mercado);
            $stm->bindValue(':quantidade', 1);
            $result = $stm->execute();

            $msg = $result ? 'Registro Inserido com Sucesso' : 'Erro ao inserir Registro.' ;
        
        echo json_encode(array(
                    "data" => $result,
                    "message" => $msg
                ));
        
    }
    
    public function insertKit(){
        if(isset($_GET['nome_lista']))
            $nome_lista = $_GET['nome_lista'];
        
        if(isset($_GET['id_kit']))
            $id_kit = $_GET['id_kit'];
        
        $id_lista = $this->getIdListaProdutos($nome_lista);
        var_dump($id_lista, $id_kit);
        $db = $this->getDb();
        $stm = $db->prepare('insert into lista_cliente_has_kits 
            (lista_cliente_id_lista_cliente, kits_id_kit, quantidade) 
            values (:id_lista, :id_kit, :quantidade)');
        $stm->bindValue(':id_lista', $id_lista);
        $stm->bindValue(':id_kit', $id_kit);
        $stm->bindValue(':quantidade', 1);
        $result = $stm->execute();

        $msg = $result ? 'Registro Inserido com Sucesso' : 'Erro ao inserir Registro.' ;
        
        echo json_encode(array(
                "success" => $result,
                   "message" => $msg
                ));
        
        
    }
    
    private function getIdListaProdutos($nome_lista, $id_cliente){
        $db = $this->getDb();
        $stm = $db->prepare('select id_lista_cliente from lista_cliente 
            where nome_lista = :nome_lista and cliente_id_cliente = :id_cliente');
        $stm->bindValue(':nome_lista', $nome_lista);
        if($id_cliente != null || $id_cliente > 0)
            $stm->bindValue(':id_cliente', $id_cliente);
        else
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
    
    ##GAMBIARRA !!!!
     public function getTotalKit($id_kit){
           if(isset($_GET['id_kit']))
               $id_kit = $_GET['id_kit'];
           
           $db = $this->getDb();
           $stm = $db->prepare('SELECT *, K.descricao as desc_kit, KLPM.quantidade as qtd from kits K inner join kits_has_lista_produtos_mercado KLPM 
                        on (K.id_kit = KLPM.kits_id_kit) inner join lista_produtos_mercado LPM
                        on (KLPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado)
                        inner join produtos P on (LPM.produtos_id_produtos = P.id_produtos)

                        where K.mercado_id_mercado = :id_mercado and K.id_kit = :id_kit');
           if(isset($_SESSION['id_mercado']))
            $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
           else
               $stm->bindValue(':id_mercado', 1);
           $stm->bindValue(':id_kit', $id_kit);
           $stm->execute();
           $result = $stm->fetchAll( PDO::FETCH_ASSOC);
           
           $total = 0.0;
           
           for($i = 0; $i<count($result); $i++){
               $result[$i]['total_itens'] = $result[$i]['valor'] * $result[$i]['qtd'];
               $total += $result[$i]['total_itens'];
           }
           if(isset($_GET['id_kit'])){
                 echo json_encode(array(
                "success" => true,
                "data" => $result
                ));
           }
           else  {
            $total = $total * (double)(100 - $result[0]['desconto'])/100;
//            return floatval(number_format ((double)$total,2,',',''));
              return $total;
           }
       }
       
        public function down(){
           $idItemKit = $_GET['id'];
           $qnt = $_GET['quantidade'];
           
           $db = $this->getDb();
            $stm = $db->prepare('update lista_cliente_has_lista_produtos_mercado
               set quantidade = :quantidade 
               where id_lista_cliente_has_lista_produtos_mercado = :id');
           $stm->bindValue(':quantidade', $qnt);
           $stm->bindValue(':id', $idItemKit);
           
           $result = $stm->execute();
          
          if($result == true)
            $msg = "Quantidade alterada com sucesso!";
          else
            $msg = "Erro ao alterar quantidade!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
           
       }
       
        public function up(){
           $idItemKit = $_GET['id'];
           $qnt = $_GET['quantidade'];
           
           $db = $this->getDb();
           $stm = $db->prepare('update lista_cliente_has_lista_produtos_mercado
               set quantidade = :quantidade 
               where id_lista_cliente_has_lista_produtos_mercado = :id');
           $stm->bindValue(':quantidade', $qnt);
           $stm->bindValue(':id', $idItemKit);
           
           $result = $stm->execute();
          
          if($result == true)
            $msg = "Quantidade alterada com sucesso!";
          else
            $msg = "Erro ao alterar quantidade!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
          
         }
         
         public function destroy(){
             $data = json_decode($_POST['data']);
        //var_dump($data);
        $db = $this->getDb();
        $stm = $db->prepare('delete from lista_cliente_has_lista_produtos_mercado
            where id_lista_cliente_has_lista_produtos_mercado = :id');
        $stm->bindValue(':id', $data->id_lista_cliente_has_lista_produtos_mercado);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           //"data" => $data
        )); 
         }
         
         public function deleteKit(){
             $id_lista_cliente_has_kits = $_GET['id_lista_cliente_has_kits'];
             
             $db = $this->getDb();
             $stm = $db->prepare('delete from lista_cliente_has_kits where 
                 id_lista_cliente_has_kits = :id_lista_cliente_has_kits');
             $stm->bindValue(':id_lista_cliente_has_kits', $id_lista_cliente_has_kits);
             $result = $stm->execute();
             
             if($result)
                 $msg = 'Kit excluído com sucesso!';
             else
                 $msg = 'Erro ao excluir Kit';
             
             echo json_encode(array(
                    "success" => $result,
                    "msg" =>$msg,
                    //"data" => $data
                 )); 
             
             
         }
}

new ListaProdutosCliente();
?>
