//Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('Ext.org', 'app/dataview');
//Ext.Loader.setPath('Ext.ux.DataView', 'extjs/src/ux/DataView');

Ext.define('AppName.view.dataview.OrgPanel', {
    extend: 'Ext.panel.Panel',
    requires: 'Ext.layout.container.Border',
    alias: 'widget.orgPanel',
    
    layout: 'fit',
    id: 'orgPanel',
    //autoShow:true,
    // height: 490,
    // width : 700,
     // tbar:[
     //            {
     //                text: 'atualizar',
     //                icon: 'resources/icons/refresh.png',
     //                handler: function(){
     //                    Ext.getCmp('idImageView').store.load()
     //                }
                    
     //            }
     //        ],
    autoScroll: true,
  
                //title: 'My Images',
                //layout: 'fit',
                //region: 'center',
//                padding: '5 5 5 0',
                items: {
                    xtype: 'imageview',
                   
                    trackOver: true
                }
        
        
        //this.callParent(arguments);
    
});
