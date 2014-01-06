Ext.define('AppName.view.usuarios.WindowLogin',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowLogin',
    
    autoShow: true,
    width: 260,
    height: 160,
    layout: 'border',
    title: 'Login',
    border: false,
    items:[
        {
            xtype: 'formLogin',
            border: false,
            region: 'center'
        }
    ],
    
    buttons: [
        {
            text: 'Entrar',
            action: 'save'
        }
    ]
});