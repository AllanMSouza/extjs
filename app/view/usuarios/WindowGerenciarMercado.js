Ext.define('AppName.view.usuarios.WindowGerenciarMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGerenciarMercado',
    
    autoShow: true,
    width: 820,
    height: 400,
    layout: 'border',
    title: 'Gerenciar Supermercados',
    items:[
        {
            xtype:'gridListaMercados',
            region: 'center'
        }
    ]
});