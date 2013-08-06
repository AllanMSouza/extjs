<?php

require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Produtos extends Base {
    
    public function insert(){
        $data = (object) $_POST;
        //var_dump($data);
        //$categoria = new Categorias();
               
        $db = $this->getDb();
        $stm = $db->prepare('insert into produtos (codigo_produto, descricao, nome_produto, categorias_id_categorias)
            values (:cod_produto, :descricao, :nome_produto, :id_categoria)');
        $stm->bindValue(':cod_produto', $data->codigo_produto);
        $stm->bindValue(':descricao', $data->descricao);
        $stm->bindValue(':nome_produto', $data->nome_produto);
        $stm->bindValue(':id_categoria', $data->id_categoria);
        
        $result = $stm->execute();
        if($result == true)
            $msg = "Produto Cadastrado com Sucesso!";
        else
            $msg = "Erro ao Cadastrar Produto!";
         echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
    }
    
    public function select(){
        $db = $this->getDb();
        $stm = $db->prepare('select * from produtos');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }

}

new Produtos();
?>
