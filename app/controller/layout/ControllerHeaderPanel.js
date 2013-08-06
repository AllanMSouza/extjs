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
         'headerPanel button[action=showWindowGerenciarClientes]': {click: this.showWindowGerenciarClientes},
         'headerPanel button[action=showWindowGerenciarMercado]': {click: this.showWindowGerenciarMercado},
         'headerPanel button[action=showWindowCadProduto]': {click: this.showWindowCadProduto},
         'headerPanel button[action=showWindowGerenciarProdutos]': {click: this.showWindowGerenciarProdutos},
         
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
    
    showWindowGerenciarClientes: function(){
      Ext.widget('windowGerenciarClientes')  
    },
            
    showWindowGerenciarMercado: function(){
      Ext.widget('windowGerenciarMercado')  
    },
    
    showWindowCadProduto: function(){
        Ext.widget('windowCadProduto')
    },
    showWindowGerenciarProdutos: function(){
        Ext.widget('windowGerenciarProdutos')
    }
})