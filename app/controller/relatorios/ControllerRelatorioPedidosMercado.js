Ext.define('AppName.controller.relatorios.ControllerRelatorioPedidosMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.StoreGridRelatorioPedidoSimples',
        'relatorios.StoreGridRelatorioPedido',
        'relatorios.StoreRelatorioCliente'
    ],
    models: [
        'relatorios.ModelGridRelatorioPedidoSimples',
        'relatorios.ModelGridRelatorioPedido',
        'relatorios.ModelGridRelatorioCliente',
    ],
    views: [
        'relatorios.WindowRelatorioPedidosSimples',
        'relatorios.GridRelatorioPedidosSimples',
        'relatorios.WindowRelatorioPedidos',
        'relatorios.GridRelatorioPedidosProdutos',
        'relatorios.WindowRelatorioCliente',
        'relatorios.GridRelatorioCliente'
    ],
    
//     init: function(){
//        this.control({
//            
//        })
//    },
    
 
   
})