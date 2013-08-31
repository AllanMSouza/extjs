Ext.define('AppName.controller.produtos.ControllerListaCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'produtos.StoreComboboxListaCliente'
    ],
    models: [
       'produtos.ModelComboboxListaCliente'
    ],
    views: [
              
    ],
    
    init: function(){
        this.control({
        
        });
    }
    
})