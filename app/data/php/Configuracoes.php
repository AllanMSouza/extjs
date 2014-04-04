<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Configuracoes extends Base {
    
    public function cancelamento(){
        $data = $_GET['cancelamento'];
        
        $db = $this->getDb();
        $stm = $db->prepare('select 1 from configuracoes where mercado_id_mercado = :id_mercado');
        $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
        $stm->execute();
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
        if($result == null)
            $result = $this->insert ($data);
        else 
            $result = $this->update ($data);
        
        echo json_encode(array(
             "success" => $result
        ));  
                
    }
    
    public function insert($cancelamento){
        $db = $this->getDb();
        $stm = $db->prepare('insert into configuracoes (cancelamento, mercado_id_mercado) 
            values(:cancelamento, :id_mercado)');
        $stm->bindValue(':cancelamento', $cancelamento);
        $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
        $result = $stm->execute();
        
        return $result;
        
    }
    
    public function update($cancelamento){
        $db = $this->getDb();
        $stm = $db->prepare('update configuracoes set cancelamento = :cancelamento where mercado_id_mercado = :id_mercado');
        $stm->bindValue(':cancelamento', $cancelamento);
        $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
        $result = $stm->execute();
        
        return $result;
    }
    
    public function selectStatus(){
        $db = $this->getDb();
        $stm = $db->prepare('select cancelamento from configuracoes where mercado_id_mercado = :id_mercado');
        $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
        $result = $stm->execute();
        $cancelamento = $stm->fetch(PDO::FETCH_ASSOC);
                
        echo json_encode(array(
             "success" => $result,
             "cancelamento" => $cancelamento['cancelamento']
        ));  
    }
    
     public function getCancelamento(){
        $db = $this->getDb();
        $stm = $db->prepare('select cancelamento from configuracoes where mercado_id_mercado = :id_mercado');
        $stm->bindValue(':id_mercado', 1);
        $result = $stm->execute();
        $cancelamento = $stm->fetch(PDO::FETCH_ASSOC);
                
        echo json_encode(array(
             "success" => $result,
             "cancelamento" => $cancelamento['cancelamento']
        ));  
    }
   
}

new Configuracoes();
?>
