Ext.define('AppName.controller.layout.ControllerHeaderPanelCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
        
    ],
    models: [
        
    ],
    views: [
       
//       'layout.HeaderPanel',
       'layout.SearchPanel',
       'layout.HeaderPanelCliente',
       
        'layout.NewHeaderPanelCliente',
        'layout.DataViewNewHeaderPanelCliente',
       
       
    ],
    
    init: function(){
        this.control({
            'headerPanelCliente button[action=getCategorias]': {click: this.getCategorias},
            'headerPanelCliente button[action=showWindowMeusPedidos]' : {click: this.showWindowMeusPedidos},
            'headerPanelCliente button[action=showWindowGerenciarClientes]': {click: this.showWindowGerenciarClientes},
            'headerPanelCliente button[action=logout]' : {click: this.logout}
               
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
        
        if(nomeCategoria == 'Kits'){
            store.url = 'app/data/php/Kits.php?action=selectKitsCliente';
        }
        else{
            store.url = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + nomeCategoria;
        }
        
        
        Ext.getCmp('panel-categorias').store.setProxy(store)
        Ext.getCmp('panel-categorias').store.load()
            
        
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
    },
    
    showWindowGerenciarClientes: function(){
      Ext.widget('windowGerenciarClientes')  
    },
    
    showWindowMeusPedidos: function(){
        Ext.widget('windowAcompanharPedidos')
    }
})