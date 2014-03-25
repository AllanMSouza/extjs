<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class MonitorPedidosEstoque extends Base {
    
    public function insert(){
    
    }
    
    public function select(){
       $db = $this->getDb();
       $stm = $db->prepare('select * from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
    }
    
    public function selectRed(){
        $db = $this->getDb();
       $stm = $db->prepare('select * from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade < LPM.laranja and LPM.quantidade >= 0 or LPM.quantidade <= LPM.vermelho');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }
    
    public function selectGreen(){
        $db = $this->getDb();
       $stm = $db->prepare('select * from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade >= LPM.verde');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }
    
    public function selectOrange(){
        $db = $this->getDb();
       $stm = $db->prepare('select * from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade >= LPM.laranja and LPM.quantidade < LPM.verde');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array(
           "success" => true,
           "data" => $result
      ));
        
    }
    
    public function countRed(){
         $db = $this->getDb();
         $stm = $db->prepare('select count(P.id_produtos) as num from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade < LPM.laranja and LPM.quantidade >= 0 or LPM.quantidade <= LPM.vermelho');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetch(PDO::FETCH_ASSOC);
//        echo json_encode(array(
//           "success" => $success,
//           "data" => $result['num']
//      ));
        
      return $result['num'];
    }
    
      public function countOrange(){
         $db = $this->getDb();
         $stm = $db->prepare('select count(P.id_produtos) as num from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade >= LPM.laranja and LPM.quantidade < LPM.verde');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $stm->execute();
       
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
//        return $result['num'];
        
//        echo json_encode(array(
//           "success" => $success,
//           "data" => $result['num']
//      ));
        
      return $result['num'];
    }
    
      public function countGreen(){
         $db = $this->getDb();
         $stm = $db->prepare('select count(P.id_produtos) as num from produtos P inner join lista_produtos_mercado LPM '
               . ' on (P.id_produtos = LPM.produtos_id_produtos) inner join categorias C '
               . ' on (C.id_categorias = P.categorias_id_categorias) '
               . 'where LPM.mercado_id_mercado = :id_mercado and LPM.quantidade >= LPM.verde');
       $stm->bindValue(':id_mercado',$_SESSION['id_mercado']);
       $success = $stm->execute();
       
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        
//        echo json_encode(array(
//           "success" => $success,
//           "data" => $result['num']
//      ));
//        
      return $result['num'];
    }
    
    public function destroy(){
     
        
    }
    
    
    public function getEstoque(){
        $data[0]['id'] = 1;
        $data[1]['id'] = 2;
        $data[2]['id'] = 3;
        
        $data[0]['img'] = 'ok.jpg';
        $data[1]['img'] = 'alert.png';
        $data[2]['img'] = 'x.jpg';
        
        $data[0]['categoria'] = 'Verde';
        $data[1]['categoria'] = 'Laranja';
        $data[2]['categoria'] = 'Vermelho';
        
        $data[0]['quantidade'] = $this->countGreen();
        $data[1]['quantidade'] = $this->countOrange();
        $data[2]['quantidade'] = $this->countRed();
        
          echo json_encode(array(
           "success" => true,
           "data" => $data
      ));
        
    }

}

new MonitorPedidosEstoque();
?>
