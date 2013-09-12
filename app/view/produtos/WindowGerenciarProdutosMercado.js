Ext.define('AppName.view.produtos.WindowGerenciarProdutosMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGerenciarProdutosMercado',
    
    autoShow: true,
    closable: true,
    layout: 'border',
    width: 1350,
    height: 500,
    items:[
        {
             xtype: 'treeCategoriasGeral',
             margins: '0 0 0 0',
             width: 250
        },
        {
            xtype: 'orgPanel',
            layout: 'fit',
            title: 'Listra Produtos Geral',
            id: 'dataViewListaProdutosGeral',
            border: false,
            region: 'center',
            trackOver: true,
           
        },
        {
            xtype: 'gridListaProdutosMercado',
            id: 'gridListaProdutosMercado',
            region: 'east',
//            margins: '5 5 5 0'

        },
    ]
});