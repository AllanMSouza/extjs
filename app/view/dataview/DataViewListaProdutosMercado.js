Ext.define('AppName.view.dataview.DataViewListaProdutosMercado', {
    extend: 'Ext.view.View',
    
    alias : 'widget.dataViewListaProdutosMercado',
    id: 'dataViewListaProdutosMercado',
//    layout: 'fit',
//    requires: ['Ext.ux.DataView.Draggable'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6? '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 100px; height: 90px; padding: 5px;"/>':               
                    '<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>'),
                '<span><label style =" width=100px height=10px">{nome_produto}</label></span>',
                '</div>',
                
            '</div>',
        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
    store : 'produtos.StoreImageView',
    
    //autoScroll: true,
    
    initComponent: function() {
        
//        
        this.mixins.dragSelector.init(this);
        console.log(this)
//        this.mixins.draggable.init( this, {
//            ddConfig: {
//                ddGroup: 'organizerDD'
//            },
//            ghostTpl: [
//                '<tpl for=".">',
//                    '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',               
//                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
//                '</tpl>',
//                '<div class="count">',
//                    '{[nome_produto.length]} images selected',
//                '<div>'
//            ]
//        });
        
        this.callParent();
    },
    
    listeners: {
        beforerender: function(){
            
        }
//        click: {
//            element: 'el', //bind to the underlying el property on the panel
//            fn: function(){ console.log('click el'); }
//        },
//selectionchange: function(model, records) {
//                //console.log(Ext.getCmp('panel-descricao'))
//                    //console.log(model, records[0].data)
//                    if(Ext.getCmp('panel-descricao').collapsed == 'right'){
//                        Ext.getCmp('panel-descricao').expand()
//                        console.log(records[0].data.name)
//                        Ext.getCmp('panel-descricao').update('Descrição icone: ' + records[0].data.name)
//                     }
//                     
//                     else{
//                         console.log(records[0].data.name)
//                         Ext.getCmp('panel-descricao').update('Descrição icone: ' + records[0].data.name)
//                     }
//    }
    }
});
