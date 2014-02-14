<?php
session_start();
require_once 'DB/Base.php';
//require_once 'Categorias.php';

class Clientes extends Base {
    
    public function insert(){
      $data = json_decode($_POST['data']);
      
            
      if($_SESSION['id_mercado'] >= 1){
          $db = $this->getDb();
        $stm = $db->prepare('insert into usuarios (login, senha, nome, endereco, email, numero, cidade, estado, bairro, cep, complemento, telefone, celular, sexo, usuarios_id_usuarios, acesso)
            values (:login, md5(:senha), :nome, :endereco, :email, :numero, :cidade, :estado, :bairro, :cep, :complemento, :telefone, :celular, :sexo, :usuarios_id_usuarios, :acesso)');
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
        $stm->bindValue(':sexo', $data->sexo);
        $stm->bindValue(':usuarios_id_usuarios', $_SESSION['id_usuarios']);
        $stm->bindValue(':acesso', $data->tipoFunc);
        $stm->execute();
        $result = $stm->fetch( PDO::FETCH_ASSOC);

        $insert = $db->lastInsertId();
        $msg = $insert ? 'Registro(s) inserido(s) com Sucesso' : 'Erro ao inserir Registro(s).' ;
        $newdata = $data;
        $newdata->id_usuarios = $insert;

        $stm = $db->prepare('insert into cliente (cpf, rg, data_nascimento, usuarios_id_usuarios)
            values (:cpf, :rg, :data_nascimento, :usuarios_id_usuarios)');
        $stm->bindValue(':cpf', $data->cpf);
        $stm->bindValue(':rg', $data->rg);
        $stm->bindValue(':data_nascimento', implode(preg_match("~\/~", $data->data_nascimento) == 0 ? "/" : "-", 
                                         array_reverse(explode(preg_match("~\/~", $data->data_nascimento) == 0 ? "-" : "/", 
                                         $data->data_nascimento))));
        $stm->bindValue(':usuarios_id_usuarios',$newdata->id_usuarios);
        $success = $stm->execute();
        $newdata->func = $this->acesso2Func($data->tipoFunc);
//         $stm = $db->prepare('update usuarios set acesso = 1 where id_usuarios = :id_usuarios');
//         $stm->bindValue(':id_usuarios', $newdata->id_usuarios);
//         $stm->execute();

         echo json_encode(array(
               "success" => $success,
               "msg" => $msg,
               "data" => $newdata
           ));
      }
      
      else {
        $db = $this->getDb();
        $stm = $db->prepare('insert into usuarios (login, senha, nome, endereco, email, numero, cidade, estado, bairro, cep, complemento, telefone, celular, sexo, usuarios_id_usuarios)
            values (:login, md5(:senha), :nome, :endereco, :email, :numero, :cidade, :estado, :bairro, :cep, :complemento, :telefone, :celular, :sexo, :usuarios_id_usuarios)');
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
        $stm->bindValue(':sexo', $data->sexo);
        $stm->bindValue(':usuarios_id_usuarios', 1);
        $stm->execute();
        $result = $stm->fetch( PDO::FETCH_ASSOC);

        $insert = $db->lastInsertId();
        $msg = $insert ? 'Registro(s) inserido(s) com Sucesso' : 'Erro ao inserir Registro(s).' ;
        $newdata = $data;
        $newdata->id_usuarios = $insert;

        $stm = $db->prepare('insert into cliente (cpf, rg, data_nascimento, usuarios_id_usuarios)
            values (:cpf, :rg, :data_nascimento, :usuarios_id_usuarios)');
        $stm->bindValue(':cpf', $data->cpf);
        $stm->bindValue(':rg', $data->rg);
        $stm->bindValue(':data_nascimento', implode(preg_match("~\/~", $data->data_nascimento) == 0 ? "/" : "-", 
                                         array_reverse(explode(preg_match("~\/~", $data->data_nascimento) == 0 ? "-" : "/", 
                                         $data->data_nascimento))));
        $stm->bindValue(':usuarios_id_usuarios',$newdata->id_usuarios);
        $success = $stm->execute();

         $stm = $db->prepare('update usuarios set acesso = 1 where id_usuarios = :id_usuarios');
         $stm->bindValue(':id_usuarios', $newdata->id_usuarios);
         $stm->execute();

         echo json_encode(array(
               "success" => $success,
               "msg" => $msg,
               "data" => $newdata
           ));
      }
    }
    
    public function select(){
        if($_SESSION['id_usuarios']== 1){
           $db = $this->getDb();
            $stm = $db->prepare('select * from usuarios inner join cliente on
                (usuarios.id_usuarios = cliente.usuarios_id_usuarios)');
            $stm->execute();

            $result = $stm->fetchAll( PDO::FETCH_ASSOC);
            echo json_encode(array(
                 "success" => true,
                 "data" => $result
            )); 
        }
        else{
            if($_SESSION['id_mercado'] >= 1){
                $db = $this->getDb();
                $stm = $db->prepare('select *, usuarios.acesso as tipoFunc from usuarios inner join cliente on
                    (usuarios.id_usuarios = cliente.usuarios_id_usuarios) where usuarios.usuarios_id_usuarios = :id');
                $stm->bindValue(':id', $_SESSION['id_usuarios']);
                $stm->execute();

                $result = $stm->fetchAll( PDO::FETCH_ASSOC);
                
                for($i = 0; $i < count($result); $i++){
                    $result[$i]['func'] = $this->acesso2Func($result[$i]['acesso']);
                }
                
                echo json_encode(array(
                     "success" => true,
                     "data" => $result
                ));
            }
            else {
                $db = $this->getDb();
                $stm = $db->prepare('select * from usuarios inner join cliente on
                    (usuarios.id_usuarios = cliente.usuarios_id_usuarios) where usuarios.id_usuarios = :id');
                $stm->bindValue(':id', $_SESSION['id_usuarios']);
                $stm->execute();

                $result = $stm->fetchAll( PDO::FETCH_ASSOC);
                echo json_encode(array(
                     "success" => true,
                     "data" => $result
                ));
            }
            
        }
    }
    
    public function destroy(){
        $data = json_decode($_POST['data']);
        
        $db= $this->getDb();
        $stm = $db->prepare('delete from cliente where id_cliente = :id_cliente');
        $stm->bindValue(':id_cliente', $data->id_cliente);
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
    
    public function update(){
        $data = json_decode($_POST['data']);
        
        if($_SESSION['id_mercado'] >= 1){
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
                celular = :celular,
                sexo = :sexo,
                acesso = :acesso
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
          $stm->bindValue(':sexo', $data->sexo);
          $stm->bindValue(':acesso', $data->tipoFunc);
          $stm->bindValue(':id_usuarios', $data->id_usuarios);
          $result = $stm->execute();

          $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
          #update tabela cliente
          $stm = $db->prepare('update cliente set
              cpf = :cpf, 
              rg = :rg, 
              data_nascimento = :data_nascimento, 
              usuarios_id_usuarios = :usuarios_id_usuarios
              where id_cliente = :id_cliente');
          $stm->bindValue(':cpf', $data->cpf);
          $stm->bindValue(':rg', $data->rg);
          $stm->bindValue(':data_nascimento', implode(preg_match("~\/~", $data->data_nascimento) == 0 ? "/" : "-", 
                                           array_reverse(explode(preg_match("~\/~", $data->data_nascimento) == 0 ? "-" : "/", 
                                           $data->data_nascimento))));
          $stm->bindValue(':usuarios_id_usuarios',$data->usuarios_id_usuarios);
          $stm->bindValue(':id_cliente', $data->id_cliente);
          $result = $stm->execute();

          $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
          echo json_encode(array(
               "success" => $result,
               "msg" =>$msg,
               "data" => $data
          )); 
        }
        else {
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
                    celular = :celular,
                    sexo = :sexo
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
              $stm->bindValue(':sexo', $data->sexo);
              $stm->bindValue(':id_usuarios', $data->id_usuarios);
              $result = $stm->execute();

              $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
              #update tabela cliente
              $stm = $db->prepare('update cliente set
                  cpf = :cpf, 
                  rg = :rg, 
                  data_nascimento = :data_nascimento, 
                  usuarios_id_usuarios = :usuarios_id_usuarios
                  where id_cliente = :id_cliente');
              $stm->bindValue(':cpf', $data->cpf);
              $stm->bindValue(':rg', $data->rg);
              $stm->bindValue(':data_nascimento', implode(preg_match("~\/~", $data->data_nascimento) == 0 ? "/" : "-", 
                                               array_reverse(explode(preg_match("~\/~", $data->data_nascimento) == 0 ? "-" : "/", 
                                               $data->data_nascimento))));
              $stm->bindValue(':usuarios_id_usuarios',$data->usuarios_id_usuarios);
              $stm->bindValue(':id_cliente', $data->id_cliente);
              $result = $stm->execute();

              $msg = $result ? 'Registro(s) atualizado(s) com Sucesso' : 'Erro ao atualizar Registro(s).' ;
              echo json_encode(array(
                   "success" => $result,
                   "msg" =>$msg,
                   "data" => $data
              )); 
        }
       
        
    }
    
    public function acesso2Func($num){
        if($num == 3){
            return "Administrador";
        }
        else {
            if($num == 4){
                return "Estoque/Pedidos";
            }
            if($num == 5){
                return "Painel de Controle";
            }
            if($num == 6){
                return "Suporte";
            }
        }
    }

}

new Clientes();
?>
