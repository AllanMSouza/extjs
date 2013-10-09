<?php
session_start();
require_once 'DB/Base.php';

class Categorias extends Base {
    
    public function getIdCategoria($nomeCategoria){
        $db = $this->getDb();
        $stm =$db->prepare('select id_categorias from categorias where nome_categoria = :nomeCategoria');
        $stm->bindValue(':nomeCategoria', $nomeCategoria);
        $stm->execute();
        
        $id_categoria = $stm->fetch( PDO::FETCH_ASSOC);
        return $id_categoria['id_categorias'];
    }
    
    public function getListaCategorias($idCategoria){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = :idCategorias');
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
        
        if($node != NaN)
            $idCategoria = $node;
        
        else {
            if(isset($_GET['nomeCategoria'])) {
                $nomeCategoria = $_GET['nomeCategoria'];
                $idCategoria = $this->getIdCategoria($nomeCategoria);
            }
            else
                $idCategoria = 0;
        }
        $listaCategorias = $this->getListaCategorias($idCategoria);
                
        for($i = 0; $i < count($listaCategorias); $i++){
            $listaCategorias[$i]['text'] = $listaCategorias[$i]['nome_categoria'];
            //$iconCls = explode(" ", $nomeCategoria);
            //$listaCategorias[$i]['iconCls'] = $iconCls[0].'-small'; 
            
            if($this->getListaCategorias($listaCategorias[$i]['id_categorias']) == false){
                $listaCategorias[$i]['leaf'] = true;
            }
            else{
                $listaCategorias[$i]['leaf'] = false;
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
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 0;');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }
   
     public function getNumeroProdutosCategoria(){
        $db = $this->getDb();
        $stm =$db->prepare('select * from categorias where categorias_id_categorias = 0;');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        
        for($i=0; $i<count($result); $i++){
           
            
             $stm =$db->prepare('select sum(quantidade) as quantidade 
                            from produtos P inner join 
                                (select C2.id_categorias, C2.nome_categoria from 
                                    (select C.id_categorias 
                                        from categorias C where C.id_categorias = :id_categorias or C.categorias_id_categorias = :categorias_id_categorias) sub
                                    left join categorias C2 on (C2.categorias_id_categorias = sub.id_categorias)
                                 group by C2.id_categorias) temp
                            on (P.categorias_id_categorias = temp.id_categorias) 
                            inner join lista_produtos_mercado on (P.id_produtos = lista_produtos_mercado.produtos_id_produtos)
                            where lista_produtos_mercado.mercado_id_mercado = :idMercado');
            $stm->bindValue(':id_categorias',  $result[$i]['id_categorias']);
            $stm->bindValue(':categorias_id_categorias', $result[$i]['id_categorias']);
            $stm->bindValue(':idMercado', $_SESSION['id_mercado']);
            $stm->execute();
        
            $quantidade = $stm->fetch( PDO::FETCH_ASSOC);
            $result[$i]['quantidade'] = (int)$quantidade['quantidade'];
            
            
        }
//        var_dump($result);
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }

}

new Categorias();
?>
