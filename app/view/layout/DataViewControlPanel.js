Ext.define('AppName.view.layout.DataViewControlPanel',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewControlPanel',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
//        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        
         '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="resources/imagens/iconsHeaderPanelCliente/{icon}" title="{name:htmlEncode}" \n\
                            style="width: 64px; height: 64px; \n\
                            background-image: -webkit-linear-gradient(top,#fff,#f0f0f0); \n\
                            padding: 5px 5px 5px 5px;\n\
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
//        '<tpl for=".">',
//            '<div class="thumb-wrap" >',
//                '<div class="thumb" style= "">',
//                    (!Ext.isIE6? '<img align=top src="resources/imagens/iconsHeaderPanelCliente/{icon}" style="width: 64px; height: 64px;"/>':               
//                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
//                ''),
//                
//                '</div>',
////                '<span><label style =" font-size:10;color:#333; width: 64px;">{name}</label></span>',
//            '</div>',
//        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
    //autoScroll: true,
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['name', 'id', 'icon'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/imagens/iconsHeaderPanelCliente/controlPanel.json',
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
    
//    listeners: {
//
//selectionchange: function(model, records) {
//           
////      
//                       
//        }
//    }
});