Ext.define('AppName.view.panfletos.WindowCadProdutosPanfleto',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProdutosPanfleto',
    id:'windowCadProdutosPanfleto',
    
    autoShow: true,
    width: 1350,
    height: 500,
    layout: 'border',
    items: [
        {
            xtype: 'treeCategoriasGeral',
            margins: '0 0 0 0'
        },
        {
            xtype: 'orgPanel',
            layout: 'fit',
            title: 'Listra Produtos Geral',
            id: 'dataViewListaProdutosGeral',
            border: false,
            region: 'center'
//            trackOver: true
        },
        {
            xtype: 'gridListaProdutosPanfleto',
            region: 'east',
//            layout: 'fit'
        }
    ]
});