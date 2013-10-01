Ext.define('AppName.view.kits.WindowCadKit',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadKit',
    
    modal: true,
    autoShow: true,
    title: 'Cadastro de Kits',
    layout: 'border',
    width: 400,
    height: 280,
    border: false,
    items:[
        {
            xtype: 'formCadKit'
        }
    ]
});