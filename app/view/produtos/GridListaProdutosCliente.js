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
                    //cellEditing,
                
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
                    '<td> <b style=" font-size:12"> Descrição:</b> </td>' +  '<td style=" font-size:12"> {descricao} </td>' + 
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
                                                
                         header: 'Quantidade', 
                         dataIndex: 'quantidade',
                         value: 1,
                         flex: 0.5, 
                           summaryType: 'sum',
                            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                                value = 1;
                                return value;
                            },
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                value = 1;
                                return value;
                            },
                             field: {
                                xtype: 'numberfield'
                        }
                     },
                     
          ],
          viewConfig: {
                 plugins: [{
                    ddGroup: 'organizerDD',
                    ptype  : 'gridviewdragdrop'
                   
                }],
            
              listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                console.log(data.records[0].data)
//                console.log()
                var proxy = this.store.getProxy();
                proxy.api.create = 'app/data/php/ListaProdutosCliente.php?action=insert&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
                this.store.setProxy(proxy)
                this.store.sync()

                 }
            }
          } 
        }
    ],
    tbar:[
        {
            text:'Nova Lista',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
        },
        {
            text: 'Excluir',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/delete.gif',
        },
        {
            text: 'Editar',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Listas',
            id: 'comboboxListaProdutosCliente',
            labelWidth: 40,
            width: 150,
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
