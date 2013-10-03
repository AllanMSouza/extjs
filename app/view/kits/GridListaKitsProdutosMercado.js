Ext.define('AppName.view.kits.GridListaKitsProdutosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaKitsProdutosMercado',
    id: 'gridListaKitsProdutosMercado',
    
    autoShow: true,
    autoScroll: true,
//    region: 'east',
//    width: 300,
//    height: 300,
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
//                '<tr>'+
//                    '<td> <b style=" font-size:12"> Descrição:</b> </td>' +  '<td style=" font-size:12"> {descricao} </td>' + 
//                '</tr>'+
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