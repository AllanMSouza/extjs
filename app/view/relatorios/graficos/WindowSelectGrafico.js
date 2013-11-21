Ext.define('AppName.view.relatorios.graficos.WindowSelectGrafico',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowSelectGrafico',
    
    autoShow: true,
    width: 800,
    height:400,
    items:[
        {
            xtype: 'panelSelectGrafico',
            region: 'center'
        }
    ]
});