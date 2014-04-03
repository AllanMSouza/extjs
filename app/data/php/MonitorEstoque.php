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
    
    public function getPedidos(){
        $db = $this->getDb();
        $stm = $db->prepare('select id_pedido, status, count(id_pedido) as qnt from pedido group by status order by status');
        $success = $stm->execute();
        
        $result = $stm->fetchAll(PDO::FETCH_ASSOC);
        $r0 = $result[0];
        $r1 = $result[5];
        $r2 = $result[1];
        $r3 = $result[3];
        $r4 = $result[2];
        $r5 = $result[4];
                
        $result[0] = $r0;
        $result[0]['img'] = 'pedido.png';
        
        $result[1] = $r1;
        $result[1]['img'] = 'estoque.png';
        
        $result[2] = $r2;
        $result[2]['img'] = 'retirada.png';
        
        $result[3] = $r3;
        $result[3]['img'] = 'transporte.png';
        
        $result[4] = $r4;
        $result[4]['img'] = 'cancelado.png';
        
        $result[5] = $r5;
        $result[5]['img'] = 'finalizado.png';
                
//        var_dump($result);
        
        echo json_encode(array(
           "success" => $success,
           "data" => $result
      ));
    }

}

new MonitorPedidosEstoque();
?>
