<?php
session_start();
require_once 'DB/Base.php';

class Login extends Base {
   
    public function logar(){
        $data = (object)$_POST;
        //var_dump($data);
        $result = $this->select($data->username, $data->password);
        
        if($result){
            $_SESSION['id_usuarios'] = $result['id_usuarios'];
            $_SESSION['acesso'] = $result['acesso'];
            //var_dump($result['id_usuarios']);
            if((int)$result['acesso'] == 2){
                $_SESSION['id_mercado'] = $this->selectIdMercado($result['id_usuarios']);                
            }
            elseif((int)$result['acesso'] == 1) {
                $_SESSION['id_cliente'] = $this->selectIdCliente($result['id_usuarios']);                
            }
            elseif((int)$result['acesso'] > 2){
//                $_SESSION['usuarios_id_usuarios'] = $this->selectIdCliente($result['id_usuarios']);                
                $_SESSION['id_mercado'] = $this->selectIdMercado($result['usuarios_id_usuarios']);
            }
            $msg = 'Login efetuado com sucesso';
            
            echo json_encode(array(
                    "success" => true,
                    "data" => $result,
                    "msg" => $msg
                ));
        }
        
        else {
            
            $msg = 'Usuário e/ou Senha incorretos!';
            echo json_encode(array(
                    "success" => $result,
                    "message" => $msg
                ));
        }
    }
   
    public function select($username, $password){
        $db = $this->getDb();
        $stm =$db->prepare('select * from usuarios where login = :username and senha = md5(:password)');
        $stm->bindValue(':username', $username);
        $stm->bindValue(':password', $password);
        $stm->execute();
        
        $result = $stm->fetch(PDO::FETCH_ASSOC);
        return $result;        
    }
    
    public function selectIdMercado($id_usuario){
        $db = $this->getDb();
        $stm =$db->prepare('select id_mercado from mercado 
                            where usuarios_id_usuarios = :id_usuario');
        $stm->bindValue(':id_usuario', $id_usuario);
        $stm->execute();
        
        $result = $stm->fetch(PDO::FETCH_ASSOC);
       // var_dump($result);
        return $result['id_mercado'];   
    }
    
    public function selectIdCliente($id_usuario){
        $db = $this->getDb();
        $stm =$db->prepare('select id_cliente from cliente 
                            where usuarios_id_usuarios = :id_usuario');
        $stm->bindValue(':id_usuario', $id_usuario);
        $stm->execute();
        
        $result = $stm->fetch(PDO::FETCH_ASSOC);
       // var_dump($result);
        return $result['id_cliente'];   
    }

}

new Login();
?>
