<?php

 
class Connection {
    
            public function getConnection($config) {
                
                $dsn = $config['adapter'] . ":host=" . $config['hostname'] . ";port=3606" .  ";dbname=" . $config['dbname'];
                try{
                    return new   PDO($dsn, $config['user'], $config['password']);
                }
                catch (PDOException $e)
                {
                    die($e->getMessage());
                }
                
         }
    }
   
