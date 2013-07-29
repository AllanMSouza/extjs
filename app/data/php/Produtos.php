<?php

require_once 'DB/Base.php';

class Produtos extends Base {
    
    public function insert(){
        $data = (object) $_POST;
        var_dump($data);
    }

}

new Produtos();
?>
