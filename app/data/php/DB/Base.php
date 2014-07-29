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
            $this->config['hostname'] = "localhost";
            $this->config['dbname'] = "aquimercad";
            $this->config['user'] = "root";
            $this->config['password'] = "toor";
            
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
           
           
}
