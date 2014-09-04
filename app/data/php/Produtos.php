<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Produtos extends Base {
    
    public function insert(){
        $data = (object)$_POST;
        
//        var_dump($_FILES['imagem']);
        
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
        $stm = $db->prepare('insert into produtos (codigo_produto, descricao, nome_produto, categorias_id_categorias, imagem_produto, nome_imagem, novo_original)
            values (:cod_produto, :descricao, :nome_produto, :id_categoria, :imagem_produto, :nome_imagem, :novo_original)');
        $stm->bindValue(':cod_produto', $data->codigo_produto);
        $stm->bindValue(':descricao', $data->descricao);
        $stm->bindValue(':nome_produto', $data->nome_produto);
        $stm->bindValue(':id_categoria', $data->categorias_id_categorias);
        $stm->bindValue(':imagem_produto', $conteudo);
        $stm->bindValue(':nome_imagem', $nome);
        if($_SESSION['id_mercado'] > 0)
          $stm->bindValue(':novo_original', 1);   
        
        else
          $stm->bindValue(':novo_original', 0);
        
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
        for ($i=0; $i <count($result) ; $i++) { 
          if($result[$i]['novo_original'] == 0){
            $result[$i]['novo_original'] = 'Original';
          }
          else{
            $result[$i]['novo_original'] = 'Novo';
          }
        }
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }
    
    public function getImagemProdutos(){
      if($_GET['id_kit'] > 0){
           $id = $_GET['id_kit'];
            $db = $this->getDb();
            $stm = $db->prepare('select * from kits where id_kit = :id');
            $stm->bindValue(':id', $id);
            $stm->execute();

            $produto = $stm->fetchAll( PDO::FETCH_ASSOC);

              header('Content-Type: image/png');
              echo $produto[0]['imagem_kit'];
      }
      else {
           $id = $_GET['id_produtos'];
      
            $db = $this->getDb();
            $stm = $db->prepare('select * from produtos where id_produtos = :id_produtos');
            $stm->bindValue(':id_produtos', $id);
            $stm->execute();

            $produto = $stm->fetchAll( PDO::FETCH_ASSOC);

              header('Content-Type: image/png');
              echo $produto[0]['imagem_produto'];
      }
        
       
        //echo "<a href='".$produto[0]['imagem_produto']."' data-lightbox='roadtrip'>";
        //echo "<img src='".$produto[0]['imagem_produto']."' border='0' style='width: 100px; height: 90px; padding: 5px;'></a>";
    }
    
    public function update(){
        $data = (object)$_POST;
        $file = $_FILES['imagem'];
        
        //var_dump($file['tmp_name']);
        if($file['tmp_name'] == ""){
            //var_dump($data->id_categoria);
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
            $stm->bindValue(':id_categoria', $data->categorias_id_categorias);
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
            $stm->bindValue(':id_categoria', $data->categorias_id_categorias);
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
    
    public function destroy(){
        $data = json_decode($_POST['data']);
        //var_dump($data);
        $db = $this->getDb();
        $stm = $db->prepare('delete from produtos
            where id_produtos = :id_produtos');
        $stm->bindValue(':id_produtos', $data->id_produtos);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           //"data" => $data
      )); 
    }
    
    public function getProdutos(){
        $idCategoria = $_GET['id_categorias'];
        $leaf = $_GET['leaf'];
        
        //var_dump($leaf);
        if($leaf ==  "false"){
//            echo 'false';
            $db = $this->getDb();
            $stm = $db->prepare('select P.* 
                from produtos P inner join 
                    (select C2.id_categorias from 
                        (select C.id_categorias 
                            from categorias C where C.id_categorias = :id_categorias or C.categorias_id_categorias = :categorias_id_categorias) sub
                        left join categorias C2 on (C2.categorias_id_categorias = sub.id_categorias)
                     group by C2.id_categorias) temp
                on (P.categorias_id_categorias = temp.id_categorias)');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->bindValue(':categorias_id_categorias', $idCategoria);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        else{
            $db = $this->getDb();
            $stm = $db->prepare('select P.* 
                from produtos P where P.categorias_id_categorias = :id_categorias');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        for ($i=0; $i < count($result); $i++) { 
          if($result[$i]['novo_original'] == 0 || $result[$i]['novo_original'] == NULL)
            $result[$i]['novo_original'] = 'Original';
          else
            $result[$i]['novo_original'] ='Novo';
        }
         echo json_encode(array(
           "data" => $result
           //"msg" =>$msg,
           //"data" => $data
      )); 
    }
    
    public function getProdutosMercadoDefault(){
       $idCategoria = $_GET['id_categorias'];
        $leaf = $_GET['leaf'];
        //echo $idCategoria;
        //var_dump($leaf);
        if($leaf ==  "false"){
//            echo $_SESSION['id_mercado'];
            $db = $this->getDb();
            $stm = $db->prepare('select P.*, lista_produtos_mercado.*
                from produtos P inner join 
                    (select C2.id_categorias from 
                        (select C.id_categorias 
                            from categorias C where C.id_categorias = :id_categorias or C.categorias_id_categorias = :categorias_id_categorias) sub
                        left join categorias C2 on (C2.categorias_id_categorias = sub.id_categorias)
                     group by C2.id_categorias) temp
                on (P.categorias_id_categorias = temp.id_categorias) 
                inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                where lista_produtos_mercado.mercado_id_mercado = :idMercado');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->bindValue(':categorias_id_categorias', $idCategoria);
            $stm->bindValue(':idMercado', 1);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        else{
            $db = $this->getDb();
            $stm = $db->prepare('select P.*, lista_produtos_mercado.*
                from produtos P inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                where P.categorias_id_categorias = :id_categorias and lista_produtos_mercado.mercado_id_mercado = :idMercado');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->bindValue(':idMercado', 1);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        for($i=0; $i<count($result); $i++){
            if($result[$i]['valor_oferta'] > 0)
                $result[$i]['valor'] = $result[$i]['valor_oferta'];
            $result[$i]['valor1'] = number_format((double)$result[$i]['valor'],2,',','');
            if($result[$i]['novo_original'] == 0 || $result[$i]['novo_original'] == NULL)
            $result[$i]['novo_original'] = 'Original';
          else
            $result[$i]['novo_original'] ='Novo';
        }
        
         echo json_encode(array(
           "data" => $result
           //"msg" =>$msg,
           //"data" => $data
      )); 
     
        
    }
    
    public function getProdutosMercado(){
        $idCategoria = $_GET['id_categorias'];
        $leaf = $_GET['leaf'];
        //echo $idCategoria;
        //var_dump($leaf);
        if($leaf ==  "false"){
//            echo $_SESSION['id_mercado'];
            $db = $this->getDb();
            $stm = $db->prepare('select P.*, lista_produtos_mercado.*
                from produtos P inner join 
                    (select C2.id_categorias from 
                        (select C.id_categorias 
                            from categorias C where C.id_categorias = :id_categorias or C.categorias_id_categorias = :categorias_id_categorias) sub
                        left join categorias C2 on (C2.categorias_id_categorias = sub.id_categorias)
                     group by C2.id_categorias) temp
                on (P.categorias_id_categorias = temp.id_categorias) 
                inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                where lista_produtos_mercado.mercado_id_mercado = :idMercado');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->bindValue(':categorias_id_categorias', $idCategoria);
            $stm->bindValue(':idMercado', $_SESSION['id_mercado']);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        else{
            $db = $this->getDb();
            $stm = $db->prepare('select P.*, lista_produtos_mercado.*
                from produtos P inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                where P.categorias_id_categorias = :id_categorias and lista_produtos_mercado.mercado_id_mercado = :idMercado');
            $stm->bindValue(':id_categorias', $idCategoria);
            $stm->bindValue(':idMercado', $_SESSION['id_mercado']);
            $stm->execute();
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        }
        
        
         echo json_encode(array(
           "data" => $result
           //"msg" =>$msg,
           //"data" => $data
      )); 
    }
    
    public function searchProduto(){
        $nome_produto = $_GET['nome_produto'];
        
        $db = $this->getDb();
        $stm = $db->prepare('select P.*, lista_produtos_mercado.*
                from produtos P inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                where P.nome_produto LIKE "%'.$nome_produto.'%" and lista_produtos_mercado.mercado_id_mercado = 1');
        $stm->bindValue(':nome_produto', $nome_produto);
        $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        
          for($i=0; $i<count($result); $i++){
            if($result[$i]['valor_oferta'] > 0)
                $result[$i]['valor'] = $result[$i]['valor_oferta'];
            $result[$i]['valor1'] = number_format((double)$result[$i]['valor'],2,',','');
        }
        
        echo json_encode(array(
           "data" => $result
           //"msg" =>$msg,
           //"data" => $data
      )); 
    }
   
}

new Produtos();
?>
