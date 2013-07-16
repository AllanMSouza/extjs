<?php

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
        $nomeCategoria = $_GET['nomeCategoria'];
        $node = $_GET['node'];
        
        if($node != NaN)
            $idCategoria = $node;
        
        else                           
            $idCategoria = $this->getIdCategoria($nomeCategoria);
        
        $listaCategorias = $this->getListaCategorias($idCategoria);
                
        for($i = 0; $i < count($listaCategorias); $i++){
            $listaCategorias[$i]['text'] = $listaCategorias[$i]['nome_categoria'];
            
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
        $stm =$db->prepare('select * from categorias');
        $stm->execute();
        
        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
             "success" => true,
             "data" => $result
         ));
    }
   

}

new Categorias();
?>