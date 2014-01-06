Ext.define('AppName.view.kits.WindowCadKit',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadKit',
    id: 'windowCadKit',
    
    modal: true,
    autoShow: true,
    title: 'Cadastro de Kits',
    layout: 'border',
    width: 500,
    height: 280,
    border: false,
    items:[
        {
            xtype: 'formCadKit'
        }
    ]
});