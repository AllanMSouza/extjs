Ext.define('AppName.controller.pedido.ControllerFinalizarPedido',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'pedido.StoreTreeListaClienteFinalizarPedido'
    ],
    models: [
       'produtos.ModelListaProdutosCliente'
    ],
    views: [
        'pedido.TreeListaClienteFinalizarPedido',
        'pedido.PanelFinalizarPedidoCliente'
        
    ],
    
     init: function(){
        this.control({
          
          
        })
    },
    
   
})