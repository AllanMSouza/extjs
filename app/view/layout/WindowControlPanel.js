Ext.define('AppName.view.layout.WindowControlPanel',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowControlPanel',
    
    closable: true,
    autoShow: true,

    title: 'Painel de Controle',
    width: 350,
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