Ext.define('AppName.view.kits.GridListaKitsProdutosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaKitsProdutosMercado',
    id: 'gridListaKitsProdutosMercado',
    
    autoShow: true,
    autoScroll: true,
//    region: 'east',
//    width: 300,
//    height: 300,
    ui: 'light',
    split: true,
    title: 'Produtos kit: ',
    columnLines: true,
    enableLocking: true,
    store: 'kits.StoreKitsHasProdutos',
    layout: 'fit',
    
    plugins: [             
//                    cellEditing,
                
            {
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
            '<div>',
            '<div class="imagem-grid" style = "width:100px; height:100px; float:left; position:relative;" >',
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',
                '</div>',
             '<div class="texto-grid" style= "width:250px; float:left; position:relative;">',
                              
//               '<span><label align=top><b>Descrição:</b></label> {descricao}</span><br>',
//                '<span><label align=top><b>Código:</b></label> {codigo_produto}</span><br>',
//                '<span><b>Produto: </b>{nome_produto}</span>',
                '<table border=0px>'+
                '<tr>'+
                    '<td><b style=" font-size:12"> Produto:</b></td>' +  '<td style=" font-size:12"> {nome_produto} </td>' + 
                '</tr>'+
                '<tr>'+
                    '<td><b style=" font-size:12"> Código:</b></td>' +  '<td style=" font-size:12"> {codigo_produto} </td>' + 
                '</tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> por:</b> </td>' +  '<td style=" font-size:30; color:#55F"><b> R$: {valor} </b></td>' + 
                '</tr>'+
            '</table>',
                '</div>',
            "</div>",
            {
                
            })
             }
         ],
            
    columns:[
        {
            header: 'Código',
            dataIndex: 'codigo_produto',
            flex: 0.5
        },
        {
            header: 'Produto',
            dataIndex: 'nome_produto',
            flex: 1
        },
        {
            header: 'Itens',
            dataIndex: 'quantidade',
            align: 'center',            
            flex: 0.4
        },
        {
            xtype: 'actioncolumn',
            header: '+',
            flex:0.2,
            sortable: false,
            align: 'center',
            menuDisabled: true,
            items:[
                {
                    icon: 'resources/icons/seta_up.png',
                    //tooltip: 'Delete Plant',
                    scope: this,
                    handler: function(){
                    var grid = Ext.getCmp('gridListaKitsProdutosMercado'),
                    records = grid.getSelectionModel().getSelection();

                    if(records.length === 0){
                        Ext.Msg.alert('ERRO','Atenção, nenhum registro selecionado');
                        return false;
                     }else{
                         records[0].data.quantidade = records[0].data.quantidade + 1;
//                        
                            Ext.Ajax.request({
                                url: 'app/data/php/KitsHasProdutos.php?action=up&id=' + records[0].data.id_kits_has_lista_produtos_mercado +
                                    '&quantidade=' + records[0].data.quantidade,
                                success: function(form, resp){
//                               
                                    Ext.getCmp('gridListaKitsProdutosMercado').store.load()
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
            flex:0.2,
            sortable: false,
            menuDisabled: true,
            items:[
                {
                    icon: 'resources/icons/seta_down.png',
                    //tooltip: 'Delete Plant',
                    scope: this,
                    handler: function(){
                    var grid = Ext.getCmp('gridListaKitsProdutosMercado'),
                    records = grid.getSelectionModel().getSelection();

                    if(records.length === 0){
                        Ext.Msg.alert('Atenção, nenhum registro selecionado');
                        return false;
                     }else{
                         records[0].data.quantidade = records[0].data.quantidade - 1;
//                        
                            Ext.Ajax.request({
                                url: 'app/data/php/KitsHasProdutos.php?action=down&id=' + records[0].data.id_kits_has_lista_produtos_mercado +
                                    '&quantidade=' + records[0].data.quantidade,
                                success: function(form, resp){
//                               
                                    Ext.getCmp('gridListaKitsProdutosMercado').store.load()
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
            flex:0.2,
            sortable: false,
            menuDisabled: true,
            items: [{
                icon: 'extjs/examples/kitchensink/resources/images/icons/fam/cross.gif',
                tooltip: 'Delete Plant',
                scope: this,
                handler: function(){
                    var grid = Ext.getCmp('gridListaKitsProdutosMercado'),
               records = grid.getSelectionModel().getSelection();
               
               if(records.length === 0){
                   Ext.Msg.alert('Atenção, nenhum registro selecionado');
                   return false;
                }else{
                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja deletar o (s) registro(s) selecionado(s)?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                var store = grid.store;
                                        store.remove(records);
                                    grid.store.sync();
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
                
                Ext.widget('windowQuantidadeItems')
                Ext.getCmp('kits_id_kit').setValue(Ext.getCmp('textfieldIdKit').getValue())
                Ext.getCmp('lista_produtos_mercado_id_lista_produtos_mercado').setValue(data.records[0].data.id_lista_produtos_mercado)
                this.store.sync()
//                var proxy = this.store.getProxy();
//                proxy.api.create = 'app/data/php/KitsHasProdutos.php?action=insert&id_kit=' + Ext.getCmp('textfieldIdKit').getValue()
//                this.store.setProxy(proxy)
//                this.store.sync()

                 }
            }
          }
    
});