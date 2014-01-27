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
//       'layout.LayoutAdministrador',
       
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
         'descriptionPanel button[action=showPanelFinalizarPedido]' : {click: this.showPanelFinalizarPedido}
               
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
    },
            
    showPanelFinalizarPedido: function(){

//        console.log(Ext.getCmp('comboboxListaProdutosCliente').getValue())
        if(Ext.getCmp('comboboxListaProdutosCliente').getValue() == null ||Ext.getCmp('comboboxListaProdutosCliente').getValue() == null == ' '){
              Ext.Msg.show({
                        title: 'ERRO',
                        msg: 'Nenhuma lista selecionada',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                    })
        }
        else {

        Ext.widget('panelFinalizarPedidoCliente')
        
        var proxy = Ext.getCmp('treeListaClienteFinalizarPedido').store.getProxy()

        proxy.api.read = 'app/data/php/ListaProdutosCliente.php?action=select&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
        Ext.getCmp('treeListaClienteFinalizarPedido').store.setProxy(proxy)
        Ext.getCmp('treeListaClienteFinalizarPedido').store.load()
        
        Ext.getCmp('fieldtotal').setValue(Ext.getCmp('valorListaCliente').getValue())
        
        Ext.getCmp('valorPanelFinalizarPedido').update(
                '<div style="padding-top:8px;padding-left:8px;"><b><label style=" font-size:20;color:#333"> TOTAL R$: </b></label><label style=" font-size:32;color:#55F"><b>'+ Ext.getCmp('valorListaCliente').getValue()+' </b></label></div>'
                )
//        console.log(Ext.getCmp('valorListaCliente').getValue())
        Ext.getCmp('fieldNomeLista').setValue(Ext.getCmp('comboboxListaProdutosCliente').getValue())

        Ext.widget('windowGerenciarClientes').hide()
//        Ext.getCmp('windowGerenciarClientes').hide()

        var records = Ext.getCmp('gridListaClientes').store.data.items[0];
   
             var editForm = Ext.getCmp('formFinalizarPedido')
             var record = records;
            editForm.loadRecord(record);
            Ext.getCmp('windowGerenciarClientes').show()
            Ext.getCmp('windowGerenciarClientes').close()
        }
    }
})