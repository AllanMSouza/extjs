//Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('Ext.org', 'app/dataview');
Ext.Loader.setPath('Ext.ux.DataView', 'extjs/src/ux/DataView');

Ext.define('AppName.view.dataview.OrgPanel', {
    extend: 'Ext.panel.Panel',
    requires: 'Ext.layout.container.Border',
    alias: 'widget.orgPanel',
    
    layout: 'border',
    //autoShow:true,
    // height: 490,
    // width : 700,
    
    initComponent: function() {
        this.items = [
//            {
//                xtype: 'albumtree',
//                region: 'west',
//                padding: 5,
//                width: 200
//            },
            {
                xtype: 'panel',
                title: 'My Images',
                layout: 'fit',
                region: 'center',
                padding: '5 5 5 0',
                items: {
                    xtype: 'imageview',
                    /*  (add a '/' at the front of this line to turn this on)
                    listeners: {
                        containermouseout: function (view, e) {
                            Ext.log('ct', e.type);
                        },
                        containermouseover: function (view, e) {
                            Ext.log('ct', e.type);
                        },
                        itemmouseleave: function (view, record, item, index, e) {
                            Ext.log('item', e.type, ' id=', record.id);
                        },
                        itemmouseenter: function (view, record, item, index, e) {
                            Ext.log('item', e.type, ' id=', record.id);
                        }
                    },/**/
                    trackOver: true
                }
            }
        ];
        
        this.callParent(arguments);
    }
});
