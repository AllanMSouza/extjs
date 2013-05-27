<?php

require_once 'Connection.php';

abstract class Base {
    
        protected $id = null;
        protected $database = null;
        protected $table = null;
        
        public function __construct(array $options=null,  PDO $database=null) {
            if (count($options))
            $this->setOptions($options);
            
            $this->config['adapter'] = "mysql";
            $this->config['hostname'] = "200.98.197.252";
            $this->config['dbname'] = "chiaramonte_7";
            $this->config['user'] = "chiaramonte_7";
            $this->config['password'] = "fb7531fra";
            
            $connection = new Connection();
            
            $this->database = $connection->getConnection($this->config);
            
            if(method_exists($this, $_GET['action'])){
                call_user_func(array($this, $_GET['action']));
                
            }
        }

        public function setOptions(array $options) {
            $methods = get_class_methods($this);
            foreach($option as $key => $value) {
                $method = 'set' . ucfirst($key);
              if (in_array($method, $methods))
                      $this->$method($value);
                
              }
              return this;
           }
           
           public function getTable(){
               return $this->table;
           }
           
           public function getId() {
               return $this->IDUSUARIOS;
           }

           
           public function setId($id){
               if(!is_null($this->IDUSUARIOS))
                   throw new  Exception('ID nao pode ser alterado');
               $this->IDUSUARIOS = (int) $id;
           }
           
           public function getDb(){
               return $this->database;
           }
           
           public function save(){
               if($this->IDUSUARIOS)
                   return $this->_update();
               else
                   return $this->_insert();
           }
           
           public function find($id){
               $db = $this->getDb();
               $stm = $db->prepare("select * from " . $this->getTable() . 'where IDUSUARIOS=:id');
               $stm->bindvalue(':id', $id);
                    $stm->execute();
                    return $stm->fetch( PDO::FETCH_ASSOC);
           }
           
           public function fetchAll() {
               
             /*  $start = $_POST['start'];
               $limit = $_POST['limit'];
               
               $sort = $_POST['sort'] ? $_POST['sort'] : 'name';
               $dir = $_POST['dir'] ? $_POST['dir'] : 'ASC';
               $order = $sort . ' ' . $dir;*/
              
                    if($_SESSION['login']==1){
               $db = $this->getDb();
               $sql = "select * from " . $this->getTable() ." where EXCLUIDO = 0";//. " where fkSuperUser = :idusuarios" ;//. " order by :order";
               
             /*  if($start !== null && $start !== ' ' && $limit !== null && $limit !== ' '){
                   $sql .=" LIMIT " . $start . " , " . $limit;
               } */
               
               $stm = $db->prepare($sql);
               //$stm->bindValue(':idusuarios', $_SESSION['login']);
               //$stm->bindvalue(':order', $order);
              
               $stm->execute();
               
              /* $sql = 'select count(*) as total from ' . $this->getTable();
               $total = $db->query($sql)->fetch();*/
                                      
               echo json_encode(array(
                   "data" => $stm->fetchAll( PDO::FETCH_ASSOC),
                   "succes" => true,
                  // "total" => $total['total']
               ));
                    }else{
                   $db = $this->getDb();
               $sql = "select * from " . $this->getTable() . " where fkSuperUser = :idusuarios and EXCLUIDO = 0" ;//. " order by :order";
               
             /*  if($start !== null && $start !== ' ' && $limit !== null && $limit !== ' '){
                   $sql .=" LIMIT " . $start . " , " . $limit;
               } */
               
               $stm = $db->prepare($sql);
               $stm->bindValue(':idusuarios', $_SESSION['login']);
               //$stm->bindvalue(':order', $order);
              $stm->execute();
              /* $sql = 'select count(*) as total from ' . $this->getTable();
               $total = $db->query($sql)->fetch();*/
               
                          
               echo json_encode(array(
                   "data" => $stm->fetchAll( PDO::FETCH_ASSOC),
                   "succes" => true,
                  // "total" => $total['total']
               ));      
                        
                        
                    }
           }
           
            public function delete(){
                $arrUsers = json_decode($_POST['data']);
                var_dump($arrUsers);
                if(is_array($arrUsers)){
                    
                    foreach ($arrUsers as $usuario) {
                        $id = $usuario->IDUSUARIOS;
                         $db = $this->getDb();
                         $stm = $db->prepare('update ' . $this->getTable() . ' set EXCLUIDO = 1 where IDUSUARIOS=:id');
                         $stm->bindvalue(':id', $id);
                         $userDelete = $stm->execute();
                         
                         if(!$userDelete)
                             break;
                    }
                }else{
                      $id = $arrUsers->IDUSUARIOS;
                         $db = $this->getDb();
                         $stm = $db->prepare('update ' . $this->getTable() . ' set EXCLUIDO = 1 where IDUSUARIOS=:id');
                         $stm->bindvalue(':id', $id);
                         $userDelete = $stm->execute();
                    
                }
                
                $msg = $userDelete ?  'Registro(s) excluido com sucesso!' : 'Erro ao excluir, tente novamente';
                
                echo json_encode(array(
                    "success" => $userDelete,
                    "message" => $msg
                ));
               
                    return $stm->fetch( PDO::FETCH_ASSOC);
            }
            
            abstract function insert();
            
           abstract function update();
           
           
}
