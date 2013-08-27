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
            xtype: 'orgPanel',
            region: 'center',
            ui: 'light'
            
        }
    ]
    
});