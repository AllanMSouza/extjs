Ext.define('AppName.view.usuarios.WindowGerenciarClientes',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGerenciarClientes',
    
    autoShow: true,
    width: 750,
    height: 400,
    layout: 'border',
    title: 'Gerenciar Clientes',
    items:[
        {
            xtype:'gridListaClientes',
            region: 'center'
        }
    ]
});