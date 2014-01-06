Ext.define('AppName.view.usuarios.WindowCadMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadMercado',
    id: 'windowCadMercado',
    
    title: 'Cadastro Supermercado',
    autoShow: true,
    height: 250,
    width: 480,
    layout: 'border',
    modal: true,
    
    items:[
        {
            xtype: 'formMercado',
            region: 'center'
            
        }
    ]
});