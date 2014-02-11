Ext.define('AppName.view.paineldecontrole.DataViewControlPanelMercado',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewControlPanelMercado',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
//        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        
         '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="resources/imagens/controlpanel/{icon}" style="width: 128px; height: 128px;" title="{name:htmlEncode}"></div>',
                        '<span>{name:htmlEncode}</span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
    ],
    
//    itemSelector: 'div.thumb-wrap',
//    multiSelect: true,
    singleSelect: true,
    cls: 'x-image-view',
    trackOver: true,
    overItemCls: 'x-item-over',
    itemSelector: 'div.thumb-wrap',
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['name', 'id', 'icon'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/imagens/controlpanel/controlPanelIcons.json',
//                    url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente_Legenda.json',
                    reader: {
                        type: 'json',
                        root: ''
                    }
                }
            })
        
        this.mixins.dragSelector.init(this);

        
        this.callParent();
    },

});