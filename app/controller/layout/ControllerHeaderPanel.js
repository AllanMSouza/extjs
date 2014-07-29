Ext.define('AppName.controller.layout.ControllerHeaderPanel',{
    extend: 'Ext.app.Controller',
    
    stores: [
        
    ],
    models: [
        
    ],
    views: [
       
       'layout.HeaderPanel',
       'layout.SearchPanel',
//       'layout.HeaderPanelCliente'
       
       
    ],
    
    init: function(){
        this.control({
            
         'headerPanel button[action=getCategorias]': {click: this.getCategorias},
         'headerPanel button[action=showWindowGerenciarClientes]': {click: this.showWindowGerenciarClientes},
         'headerPanel button[action=showWindowGerenciarMercado]': {click: this.showWindowGerenciarMercado},
         'headerPanel button[action=showWindowCadProduto]': {click: this.showWindowCadProduto},
         'headerPanel button[action=showWindowGerenciarProdutos]': {click: this.showWindowGerenciarProdutos},
         
         'headerPanel button[action=logout]': {click: this.logout}
         
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
    },
    
    
    logout: function(){
        Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja sair desta aplicação ?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                viewRedir('Logout','telaprincipal');   
                            }
                        }
                        
                    })
    }
})