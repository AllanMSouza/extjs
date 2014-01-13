<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Kits extends Base {
    
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
          
          $db = $this->getDb();
          $stm = $db->prepare('insert into kits 
              (titulo, descricao, imagem_kit, ativo, validade, desconto, permissao, mercado_id_mercado) 
              values (:titulo, :descricao, :imagem_kit, :ativo, :validade, :desconto, :permissao, :mercado_id_mercado) ');
          $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
          $stm->bindValue(':imagem_kit', $conteudo);
//          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
//          else
//            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          
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
           $stm= $db->prepare('select *, K.descricao as desc_kit from kits K where K.mercado_id_mercado = :id_mercado');
           $stm->bindValue(':id_mercado', $_SESSION['id_mercado']);
           $stm->execute();
           
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
            
            for($i = 0; $i < count($result); $i++){
                $result[$i]['total'] = number_format ((double)$this->getTotalKit($result[$i]['id_kit']),2,',',''); 
                $result[$i]['desc_total'] = number_format((double) $result[$i]['total'] * (100 - $result[$i]['desconto'])/100,2,',','');
                if($result[$i]['ativo'] == 0)
                    $result[$i]['ativo_string'] = 'inativo';
                else
                    $result[$i]['ativo_string'] = 'ativo';
            }
            
            echo json_encode(array(
               "success" => true,
               "data" => $result
            ));
       }
       
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
           else  
            return $total;
       }
       
       public function selectKitsCliente(){
           $db = $this->getDb();
           $stm= $db->prepare('select * from kits where mercado_id_mercado = :id_mercado');
           $stm->bindValue(':id_mercado', 1);
           $stm->execute();
           
            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
            
            for($i = 0; $i < count($result); $i++){
                $result[$i]['text'] = $result[$i]['titulo'];
                $result[$i]['leaf'] = true;
                $result[$i]['kit'] = true;
            }
            
            echo json_encode(array(
           "success" => true,
           "data" => $result
        )); 
           
       }
       
       public function destroy(){
           
       }
       
       public function update(){
        $data = (object)$_POST;
        $file = $_FILES['imagem'];
        if($file['tmp_name']==""){
            $db = $this->getDb();
            $stm = $db->prepare('update kits set 
              titulo = :titulo, 
              descricao = :descricao, 
              ativo = :ativo, 
              validade = :validade, 
              desconto = :desconto, 
              permissao = :permissao, 
              mercado_id_mercado = :mercado_id_mercado 
              where id_kit = :id_kit');
            $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
//          $stm->bindValue(':imagem_kit', $conteudo);
          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
          else
            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          $stm->bindValue(':id_kit', $data->id_kit);
          $result = $stm->execute();
          
          if($result == true)
            $msg = "Kit alterado com Sucesso!";
          else
            $msg = "Erro ao editar Kit!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
            
        }
        else {
            $arquivo = $_FILES['imagem']['tmp_name']; 
            $tamanho = $_FILES['imagem']['size'];
            $tipo    = $_FILES['imagem']['type'];
            $nome    = $_FILES['imagem']['name'];
            
            $fp = fopen($arquivo, "rb");
            $conteudo = fread($fp, $tamanho);
            fclose($fp);
            $db = $this->getDb();
            $stm = $db->prepare('update kits set 
              titulo = :titulo, 
              descricao = :descricao, 
              imagem_kit = :imagem_kit, 
              ativo = :ativo, 
              validade = :validade, 
              desconto = :desconto, 
              permissao = :permissao, 
              mercado_id_mercado = :mercado_id_mercado 
              where id_kit = :id_kit');
            $stm->bindValue(':titulo', $data->titulo);
          $stm->bindValue(':descricao', $data->descricao);
          $stm->bindValue(':imagem_kit', $conteudo);
          if($data->ativo == "on")
            $stm->bindValue(':ativo', 1);
          else
            $stm->bindValue(':ativo', 0);
          $stm->bindValue(':validade', $data->validade);
          $stm->bindValue(':desconto', $data->desconto);
          $stm->bindValue(':permissao', '');
          $stm->bindValue(':mercado_id_mercado', $_SESSION['id_mercado']);
          $stm->bindValue(':id_kit', $data->id_kit);
          $result = $stm->execute();
          
          if($result == true)
            $msg = "Kit alterado com Sucesso!";
          else
            $msg = "Erro ao editar Kit!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
        }
        
       }
       
        public function getImgKit(){
      $id = $_GET['id_kit'];
      $db = $this->getDb();
      $stm = $db->prepare('select * from kits where id_kit = :id');
      $stm->bindValue(':id', $id);
      $stm->execute();

      $produto = $stm->fetchAll( PDO::FETCH_ASSOC);
                  
        header('Content-Type: image/png');
        echo $produto[0]['imagem_kit'];
        //echo "<a href='".$produto[0]['imagem_produto']."' data-lightbox='roadtrip'>";
        //echo "<img src='".$produto[0]['imagem_produto']."' border='0' style='width: 100px; height: 90px; padding: 5px;'></a>";
    }
    
    public function ativoInativo(){
        $ativo = $_GET['ativo'];
        $id_kit = $_GET['id_kit'];
        
        $db = $this->getDb();
        $stm = $db->prepare('update kits set ativo = :ativo where id_kit = :id_kit');
        $stm->bindValue(':ativo', $ativo);
        $stm->bindValue(':id_kit', $id_kit);
        $result = $stm->execute();
        
        if($result == true)
            $msg = "Kit ativado/inativado com Sucesso!";
          else
            $msg = "Erro ao ativar/inativar Kit!";
          echo json_encode(array(
             "success" => $result,
             "msg" => $msg
         ));
        
    }
   
}

new Kits();
?>
