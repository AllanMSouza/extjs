Ext.define('AppName.view.usuarios.WindowCadCliente',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadCliente',
    id: 'windowCadCliente',
    
    autoShow: true,
    modal: true,
    height: 230,
    width: 480,
    layout: 'border',
    title: 'Cadastro de Clientes',
    
    items:[
        {
            xtype: 'formCliente',
            region: 'center'
            
        }
    ]
});