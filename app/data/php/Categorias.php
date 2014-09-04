<?php
session_start();
require_once 'DB/Base.php';

class Categorias extends Base {
    
    public function getIdCategoria($nomeCategoria){
        $db = $this->getDb();
        $stm =$db->prepare('select id_categorias from categorias where nome_categoria = :nomeCategoria and ativo = 1 order by nome_categoria desc');
        $stm->bindValue(':nomeCategoria', $nomeCategoria);
        $stm->execute();
        
        $id_categoria = $stm->fetch( PDO::FETCH_ASSOC);
        return $id_categoria['id_categorias'];
    }
    
    public function getListaCategorias($idCategoria){

        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = :idCategorias and ativo = 1 order by nome_categoria desc');
        $stm->bindValue(':idCategorias', $idCategoria);
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        
        if($result == NULL)
            return false;
        
        else 
            return $result;
    }
    
    public function getCategorias(){
                
        if(isset($_GET['node']))
            $node = $_GET['node'];

        if($node != NaN){
            $idCategoria = $node;
            $listaCategorias = $this->getListaCategorias($idCategoria);
        }
        
        else {
            if(isset($_GET['nomeCategoria'])) {
                $nomeCategoria = $_GET['nomeCategoria'];
                $idCategoria = $this->getIdCategoria($nomeCategoria);
                $listaCategorias = $this->getListaCategorias($idCategoria);
            }
            else{
                if(isset($_GET['default'])){
                    $default = (int)$_GET['default'];
                    if($default > 0)
                        $listaCategorias = $this->selectCategoriasPadrao();
                    else
                        $listaCategorias = $this->selectCategoriasMercado();
                }
                else {
                    $idCategoria = 0;
                    $listaCategorias = $this->selectCategoriasPadrao();
                }
            }
        }
        
                
        for($i = 0; $i < count($listaCategorias); $i++){
            $listaCategorias[$i]['text'] = $listaCategorias[$i]['nome_categoria'];
            //$iconCls = explode(" ", $nomeCategoria);
            //$listaCategorias[$i]['iconCls'] = $iconCls[0].'-small'; 
            
            if($this->getListaCategorias($listaCategorias[$i]['id_categorias']) == false){
                $listaCategorias[$i]['leaf'] = true;
                $listaCategorias[$i]['kit'] = false;
            }
            else{
                $listaCategorias[$i]['leaf'] = false;
                $listaCategorias[$i]['kit'] = false;
            }
        }
        //var_dump($listaCategorias);
        echo json_encode(array(
             "success" => true,
             "data" => $listaCategorias
         ));
    }
    
    public function select(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 642 and mercado_id_mercado = :id_mercado and ativo = 1 order by nome_categoria desc');
        $stm->bindValue(':id_mercado', 1);//$_SESSION['id_mercado']);
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);

        for ($i=0; $i <count($result); $i++) { 
            $result[$i]['text'] = $result[$i]['nome_categoria'];
        }
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }

    public function getCategoriasMercado(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 642 and mercado_id_mercado = :id_mercado and ativo = 1 order by nome_categoria desc');
        $stm->bindValue(':id_mercado', 1);//$_SESSION['id_mercado']);
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);

        for ($i=0; $i <count($result); $i++) { 
            $result[$i]['text'] = $result[$i]['nome_categoria'];
        }
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }

    public function getCategoriasPadrao(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 0 order by nome_categoria desc');
        //$stm->bindValue(':id_mercado', 1);//$_SESSION['id_mercado']);
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);

        for ($i=0; $i <count($result); $i++) { 
            $result[$i]['text'] = $result[$i]['nome_categoria'];
        }
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }

    public function selectCategoriasPadrao(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 0 order by nome_categoria desc;');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);

        return $result;

        }

        public function selectCategoriasMercado(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 642 and mercado_id_mercado = 1 order by nome_categoria desc;');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);

        return $result;

        }
   
     public function getNumeroProdutosCategoria(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 0 order by nome_categoria desc;');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        
        for($i=0; $i<count($result); $i++){            
             
            $result[$i]['quantidade'] = (int)  $this->getQuantidade($result[$i]['id_categorias']);
            
            
        }
        for($i=0; $i<count($result); $i++){                         
            $total += (int)$result[$i]['quantidade'];          
            
        }
        for($i=0; $i<count($result); $i++){                         
            $result[$i]['total'] = $total;
            
        }
        
        
//        var_dump($result);
        
        
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }
    
    public function getQuantidade($idCategoria){
        $db = $this->getDb();
        $stm = $db->prepare('select count(P.id_produtos) as quantidade 
                            from produtos P inner join 
                                (select C2.id_categorias, C2.nome_categoria from 
                                    (select C.id_categorias 
                                        from categorias C where C.id_categorias = :id_categorias or C.categorias_id_categorias = :categorias_id_categorias) sub
                                    left join categorias C2 on (C2.categorias_id_categorias = sub.id_categorias)
                                 group by C2.id_categorias) temp
                            on (P.categorias_id_categorias = temp.id_categorias) 
                            inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                            where lista_produtos_mercado.mercado_id_mercado = :idMercado order by nome_categoria');
            $stm->bindValue(':id_categorias',  $idCategoria);
            $stm->bindValue(':categorias_id_categorias', $idCategoria);
            $stm->bindValue(':idMercado', $_SESSION['id_mercado']);
            $stm->execute();
        
            $quantidade = $stm->fetch( PDO::FETCH_ASSOC);
            return $quantidade['quantidade'];
    }

    public function listSubcategorias(){
        $id_categorias = $_GET['id_categorias'];

        $listaCategorias = $this->getListaCategorias($id_categorias);

        for($i = 0; $i < count($listaCategorias); $i++){
            $listaCategorias[$i]['text'] = $listaCategorias[$i]['nome_categoria'];
            //$iconCls = explode(" ", $nomeCategoria);
            //$listaCategorias[$i]['iconCls'] = $iconCls[0].'-small'; 
            
            if($this->getListaCategorias($listaCategorias[$i]['id_categorias']) == false){
                $listaCategorias[$i]['leaf'] = true;
                $listaCategorias[$i]['kit'] = false;
            }
            else{
                $listaCategorias[$i]['leaf'] = false;
                $listaCategorias[$i]['kit'] = false;
            }
        }

        echo json_encode(array(
             "success" => true,
             "data" => $listaCategorias
         ));


    }

    public function insert(){
        $data = (object)$_POST;

        $arquivo = $_FILES['imgCategorias']['tmp_name']; 
        $tamanho = $_FILES['imgCategorias']['size'];
        $tipo    = $_FILES['imgCategorias']['type'];
        $nome    = $_FILES['imgCategorias']['name'];
         
        if ( $arquivo != "none" ){
           $fp = fopen($arquivo, "rb");
           $conteudo = fread($fp, $tamanho);
           fclose($fp);                       
        }

        $db = $this->getDb();
        $stm = $db->prepare('insert into categorias (nome_categoria, imagem_categoria, categorias_id_categorias, mercado_id_mercado) 
            values (:nome_categoria, :imagem, :id, :mercado_id_mercado)');
        $stm->bindValue(':nome_categoria', $data->nome_categoria);
        $stm->bindValue(':imagem', $conteudo);
        $stm->bindValue(':id', 642);
        $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
        
        $result = $stm->execute();
        if($result == true)
            $msg = "Categoria Cadastrado com Sucesso!";
        else
            $msg = "Erro ao Cadastrar Categoria!";
         echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));


    }

    public function getImagemCategorias(){
        $id = $_GET['id_categorias'];
            
            $db = $this->getDb();
            $stm = $db->prepare('select * from categorias where id_categorias = :id_categorias');
            $stm->bindValue(':id_categorias', $id);
            $stm->execute();

            $produto = $stm->fetchAll( PDO::FETCH_ASSOC);

              header('Content-Type: image/png');
              echo $produto[0]['imagem_categoria'];
    }

    public function update(){
        $data = (object)$_POST;
        $file = $_FILES['imgCategorias'];
        
        //var_dump($file['tmp_name']);
        if($file['tmp_name'] == ""){
            //var_dump($data->id_categoria);
            $db = $this->getDb();
            $stm = $db->prepare('update categorias set
                nome_categoria = :nome_categoria 
                where id_categorias = :id_categorias');            
            $stm->bindValue(':nome_categoria', $data->nome_categoria);
            $stm->bindValue(':id_categorias', $data->id_categorias);
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
            $arquivo = $_FILES['imgCategorias']['tmp_name']; 
            $tamanho = $_FILES['imgCategorias']['size'];
            $tipo    = $_FILES['imgCategorias']['type'];
            $nome    = $_FILES['imgCategorias']['name'];
            
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            $db = $this->getDb();
            $stm = $db->prepare('update categorias set
                nome_categoria = :nome_categoria,
                imagem_categoria = :imagem_categoria 
                where id_categorias = :id_categorias');

            $stm->bindValue(':nome_categoria', $data->nome_categoria);
            $stm->bindValue(':imagem_categoria', $conteudo);
            $stm->bindValue(':id_categorias', $data->id_categorias);
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

    public function insertSub(){
        $data = (object)$_POST;
        // var_dump($data);

        $db = $this->getDb();
        $stm = $db->prepare('insert into categorias (nome_categoria, categorias_id_categorias, mercado_id_mercado) 
            values (:nome_categoria, :categorias_id_categorias, :mercado_id_mercado)');
        $stm->bindValue(':nome_categoria', $data->nome_categoria);
        $stm->bindValue(':categorias_id_categorias', $data->categorias_id_categoria);
        $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
        $result = $stm->execute();

        if($result == true)
                $msg = "Categoria cadastrada com sucesso!";
            else
                $msg = "Erro ao Cadastrar categoria!";
             echo json_encode(array(
                 "success" => $result,
                 "msg" => $msg
             )); 

    }

    public function updateSub(){
        $data = (object)$_POST;

        $db = $this->getDb();
        $stm = $db->prepare('update categorias set 
            nome_categoria = :nome_categoria 
            where id_categorias = :id');
        $stm->bindValue(':nome_categoria', $data->nome_categoria);
        $stm->bindValue(':id', $data->id_categorias);
        $result = $stm->execute();

        if($result == true)
                $msg = "Categoria atualizada com sucesso!";
            else
                $msg = "Erro ao atualizar categoria!";
             echo json_encode(array(
                 "success" => $result,
                 "msg" => $msg
             )); 
    }

    public function delete(){
        $id = $_GET['id_categorias'];

        $db = $this->getDb();
        $stm = $db->prepare('update categorias set ativo = 0 where id_categorias = :id');
        $stm->bindValue(':id', $id);
        $result = $stm->execute();

        if($result)
            $msg = 'Categoria excluida com sucesso!';
        else
            $msg = 'Erro ao excluir categoria!';

         echo json_encode(array(
                 "success" => $result,
                 "msg" => $msg
             )); 

    }

}

new Categorias();
?>
