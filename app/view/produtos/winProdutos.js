Ext.define('AppName.view.produtos.winProdutos',{
    extend: 'Ext.window.Window',
    alias: 'widget.winProdutos',
            
    title: 'Produtos',
    width: 500,
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