Ext.define('AppName.view.produtos.DataViewProdutos', {
//    extend: 'Ext.panel.Panel',
//    alias : 'widget.DataViewProdutos',
//
//    
//    xtype: 'dataview-multisort',
//    title: 'Multisort DataView',
//    width: 540,
//    height: 580,
//    layout: 'fit',
//    region: 'center',
//
//    initComponent: function() {
//        
//        this.items = {
//            xtype: 'dataview',
//            tpl: [
//                '<tpl for=".">',
//                    '<div class="dataview-multisort-item">',
//                        (!Ext.isIE6? '<img src="extjs/examples/kitchensink/resources/images/touch-icons/{thumb}" />' : 
//                        '<div style="position:relative;width:74px;height:74px;'+
//                                 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'extjs/examples/kitchensink/resources/images/touch-icons/{thumb}\')"></div>'),
//                        '<h3>{name}</h3>',
//                    '</div>',
//                '</tpl>'
//            ],
//            plugins: {
//                xclass: 'Ext.ux.DataView.Animated'
//            },
//            itemSelector: 'div.dataview-multisort-item',
//            store: Ext.create('Ext.data.Store', {
//                autoLoad: true,
//                sortOnLoad: true,
//                fields: ['name', 'thumb', 'url', 'type'],
//                proxy: {
//                    type: 'ajax',
//                    url : 'extjs/examples/kitchensink/resources/data/sencha-touch-examples.json',
//                    reader: {
//                        type: 'json',
//                        root: ''
//                    }
//                }
//            })
//        };
//        
//        this.callParent(arguments);
//        this.updateStoreSorters();
//    },
//    
//    
//    getSorters: function() {
//        var buttons = this.query('toolbar dataview-multisort-sortbutton'),
//            sorters = [];
//        Ext.Array.each(buttons, function(button) {
//            sorters.push({
//                property : button.getDataIndex(),
//                direction: button.getDirection()
//            });
//        });
//        
//        return sorters;
//    },
//    
//   
//    updateStoreSorters: function() {
//        var sorters = this.getSorters(),
//            view = this.down('dataview');
//
//        view.store.sort(sorters);
//    }
});