var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
    
Ext.define('AppName.view.produtos.GridListaProdutosCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.gridListaProdutosCliente',
    
    
    //title: 'Minhas Listas',
    region: 'center',
    autoShow: true,
    autoScroll: true,
    split: true,
    height: 400,
    ui: 'light',
    layout: 'border',
    
        
    items:[
        {
            xtype: 'gridpanel',
            id: 'gridListaProdutosCliente',
            store: 'storeMinhasListas',
            region: 'center',
            columnLines: true,
            enableLocking: true,
            plugins: [             
//                    cellEditing,
                
            {
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
             '<div>',
            '<div class="imagem-grid" style = "width:116px; height:106px; float:left; position:relative;" >',
                '<img style= "width: 100px; height: 100px; padding: 5px" align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}&id_kit={id_kit}"/>',
                '</div>',
             '<div class="texto-grid" style= "width:280px; float:left; position:relative;">',
                              
//               '<span><label align=top><b>Descrição:</b></label> {descricao}</span><br>',
//                '<span><label align=top><b>Código:</b></label> {codigo_produto}</span><br>',
//                '<span><b>Produto: </b>{nome_produto}</span>',
                '<table border=0px>'+
                '<tr>'+
                    '<td><b style=" font-size:12"> Produto:</b></td>' +  '<td style=" font-size:12"> {nome_produto} </td>' + 
                '</tr>'+
               // '<tr>'+
                //    '<td><b style=" font-size:12"> Código:</b></td>' +  '<td style=" font-size:12"> {codigo_produto} </td>' + 
               // '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:12"> Descrição:</b> </td>' +  '<td style=" font-size:12"> {descricao} </td>' + 
//                '</tr>'+
                '<tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> Válidade:</b> ' +  '<td style=" font-size:12"> {fabricacao} <b style=" font-size:12"> -- </b>{validade}</td>' + 
                '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:12"> Validade:</b> ' +  '<td style=" font-size:12"> {validade} </td>' + 
//                '</tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> por:</b> </td>' +  '<td style=" font-size:30; color:#F50"><b> R$: {valor1} </b></td>' + 
                '</tr>'+
            '</table>',
                '</div>',
            "</div>",
            {
                
            })
             }
         ],
            columns: [                     
                   
                     { 
                         header: 'Produto', 
                         dataIndex: 'nome_produto',
                         flex: 1,
                         align: 'center',
                     },
                     { 
                         header: 'Quantidade', 
                         dataIndex: 'qtd',
                         flex: 0.6,
                         align: 'center',
                     },
                     { 
                         header: 'Oferta', 
                         dataIndex: 'status_oferta',
                         flex: 0.4,
                         align: 'center',
                         renderer: function(val){
//                             console.log(val)
                             if(val == 1)
                                 return 'Sim'
                             else
                                 return 'Não'
                         }
                     },
                     {
            xtype: 'actioncolumn',
            header: '+',
            flex:0.1,
            sortable: false,
            align: 'center',
            menuDisabled: true,
            items:[
                {
                    icon: 'resources/icons/seta_up.png',
                    //tooltip: 'Delete Plant',
                    scope: this,
                    handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosCliente'),
                    records = grid.getSelectionModel().getSelection();

                    if(records.length === 0){
                        Ext.Msg.alert('ERRO','Atenção, nenhum registro selecionado');
                        return false;
                     }else{
                         records[0].data.qtd = records[0].data.qtd + 1;
//                        
                            Ext.Ajax.request({
                                url: 'app/data/php/ListaProdutosCliente.php?action=up&id=' + records[0].data.id_lista_cliente_has_lista_produtos_mercado +
                                    '&quantidade=' + records[0].data.qtd,
                                success: function(form, resp){
//                               
                                    Ext.getCmp('gridListaProdutosCliente').store.load()
//                                }
                                },
                                failure:function(form,resp){
                                   
                                    Ext.example.msg('Server Response', resp.result.msg);

                                }
                            });


                     }
                     }
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            header: '-',
            align: 'center',
            flex:0.1,
            sortable: false,
            menuDisabled: true,
            items:[
                {
                    icon: 'resources/icons/seta_down.png',
                    //tooltip: 'Delete Plant',
                    scope: this,
                    handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosCliente'),
                    records = grid.getSelectionModel().getSelection();

                    if(records.length === 0){
                        Ext.Msg.alert('Atenção, nenhum registro selecionado');
                        return false;
                     }else{
                         records[0].data.qtd = records[0].data.qtd - 1;
//                        
                            Ext.Ajax.request({
                                url: 'app/data/php/ListaProdutosCliente.php?action=down&id=' + records[0].data.id_lista_cliente_has_lista_produtos_mercado +
                                    '&quantidade=' + records[0].data.qtd,
                                success: function(form, resp){
//                               
                                    Ext.getCmp('gridListaProdutosCliente').store.load()
//                                }
                                },
                                failure:function(form,resp){
                                   
                                    Ext.example.msg('Server Response', resp.result.msg);

                                }
                            });


                     }
                     }
                }
            ]
        },
        {
            xtype: 'actioncolumn',
            header: 'X',
            align: 'center',
            flex:0.1,
            sortable: false,
            menuDisabled: true,
            items: [{
                icon: 'extjs/examples/kitchensink/resources/images/icons/fam/cross.gif',
                tooltip: 'Delete Plant',
                scope: this,
                handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosCliente'),
               records = grid.getSelectionModel().getSelection();
               
               if(records.length === 0){
                   Ext.Msg.alert('Atenção, nenhum registro selecionado');
                   return false;
                }
                else {
                    
                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja deletar o (s) registro(s) selecionado(s)?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                console.log(records[0].data)
                                if(records[0].data.id_kit != 0){
                                     Ext.Ajax.request({
                                        url: 'app/data/php/ListaProdutosCliente.php?action=deleteKit&id_lista_cliente_has_kits=' + records[0].data.id_lista_cliente_has_kits,
                                        success: function(form, resp){
        //                               
                                            Ext.getCmp('gridListaProdutosCliente').store.load()
                                            Ext.example.msg('Server Response', resp.result.msg);
        //                                }
                                        },
                                        failure:function(form,resp){

                                            Ext.example.msg('Server Response', resp.result.msg);

                                        }
                                    });
                                }
                                else {
                                    var store = grid.store;
                                    store.remove(records);
                                    grid.store.sync();
                                }
                                
                            }
                        }
                        
                    })
                    
                }
                }
         }]
        }

          ],
          viewConfig: {
                 plugins: [{
                    ddGroup: 'kits',
                    ptype  : 'gridviewdragdrop'
                   
                }],
            
              listeners: {
            drop: function(node, data, dropRec, dropPosition) {
//                console.log(data.records[0].data)
//                console.log()

                var isNaLista = false;
                this.store.remove(data)
                this.store.load()
                
                for(var i = 0; i < Ext.getCmp('gridListaProdutosCliente').store.data.items.length - 1; i++){
                
                        if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_produtos > 0){

                            if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_produtos == data.records[0].data.id_produtos){
        //                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
                                isNaLista =  true;
                                break;
                                                    }
                            else
                                isNaLista =  false;
                        }
        //                console.log(isNoPanfleto)
                }
                 if(!isNaLista){
                     var proxy = this.store.getProxy();
                    proxy.api.create = 'app/data/php/ListaProdutosCliente.php?action=insert&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
                    this.store.setProxy(proxy)
                    this.store.sync()
                 }
                else {
                    this.store.load()
                    Ext.Msg.alert('ERRO', 'Atenção, Produto já adicionado a lista');
                }

                 }
            }
          } 
        }
    ],
    tbar:[
        {
            text:'Nova Lista',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif',
            action: 'novaLista'
        },
//        {
//            text: 'Excluir',
//            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/delete.gif',
//            
//        },
        {
            text: 'Editar Lista',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
            action: 'editarLista'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Listas',
            id: 'comboboxListaProdutosCliente',
            labelWidth: 40,
            width: 200,
            store: 'produtos.StoreComboboxListaCliente',
            queryMode: 'local',
            displayField: 'nome_lista',
            listeners:{
                select:function(){
                    var proxy = Ext.getCmp('gridListaProdutosCliente').store.getProxy()
//                    console.log(store);
                    proxy.api.read = 'app/data/php/ListaProdutosCliente.php?action=select&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
                    Ext.getCmp('gridListaProdutosCliente').store.setProxy(proxy)
                    Ext.getCmp('gridListaProdutosCliente').store.load()
                }
            }
            
        }
    ]
})
