Ext.define('AppName.view.layout.DataViewAction',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewAction',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
         '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="resources/imagens/iconsHeaderPanelCliente/{icon}" title="{name:htmlEncode}" \n\
                            style="width: 42px; height: 42px; \n\
                            background-image: -webkit-linear-gradient(top,#fff,#f0f0f0); \n\
                            padding: 2px 2px 2px 2px;\n\
                            border-bottom: 1px solid #4e691f; \n\
                            border-top: 1px solid #4e691f; \n\
                            border-left: 1px solid #4e691f;\n\
                             border-right: 1px solid #4e691f;\n\
                            border-radius:8px;\n\
                            box-shadow: 3px 3px 2px #666;" ></div>',
//                        '<span class="x-editable">{name:htmlEncode}</span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
        
    ],
    
    itemSelector: 'div.thumb-wrap',
    overItemCls: 'x-item-over',
    multiSelect: false,
    singleSelect: true,
    // cls: 'x-image-view',
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['name', 'id', 'icon'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/imagens/iconsHeaderPanelCliente/action.json',
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