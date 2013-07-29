Ext.define('AppName.controller.layout.ControllerHeaderPanel',{
    extend: 'Ext.app.Controller',
    
    stores: [
        
    ],
    models: [
        
    ],
    views: [
       
       'layout.HeaderPanel',
       'layout.SearchPanel',
       
       
    ],
    
    init: function(){
        this.control({
            
         'headerPanel button[action=getCategorias]': {click: this.getCategorias},
         'headerPanel button[action=showWindowCadMercado]': {click: this.showWindowCadMercado},
         'headerPanel button[action=showWindowCadCliente]': {click: this.showWindowCadCliente},
         'headerPanel button[action=showWindowCadProduto]': {click: this.showWindowCadProduto},
        // 'treePanelCategorias': {beforeitemexpand: this.teste}
          
        })
    },
            
    getCategorias: function(bt){
        var nomeCategoria = bt.id;
        if(Ext.getCmp('panel-categorias').collapsed == 'left'){
            Ext.getCmp('panel-categorias').expand()
            //console.log(Ext.getCmp('panel-categorias').store)
           
        }       
        
        Ext.getCmp('panel-categorias').setTitle('Categoria - '+ nomeCategoria);
        
        var store = Ext.getCmp('panel-categorias').store.getProxy()
        store.url = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + nomeCategoria;
        Ext.getCmp('panel-categorias').store.setProxy(store)
        Ext.getCmp('panel-categorias').store.load()
            
        
    },
    
    showWindowCadMercado: function(){
      Ext.widget('windowCadMercado')  
    },
            
    showWindowCadCliente: function(){
      Ext.widget('windowCadCliente')  
    },
    
    showWindowCadProduto: function(){
        Ext.widget('windowCadProduto')
    }
})