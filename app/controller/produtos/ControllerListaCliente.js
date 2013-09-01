Ext.define('AppName.controller.produtos.ControllerListaCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'produtos.StoreComboboxListaCliente'
    ],
    models: [
       'produtos.ModelComboboxListaCliente'
    ],
    views: [
              'produtos.GridListaProdutosCliente'
    ],
    
    init: function(){
        this.control({
        'gridListaProdutosCliente' : {drop: this.drop}
        
        });
    },
    
    drop:function(){
        console.log('haha')
    }
    
})