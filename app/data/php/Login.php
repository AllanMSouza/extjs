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

}

new Login();
?>
