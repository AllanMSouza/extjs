Ext.define('AppName.controller.relatorios.ControllerRelatorioPedidosMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.StoreGridRelatorioPedidoSimples'
    ],
    models: [
        'relatorios.ModelGridRelatorioPedidoSimples'
    ],
    views: [
        'relatorios.WindowRelatorioPedidosSimples',
        'relatorios.GridRelatorioPedidosSimples'
    ],
    
//     init: function(){
//        this.control({
//            
//        })
//    },
    
 
   
})