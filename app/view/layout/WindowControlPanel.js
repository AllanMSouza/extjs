Ext.define('AppName.view.layout.WindowControlPanel',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowControlPanel',
    
    closable: false,
    autoShow: true,
    title: 'Painel de Controle',
    width: 300,
    height: 150,
    layout: 'border',
    items:[
        {
            xtype: 'panel',
            region: 'center',
            layout: 'fit',
            items:[
                {
                    xtype: 'dataViewControlPanel'
                }
            ]
        }
    ]
});