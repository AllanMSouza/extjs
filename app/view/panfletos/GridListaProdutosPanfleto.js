Ext.define('AppName.view.panfletos.GridListaProdutosPanfleto',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaProdutosPanfleto',
    id:'gridListaProdutosPanfleto',
    
    autoShow: true,
    width: 400,
    title: 'Lista Produtos Panfleto',

    region: 'east',
//    layout: 'border',
    split: true,
    columnLines: true,
            enableLocking: true,
    store: 'panfletos.StoreListaProdutosPanfletos',
    /*tbar:[
        {
            xtype: 'button',
            text: 'Novo Produto',
            
        },
        {
            xtype: 'button',
            text: 'Editar',
            
        }
    ],*/
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
               // '<tr>'+
                //    '<td><b style=" font-size:12"> Código:</b></td>' +  '<td style=" font-size:12"> {codigo_produto} </td>' + 
               // '</tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> Descrição:</b> </td>' +  '<td style=" font-size:12"> {descricao} </td>' + 
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
            flex:0.5
        },
        { 
            header: 'Nome Produto', 
            dataIndex: 'nome_produto', 
            flex:1
        },
        { 
            header: 'Valor', 
            dataIndex: 'valor', 
            flex: 0.5
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                icon: 'extjs/examples/kitchensink/resources/images/icons/fam/cross.gif',
                tooltip: 'Delete Plant',
                scope: this,
                handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosPanfleto'),
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
               ddGroup: 'organizerDD',
               ptype  : 'gridviewdragdrop'

           }],

         listeners: {
       drop: function(node, data, dropRec, dropPosition) {
           var isNoPanfleto = false;
            this.store.remove(data)
            
           for(var i = 0; i < Ext.getCmp('gridListaProdutosPanfleto').store.data.items.length - 1; i++){
                
                if(Ext.getCmp('gridListaProdutosPanfleto').store.data.items[i].data.id_produtos > 0){
                    
                    if(Ext.getCmp('gridListaProdutosPanfleto').store.data.items[i].data.id_produtos == data.records[0].data.id_produtos){
//                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
                        isNoPanfleto =  true;
                        break;
                                            }
                    else
                        isNoPanfleto =  false;
                }
//                console.log(isNoPanfleto)
        }
           
           
           if(!isNoPanfleto){
               Ext.widget('windowValorProdutoPanfleto')
                var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection()
     //           console.log(records[0].data.id_pagina_panfleto)
                Ext.getCmp('fieldPaginaPanfletoIdPaginaPanfleto').setValue(records[0].data.id_pagina_panfleto)
     //           console.log(data.records[0].data.id_produtos)
                Ext.getCmp('fieldProdutosIdProdutos').setValue(data.records[0].data.id_produtos)
                this.store.sync()
                this.store.load()
               
           }
           else {
               this.store.load()
               Ext.Msg.alert('ERRO', 'Atenção, Produto já adicionado a lista');
               
           }
           
////                console.log()
//           var proxy = this.store.getProxy();
//           proxy.api.create = 'app/data/php/ListaProdutosCliente.php?action=insert&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
//           this.store.setProxy(proxy)
//           this.store.sync()

            }
       }
     },
        
       
        
    
    
});