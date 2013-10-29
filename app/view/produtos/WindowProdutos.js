Ext.define('AppName.view.produtos.WindowProdutos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowProdutos',
            
    title: 'Produtos',
    width: 630,
    height: 450,
    autoShow: true,
   // autoScroll: true,
    layout: 'border',
    minimizable: true,
    //minimizeWin(win)
    //renderTo: 'content-panel',
    
    items:[
        {
            xtype: 'panel',
            title: 'Lista Produtos Mercado',
            ui: 'light',
            split: true,
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
    ]
    
});