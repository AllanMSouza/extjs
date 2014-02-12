Ext.define('AppName.view.layout.NewHeaderPanelCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.newHeaderPanelCliente',
    
    region: 'north', 
    height:100, 
    frameHeader:false, 
//    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));' +
                'background-image: -webkit-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -moz-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -o-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: linear-gradient(top,#8fc33a,#739b2e);' +
                'border-bottom: 1px solid #567422;' +
                'border-top: 1px solid #8fc33a;' +
                'border-left: 1px solid #8fc33a;' +
                'border-right: 1px solid #8fc33a;' ,
    
    
    items:[
        {
            xtype:'dataViewNewHeaderPanelCliente',
            region: 'west'
        },
        {
            xtype: 'dataViewControlPanel',
            region: 'east',
            width: 280
                
        }
    ]
});