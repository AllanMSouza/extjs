Ext.Loader.setPath('Ext.ux.DataView', 'extjs/src/ux/DataView');

Ext.define('AppName.view.dataview.PanelImageListaProdutosMercado', {
    extend: 'Ext.panel.Panel',
    //requires: 'Ext.layout.container.Border',
    alias: 'widget.panelImageListaProdutosMercado',
    
    layout: 'fit',
    //autoShow:true,
    // height: 490,
    // width : 700,
    autoScroll: true,
    items:[ 
        {
        xtype: 'dataViewListaProdutosMercado',
        trackOver: true
        }
    ]
        
        //this.callParent(arguments);
    
});
