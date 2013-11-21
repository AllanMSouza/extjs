Ext.define('AppName.view.kits.DataViewProdutosKit', {
    extend: 'Ext.view.View',
    alias : 'widget.dataViewProdutosKit',
    id : 'dataViewProdutosKit',

    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" >',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6? '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 116px; height: 106px; padding: 5px;"/>':               
                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
                ''),
                '<span><label style =" width=100px height=10px">{nome_produto}</label></span>',
                '</div>',
                
            '</div>',
        '</tpl>'
    ],
    
//    itemSelector: 'div.thumb-wrap',
//    multiSelect: false,
//    singleSelect: true,
    cls: 'x-image-view',
    //autoScroll: true,
    
    initComponent: function() {
        this.store = 'kits.StoreDataViewKits'
        
//        this.mixins.dragSelector.init(this);
//        console.log(this)
//        console.log(Ext.getCmp(this.id))
       
        
        this.callParent();
    }
});




