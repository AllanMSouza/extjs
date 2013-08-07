<?php

require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Produtos extends Base {
    
    public function insert(){
        $data = (object)$_POST;
        
         $arquivo = $_FILES['imagem']['tmp_name']; 
         $tamanho = $_FILES['imagem']['size'];
         $tipo    = $_FILES['imagem']['type'];
         $nome    = $_FILES['imagem']['name'];
         
         if ( $arquivo != "none" ){
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            //$conteudo = addslashes($conteudo);
            
        }
        
        //$categoria = new Categorias();
               
        $db = $this->getDb();
        $stm = $db->prepare('insert into produtos (codigo_produto, descricao, nome_produto, categorias_id_categorias, imagem_produto, nome_imagem)
            values (:cod_produto, :descricao, :nome_produto, :id_categoria, :imagem_produto, :nome_imagem)');
        $stm->bindValue(':cod_produto', $data->codigo_produto);
        $stm->bindValue(':descricao', $data->descricao);
        $stm->bindValue(':nome_produto', $data->nome_produto);
        $stm->bindValue(':id_categoria', $data->id_categoria);
        $stm->bindValue(':imagem_produto', $conteudo);
        $stm->bindValue(':nome_imagem', $nome);
        
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
        $stm = $db->prepare('select P.*, C.categorias_id_categorias as id_categoria, C.nome_categoria from produtos P inner join categorias C
            on (P.categorias_id_categorias = C.id_categorias)');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }
    
    public function getImagemProdutos(){
      $id = $_GET['id_produtos'];
      $db = $this->getDb();
      $stm = $db->prepare('select * from produtos where id_produtos = :id_produtos');
      $stm->bindValue(':id_produtos', $id);
      $stm->execute();

      $produto = $stm->fetchAll( PDO::FETCH_ASSOC);
                  
        header('Content-Type: image/png');
        echo $produto[0]['imagem_produto'];
        //echo "<a href='".$produto[0]['imagem_produto']."' data-lightbox='roadtrip'>";
        //echo "<img src='".$produto[0]['imagem_produto']."' border='0' style='width: 100px; height: 90px; padding: 5px;'></a>";
    }
    
    public function update(){
        $data = (object)$_POST;
        $file = $_FILES['imagem'];
        
        //var_dump($file['tmp_name']);
        if($file['tmp_name'] == ""){
           // var_dump($data);
            $db = $this->getDb();
            $stm = $db->prepare('update produtos set
                codigo_produto = :cod_produto, 
                descricao = :descricao, 
                nome_produto = :nome_produto, 
                categorias_id_categorias = :id_categoria
                where id_produtos = :id_produtos');
            $stm->bindValue(':cod_produto', $data->codigo_produto);
            $stm->bindValue(':descricao', $data->descricao);
            $stm->bindValue(':nome_produto', $data->nome_produto);
            $stm->bindValue(':id_categoria', $data->id_categoria);
            $stm->bindValue(':id_produtos', $data->id_produtos);
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
        
        else{
            $arquivo = $_FILES['imagem']['tmp_name']; 
            $tamanho = $_FILES['imagem']['size'];
            $tipo    = $_FILES['imagem']['type'];
            $nome    = $_FILES['imagem']['name'];
            
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            $db = $this->getDb();
            $stm = $db->prepare('update produtos set
                codigo_produto = :cod_produto, 
                descricao = :descricao, 
                nome_produto = :nome_produto, 
                categorias_id_categorias = :id_categoria,
                imagem_produto = :imagem_produto, 
                nome_imagem = :nome_imagem
                where id_produtos = :id_produtos');
            $stm->bindValue(':cod_produto', $data->codigo_produto);
            $stm->bindValue(':descricao', $data->descricao);
            $stm->bindValue(':nome_produto', $data->nome_produto);
            $stm->bindValue(':id_categoria', $data->id_categoria);
            $stm->bindValue(':imagem_produto', $conteudo);
            $stm->bindValue(':nome_imagem', $nome);
            $stm->bindValue(':id_produtos', $data->id_produtos);
            $result = $stm->execute();
            if($result == true)
                $msg = "Produto Atualizado com Sucesso!";
            else
                $msg = "Erro ao Atualizar Produto!";
             echo json_encode(array(
                 "success" => $result,
                 "msg" => $msg
             ));   

           }
           
    }
        
        
    
}

new Produtos();
?>
