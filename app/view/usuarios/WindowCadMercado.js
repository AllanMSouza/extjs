Ext.define('AppName.view.usuarios.WindowCadMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadMercado',
    
    title: 'Cadastro Supermercado',
    autoShow: true,
    height: 400,
    width: 700,
    layout: 'border',
    
    items:[
        {
            xtype: 'formMercado',
            region: 'center'
            
        }
    ]
});