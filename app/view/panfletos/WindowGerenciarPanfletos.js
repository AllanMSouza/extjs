Ext.define('AppName.view.panfletos.WindowGerenciarPanfletos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGerenciarPanfletos',
    
    title: 'Gerenciar Panfletos',
    autoShow: true,
    border: false,
    height: 400,
    width: 800,
    layout: 'border',
    
    items:[
        {
            xtype: 'gridListaPanfletos'
        }
    ]
    
});