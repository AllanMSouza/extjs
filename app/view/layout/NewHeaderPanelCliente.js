Ext.define('AppName.view.layout.NewHeaderPanelCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.newHeaderPanelCliente',
    
    region: 'north', 
    height:90, 
    frameHeader:false, 
//    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));' +
                'background-image: -webkit-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -moz-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -o-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: linear-gradient(top,#8fc33a,#739b2e);' +
                'border-bottom: 1px solid #567422;' +
                'border-top: 1px solid #8fc33a;' +
                'border-left: 1px solid #8fc33a;' +
                'border-right: 1px solid #8fc33a;' ,
    
    
    items:[
        {
            xtype:'dataViewNewHeaderPanelCliente',
            region: 'west'
        },
//        {
//            xtype: 'dataViewControlPanel',
//            region: 'east',
//            width: 280
//                
//        }
        {
            xtype: 'panel',
            region: 'center',
            layout: 'hbox',
            bodyStyle: 'background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));' +
                'background-image: -webkit-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -moz-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -o-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: linear-gradient(top,#8fc33a,#739b2e);' +
                'border-bottom: 0px solid #567422;' +
                'border-top: 0px solid #8fc33a;' +
                'border-left: 0px solid #8fc33a;' +
                'border-right: 0px solid #8fc33a;' ,
            bodyPadding: '20 10',
            items:[
                {
                    xtype: 'textfield',
                    id:'textfieldSearchProdutosGeral',
                    style: 'font-size:20px;',
                    width: 300,
                    height: 40,
                    emptyText: 'Informe aqui sua pesquisa',
                    
                },
                {
                    xtype: 'button',
                    text: 'Pesquisar',
                    icon: 'resources/icons/search-icon.png',
                    width: 150,
                    scale:'large', 
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
                        }
                        else {
                            
                        }
                    }
                }
            ]
        },
        {
            xtype: 'button',
            region: 'east',
            text: 'Ações',
            width: 150,
            icon: 'resources/icons/action.png',
            scale: 'large',
            height: 60,
            iconAlign: 'top',
            margins: '15 15 15 15',
            menu: {
                xtype: 'menu',
                plain: true,
                width: 150,
             
                    items: [
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: 'Entrar',
                            icon: 'resources/icons/log_in.png',
                            handler:function(){
                                     Ext.widget('windowLogin')
                            }
                            
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: 'Meus Pedidos',
                            icon: 'resources/imagens/iconsHeaderPanelCliente/pedidos_.png',
                            handler: function(){
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
                            
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: 'Meu Perfil',
                            icon: 'resources/imagens/iconsHeaderPanelCliente/cadastro.png',
                            handler: function(){
                                var grid = Ext.widget('gridListaClientes')
                                grid.hide();
                                var record = Ext.getCmp('gridListaClientes').store.data.items[0]
                    //            console.log(record)
                                var editWindow = Ext.widget('windowCadCliente')
                                var editForm = editWindow.down('form');
                                editForm.loadRecord(record);
                            }
                            
                        },
                        {
                            xtype: 'button',
                            scale: 'large',
                            text: 'Sair',
                            icon: 'resources/imagens/iconsHeaderPanelCliente/sair.png',
                            handler: function(){
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
                            
                        },
                    ]
                
            }
        }
//        {
//            xtype:'button',
//            text:'Pesquisar',
////            region: 'west'
//            
//        },
//        {
//            xtype: 'combobox',
//            id:'idDomboboxOpcoes',
////            fieldLabel: 'Selecionar:',
////            id: 'comboboxFiltrosPedido',
//            store:  Ext.create('Ext.data.Store', {
//            fields: ['abbr', 'name'],
//            data : [
//                {"abbr":"Entrar", "name":"Entrar"},
//                {"abbr":"Meus Pedidos", "name":"Meus Pedidos"},
//                {"abbr":"Meu Cadastro", "name":"Meu Cadastro"},
//                {"abbr":"sair", "name":"Sair"},
//                
//            ]
//            }),
//            labelWidth: 60,
//            region: 'east',
//            width: 250,
//            queryMode: 'local',
//            displayField: 'name',
//            valueField: 'abbr',
//            margins: '0 5 0 0',
//            listeners:{
//                select:function(a,b,c){
////                    console.log(b[0].data.name)
//                if(b[0].data.name == "Meus Pedidos"){
//                Ext.Ajax.request({
//                    url: 'app/data/php/Configuracoes.php?action=getCancelamento',
//                    
//                    success: function(resp,b){
//                        var data = Ext.decode(resp.responseText)
////                        console.log(data.cancelamento)
//                        Ext.getCmp('podeCancelar').setValue(data.cancelamento)
//                    }
//                });
//                Ext.widget('windowAcompanharPedidos')
//            }
//            else {
//                if(b[0].data.name == "Meu Cadastro"){
//                    
//                    var grid = Ext.widget('gridListaClientes')
//                    grid.hide();
//                    var record = Ext.getCmp('gridListaClientes').store.data.items[0]
//        //            console.log(record)
//                    var editWindow = Ext.widget('windowCadCliente')
//                    var editForm = editWindow.down('form');
//                    editForm.loadRecord(record);
//                    
//                }
//                if(b[0].data.name == "Sair"){
//                    
//                    Ext.Msg.show({
//                        title: 'Confirmação',
//                        msg: 'Tem certeza que deseja sair desta aplicação ?',
//                        buttons: Ext.Msg.YESNO,
//                        icon: Ext.MessageBox.WARNING,
//                        escope: this,
//                        width: 450,
//                        fn : function(btn, ev){
//                            if(btn == 'yes'){
//                                viewRedir('Logout','telaprincipal');   
//                            }
//                        }
//                        
//                    })
//                    
//                }
//                
//                if(b[0].data.name == "Entrar"){
//                    Ext.widget('windowLogin')
////                    console.log('Entrar')
//                }
//                    
//            }
//                }
//            }
//        },
        
    ]
});