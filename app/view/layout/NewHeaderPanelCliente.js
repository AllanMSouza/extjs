Ext.define('AppName.view.layout.NewHeaderPanelCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.newHeaderPanelCliente',
    
    region: 'north', 
    height:100, 
    frameHeader:false, 
    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background:#fff; border-color:#c0c0c0;',
    items:[
        {
            xtype:'dataViewNewHeaderPanelCliente',
            region: 'west'
        },
        {
            xtype: 'dataViewControlPanel',
            region: 'east',
            width: 300
                
        }
    ]
});