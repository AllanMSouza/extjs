Ext.define('AppName.view.layout.DataViewControlPanel',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewControlPanel',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
//        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" >',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6? '<img align=top src="resources/imagens/iconsHeaderPanelCliente/{icon}" style="width: 64px; height: 64px;"/>':               
                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
                ''),
                
                '</div>',
//                '<span><label style =" font-size:10;color:#333; width: 64px;">{name}</label></span>',
            '</div>',
        '</tpl>'
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