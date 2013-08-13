Ext.define('AppName.view.produtos.GridListaProdutosGeral',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaProdutosGeral',
    
    autShow: true,
    id: 'gridListaProdutosGeral',
    columnLines: true,
    enableLocking: true,
    store: 'produtos.StoreCrudProdutos',
    
    plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 100px; height: 90px; padding: 5px;/>',               
                '<span style="padding-left:15px"><label align=top><b>Descrição:</b> {descricao}</label></span><br>',
                '<span><b>Produto: </b>{nome_produto}</span>',
            {
//                
            })
     }],
    tbar:[
        {
            xtype: 'textfield',
            width: 300,
            emptyText: 'Informe aqui sua pesquisa'
        },
        {
            xtype: 'button',
            text: 'Pesquisar'
        }
    ],
    columns: [
        {header: 'Código', dataIndex: 'codigo_produto',flex:1},
        {header: 'Nome', dataIndex: 'nome_produto', flex: 2},
        
    ],
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    }    
});