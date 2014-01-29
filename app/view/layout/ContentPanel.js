Ext.define('AppName.view.layout.ContentPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.contentPanel',
    
    id: 'content-panel',
    region: 'center', 
    split:true,
    border: false,
    items:[
        {
            xtype:'panel',
            id:'panelLogo',
            height: 320,
            bodyPadding: '20',
            border:false,
            split: true,
            layout: 'column',
            y: 400,
//            icon: 'resources/icons/logomercado.png',
//            bodyStyle: '<img align=top src="resources/icons/logomercado.png" style="width: 64px; height: 64px;"/>'
            items:[
                {
                    xtype: 'panel',
//                    border: false,
                    columnWidth: 0.5,
                     bodyStyle: 'border-color:#fff;',
                    
                },
                {
                    xtype: 'image',
                    id: 'logoAquiMercado',
                    autoShow: true,
                    split: true,
                    width: 350,
                    height: 280,
                    src: 'resources/icons/logomercado.png',
                    listeners:{
                        render:function(val){
                            console.log(Ext.getCmp('panelLogo').getViewRegion())
                            Ext.getCmp('logoAquiMercado').center()
                        }
                    }
                    
                    
                },
            ]
        }
    ]
      
})

