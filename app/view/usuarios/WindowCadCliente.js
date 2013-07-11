Ext.define('AppName.view.usuarios.WindowCadCliente',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadCliente',
    
    autoShow: true,
    height: 400,
    width: 700,
    layout: 'border',
    title: 'Cadastro de Clientes',
    
    items:[
        {
            xtype: 'formCliente',
            region: 'center'
            
        }
    ]
});