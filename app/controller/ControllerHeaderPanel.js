Ext.define('AppName.controller.ControllerHeaderPanel',{
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
        // 'treePanelCategorias': {beforeitemexpand: this.teste}
          
        })
    },
            
    getCategorias: function(bt){
        var nomeCategoria = bt.id;
        if(Ext.getCmp('panel-categorias').collapsed == 'left'){
            Ext.getCmp('panel-categorias').expand()
            //console.log(Ext.getCmp('panel-categorias').store)
           
        }       
        
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
            
//    getListaCategorias: function(bt){
//        var nome_categoria = bt.id;
//        
//    }

    teste: function(node){
        //console.log(node)
        if(Ext.getCmp('panel-categorias')){
            //console.log(Ext.getCmp('panel-categorias').store)
              var proxy = Ext.getCmp('panel-categorias').store.getProxy(),
                nomeCategoria = node.data.nome_categoria;
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + nomeCategoria;
            
                Ext.getCmp('panel-categorias').store.setProxy(proxy)
                Ext.getCmp('panel-categorias').store.load()
        }
    }
})