Ext.define('AppName.controller.relatorios.ControllerRelatorioPedidosMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.StoreGridRelatorioPedidoSimples',
        'relatorios.StoreGridRelatorioPedido'
    ],
    models: [
        'relatorios.ModelGridRelatorioPedidoSimples',
        'relatorios.ModelGridRelatorioPedido'
    ],
    views: [
        'relatorios.WindowRelatorioPedidosSimples',
        'relatorios.GridRelatorioPedidosSimples',
        'relatorios.WindowRelatorioPedidos',
        'relatorios.GridRelatorioPedidosProdutos'
    ],
    
//     init: function(){
//        this.control({
//            
//        })
//    },
    
 
   
})