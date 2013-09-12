Ext.define('AppName.view.kits.WindowCadKitsProdutos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadKitsProdutos',
    
    autoShow: true,
    width: 1000,
    height: 500,
    closable: true,
    maximizable: true,
    layout: 'border',
    items:[
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
            region: 'center',
            trackOver: true,
           
        },
        
    ]
});