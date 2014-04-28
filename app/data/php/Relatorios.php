<?php
session_start();
require_once 'DB/Base.php';
require_once 'Kits.php';

class Relatorios extends Base {
    
    public function getPedidosSimples(){
        $db = $this->getDb();
        $stm = $db->prepare('select id_pedido, data, valor_pedido from pedido');
        $result = $stm->execute();
        
        echo json_encode(array(
             "data" => $stm->fetchAll(PDO::FETCH_ASSOC),
            "success" => $result
         ));
        
    }
    
    
    public function getRelatorioProdutosPedidos(){
        $db = $this->getDb();
//        $stm = $db->prepare('SELECT *,  PHK.quantidade as quantidade_pedido_has_kits, KHLPM.quantidade as quantidade_kits_has_lista_produtos_mercado,
//                            LPM.quantidade as quantidade_lista_produtos_mercado, PHLPM.quantidade as quantidade_pedido_has_lista_produtos_mercado, 
//                            LPM2.quantidade as quantaidade_lista_produtos_mercado2
//
//                            from pedido P left join pedido_has_kits PHK 
//                            on (P.id_pedido = PHK.pedido_id_pedido) left join kits K on (PHK.kits_id_kit = K.id_kit) left join kits_has_lista_produtos_mercado KHLPM 
//                            on(KHLPM.kits_id_kit = K.id_kit) left join lista_produtos_mercado LPM on (KHLPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado)
//                            inner join pedido_has_lista_produtos_mercado PHLPM
//                            on (P.id_pedido = PHLPM.pedido_id_pedido) inner join lista_produtos_mercado LPM2
//                            on(PHLPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM2.id_lista_produtos_mercado) inner join produtos PR 
//                            on(LPM2.produtos_id_produtos = PR.id_produtos)');
//        $result = $stm->execute();
                $stm = $db->prepare('SELECT *, LPM.quantidade as quantidade_lista_produtos_mercado, PHLPM.quantidade as quantidade_pedido_has_lista_produtos_mercado

                                    from pedido P inner join pedido_has_lista_produtos_mercado PHLPM
                                    on (P.id_pedido = PHLPM.pedido_id_pedido) inner join lista_produtos_mercado LPM
                                    on(PHLPM.lista_produtos_mercado_id_lista_produtos_mercado = LPM.id_lista_produtos_mercado) inner join produtos PR 
                                    on(LPM.produtos_id_produtos = PR.id_produtos) inner join categorias C on (PR.categorias_id_categorias = C.id_categorias)');
        $result = $stm->execute();

        $data = $stm->fetchAll(PDO::FETCH_ASSOC);
        
//        for($i = 0; $i < count($data); $i++){
//            if((int) $data[$i]['id_kit'] > 0)
//            $data[$i]['total_kit'] = $this->getTotalKit($data[$i]['id_kit']);
//        }
        
        
        echo json_encode(array(
             "data" => $data,
            "success" => $result
         ));
        
    }
    
    public function getRelatorioCliente(){
        $db = $this->getDb();
        $stm = $db->prepare('select * from usuarios where acesso = 1');
        $stm->execute();
        
        echo json_encode(array(
             "data" => $stm->fetchAll(PDO::FETCH_ASSOC),
            "success" => $result
         ));
        
    }
    
}

new Relatorios();
?>
