<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Mercados extends Base {
    
    public function insert(){
         $data = json_decode($_POST['data']);
      
      //var_dump($data);
      
      $db = $this->getDb();
      $stm = $db->prepare('insert into usuarios (login, senha, nome, endereco, email, numero, cidade, estado, bairro, cep, complemento, telefone, celular)
          values (:login, md5(:senha), :nome, :endereco, :email, :numero, :cidade, :estado, :bairro, :cep, :complemento, :telefone, :celular)');
      $stm->bindValue(':login', $data->login);
      $stm->bindValue(':senha', $data->senha);
      $stm->bindValue(':nome', $data->nome);
      $stm->bindValue(':endereco', $data->endereco);
      $stm->bindValue(':email', $data->email);
      $stm->bindValue(':numero', $data->numero);
      $stm->bindValue(':cidade', $data->cidade);
      $stm->bindValue(':estado', $data->estado);
      $stm->bindValue(':bairro', $data->bairro);
      $stm->bindValue(':cep', $data->cep);
      $stm->bindValue(':complemento', $data->complemento);
      $stm->bindValue(':telefone', $data->telefone);
      $stm->bindValue(':celular', $data->celular);
      $stm->execute();
      $result = $stm->fetch( PDO::FETCH_ASSOC);
       
      $insert = $db->lastInsertId();
      $msg = $insert ? 'Registro(s) inserido(s) com Sucesso' : 'Erro ao inserir Registro(s).' ;
      $newdata = $data;
      $newdata->id_usuarios = $insert;
      
      $stm = $db->prepare('insert into mercado
          (cnpj, razao_social, nome_fantasia, inscricao_social, usuarios_id_usuarios)
          values (:cnpj, :razao_social, :nome_fantasia, :inscricao_social, :usuarios_id_usuarios)');
      $stm->bindValue(':cnpj', $data->cnpj);
      $stm->bindValue(':razao_social', $data->razao_social);
      $stm->bindValue(':nome_fantasia', $data->nome_fantasia);
      $stm->bindValue(':inscricao_social', $data->inscricao_social);
      $stm->bindValue(':usuarios_id_usuarios', $newdata->id_usuarios);
      $success = $stm->execute();
      
       $stm = $db->prepare('update usuarios set acesso = 2 where id_usuarios = :id_usuarios');
       $stm->bindValue(':id_usuarios', $newdata->id_usuarios);
       $stm->execute();
      
      $msg = $success ? 'Registro(s) inserido(s) com Sucesso' : 'Erro ao inserir Registro(s).' ;
      
       echo json_encode(array(
             "success" => $success,
             "msg" => $msg,
             "data" => $newdata
         ));
        
    }
            
   public function update(){
         $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        #update Tabela usuarios
        $stm = $db->prepare('update usuarios set
            login = :login, 
            senha = md5(:senha), 
            nome = :nome, 
            endereco = :endereco, 
            email = :email, 
            numero = :numero, 
            cidade = :cidade, 
            estado = :estado, 
            bairro = :bairro, 
            cep = :cep, 
            complemento = :complemento, 
            telefone = :telefone, 
            celular = :celular
            where id_usuarios = :id_usuarios');
        $stm->bindValue(':login', $data->login);
      $stm->bindValue(':senha', $data->senha);
      $stm->bindValue(':nome', $data->nome);
      $stm->bindValue(':endereco', $data->endereco);
      $stm->bindValue(':email', $data->email);
      $stm->bindValue(':numero', $data->numero);
      $stm->bindValue(':cidade', $data->cidade);
      $stm->bindValue(':estado', $data->estado);
      $stm->bindValue(':bairro', $data->bairro);
      $stm->bindValue(':cep', $data->cep);
      $stm->bindValue(':complemento', $data->complemento);
      $stm->bindValue(':telefone', $data->telefone);
      $stm->bindValue(':celular', $data->celular);
      $stm->bindValue(':id_usuarios', $data->id_usuarios);
      $result = $stm->execute();
      
      $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
      
      $stm = $db->prepare('update mercado set
          cnpj = :cnpj, 
          razao_social = :razao_social, 
          nome_fantasia = :nome_fantasia, 
          inscricao_social = :inscricao_social, 
          usuarios_id_usuarios = :usuarios_id_usuarios
          where id_mercado = :id_mercado');
      $stm->bindValue(':cnpj', $data->cnpj);
      $stm->bindValue(':razao_social', $data->razao_social);
      $stm->bindValue(':nome_fantasia', $data->nome_fantasia);
      $stm->bindValue(':inscricao_social', $data->inscricao_social);
      $stm->bindValue(':usuarios_id_usuarios', $data->usuarios_id_usuarios);
      $stm->bindValue(':id_mercado', $data->id_mercado);
      $result = $stm->execute();
      
      $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
      echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           "data" => $data
      )); 
      
   }
   
   public function select(){
       if($_SESSION['id_usuarios'] == 1){
         $db = $this->getDb();
        $stm = $db->prepare('select * from usuarios inner join mercado on
            (usuarios.id_usuarios = mercado.usuarios_id_usuarios)');
        $stm->execute();

        $result = $stm->fetchAll( PDO::FETCH_ASSOC);
        echo json_encode(array(
             "success" => true,
             "data" => $result
        ));  
       }
       else {
           $db = $this->getDb();
            $stm = $db->prepare('select * from usuarios inner join mercado on
                (usuarios.id_usuarios = mercado.usuarios_id_usuarios) where usuarios.id_usuarios = :id');
            $stm->bindValue(':id', $_SESSION['id_usuarios']);
            $stm->execute();

            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
            echo json_encode(array(
                 "success" => true,
                 "data" => $result
            ));
       }
       
   }
   
   public function destroy(){
        $data = json_decode($_POST['data']);
        
        $db= $this->getDb();
        $stm = $db->prepare('delete from mercado where id_mercado = :id_mercado');
        $stm->bindValue(':id_mercado', $data->id_mercado);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        
        $stm = $db->prepare('delete from usuarios where id_usuarios = :id_usuarios');
        $stm->bindValue(':id_usuarios', $data->id_usuarios);
        $result = $stm->execute();
        $msg = $result ? 'Registro(s) destruido(s) com Sucesso' : 'Erro ao destruir Registro(s).' ;
        echo json_encode(array(
           "success" => $result,
           "msg" =>$msg,
           //"data" => $data
      )); 
   }

}

new Mercados();
?>
