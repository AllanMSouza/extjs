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
        
        'layout.WindowControlPanel',
        'layout.DataViewControlPanel',
        'layout.DataViewAction'
       
       
    ],
    
    init: function(){
        this.control({
            'headerPanelCliente button[action=getCategorias]': {click: this.getCategorias},
            'headerPanelCliente button[action=showWindowMeusPedidos]' : {click: this.showWindowMeusPedidos},
            'headerPanelCliente button[action=showWindowGerenciarClientes]': {click: this.showWindowGerenciarClientes},
            'headerPanelCliente button[action=logout]' : {click: this.logout},
            'dataViewControlPanel ' : {selectionchange: this.getActionControlPanel},
            'dataViewAction ' : {selectionchange: this.getActionAction},
//            'newHeaderPanelCliente idDomboboxOpcoes ': {select: this.select}
               
        // 'treePanelCategorias': {beforeitemexpand: this.teste}
          
        })
    },
            
//            select: function(){
//                console.log('Select')
//            },
    
    getCategorias: function(bt){
        // console.log(bt)
        var nomeCategoria = bt.nome_categoria;
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
    },
            
    getActionControlPanel: function(model, records){
            
            if(records[0].data.id == "Meus Pedidos"){
                Ext.Ajax.request({
                    url: 'app/data/php/Configuracoes.php?action=getCancelamento',
                    
                    success: function(resp,b){
                        var data = Ext.decode(resp.responseText)
//                        console.log(data.cancelamento)
                        Ext.getCmp('podeCancelar').setValue(data.cancelamento)
                    }
                });
                Ext.widget('windowAcompanharPedidos')
            }
            else {
                if(records[0].data.id == "Meu Cadastro"){
                    
                    var grid = Ext.widget('gridListaClientes')
                    grid.hide();
                    var record = Ext.getCmp('gridListaClientes').store.data.items[0]
        //            console.log(record)
                    var editWindow = Ext.widget('windowCadCliente')
                    var editForm = editWindow.down('form');
                    editForm.loadRecord(record);
                    
                }
                if(records[0].data.id == "Sair")
                    this.logout()

                if(records[0].data.id == 'Login'){
                    var win = Ext.widget('windowLogin')
                    // console.log(win)
                }
            }
    },

    getActionAction: function(model, records){

        if(records[0].data.id == "Pesquisar"){
            Ext.create('Ext.window.Window',{
                title: 'Pesquisar',
                id: 'windowPesquisar',
                width: 450,
                height: 85,
                autoShow: true,
                layout: 'hbox',
                region: Ext.getBody(),
                border: false,
                bodyPadding: '10 10',
                items: [
                    {
                        xtype: 'textfield',
                        id:'textfieldSearchProdutosGeral',
                        style: 'font-size:20px;',
                        width: 300,
                        // height: 40,
                        emptyText: 'Informe aqui sua pesquisa',
                    },
                    {
                        xtype: 'button',
                        text: 'Pesquisar',
                        id: 'btPesquisar',
                        // icon: 'resources/icons/search-icon.png',
                        width: 110,
                        // scale:'large', 
                        margins: '0 0 0 5',
                        handler: function(){
                            var pesquisa = Ext.getCmp('textfieldSearchProdutosGeral').getValue()
                            if(pesquisa != ''){
                              
                                                        
                                  var win = Ext.widget('windowProdutos').setTitle('Resultado da Pesquisa');
                                    //win.setTile('Produtos Categoria: ' + model[0].data.nome_categoria)
                                var store = Ext.getCmp('dataViewListaProdutosMercado').store.getProxy();
                                store.api.read = 'app/data/php/Produtos.php?action=searchProduto&nome_produto=' + pesquisa
                                Ext.getCmp('dataViewListaProdutosMercado').store.setProxy(store)
                                Ext.getCmp('dataViewListaProdutosMercado').store.load()
                                Ext.getCmp('windowPesquisar').close()

                            }
                            else {
                                
                            }
                        }
                    }
                ]
            })
        }

        else
            if(records[0].data.id == "Ações")
                Ext.widget('windowControlPanel')

    }
})