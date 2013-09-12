Ext.define('AppName.controller.layout.ControllerLayout',{
    extend: 'Ext.app.Controller',
    
    stores: [
        //'StoreTreePanelCategorias'
        
    ],
    models: [
        //'ModelTreePanelCategorias'
    ],
    views: [
       'layout.ContentPanel',
       'layout.DescriptionPanel',
       'layout.HeaderPanelMercado'
//       'layout.LayoutAdministrador'
       
    ],
    
     init: function(){
        this.control({
         'headerPanelMercado button[action=logout]' : {click: this.logout},
         'headerPanelMercado button[action=showIcons]' : {click: this.showIcons},
         'headerPanelMercado button[action=showLista]' : {click: this.showLista},
         'headerPanelMercado button[action=showWindowGerenciarPanfletos]': {click: this.showWindowGerenciarPanfletos},
         'headerPanelMercado button[action=showWindowCadastrarProdutos]': {click: this.showWindowCadastrarProdutos},
         'headerPanelMercado button[action=showWindowGerenciarCadastro]': {click: this.showWindowGerenciarCadastro},
         'headerPanelMercado button[action=showWindowGerenciarProdutosMercado]': {click: this.showWindowGerenciarProdutosMercado},
               
        // 'treePanelCategorias': {beforeitemexpand: this.teste}
          
        })
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
    
    showWindowGerenciarPanfletos: function(){
        Ext.widget('windowGerenciarPanfletos')
    },
    
    showIcons: function(){
        Ext.getCmp('gridListaProdutosGeral').hide()
        Ext.getCmp('gridListaProdutosMercado').hide()
        Ext.getCmp('dataViewListaProdutosGeral').show();        
        Ext.getCmp('panelImageListaProdutosMercado').show();
        
    },
    
    showLista: function(){
        Ext.getCmp('dataViewListaProdutosGeral').hide();
        Ext.getCmp('panelImageListaProdutosMercado').hide();
        Ext.getCmp('gridListaProdutosGeral').show()
        Ext.getCmp('gridListaProdutosMercado').show()
    },
    
    showWindowCadastrarProdutos:function(){
        Ext.widget('windowCadProduto')
        var grid = Ext.widget('gridListaProdutos')
        grid.hide()
    },
    
    showWindowGerenciarCadastro:function(){
        Ext.widget('windowGerenciarMercado')
        
    },
    
    showWindowGerenciarProdutosMercado: function(){
        Ext.widget('windowGerenciarProdutosMercado')
    }
})