Ext.define('AppName.view.kits.WindowCadProdutosKitsMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProdutosKitsMercado',
    
    autoShow: true,
    width: 1200,
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
            xtype: 'panel',
            title: 'Lista Produtos Mercado',
            autoScroll: true,
            layout: 'fit',
            region: 'center',
            items:[
                {
                    xtype: 'dataViewListaProdutosMercado',
//                    region: 'center',
                    
        //            id: 'dataViewListaProdutosMercado',
                    border: false,
//                    region: 'center',
        //            trackOver: true,

                },
            ]
        },
        {
            xtype: 'gridListaKitsProdutosMercado',
            region: 'east'
        }
        
    ]
});