Ext.define('AppName.view.dataview.DataViewListaProdutosMercadoMenor', {
    extend: 'Ext.view.View',
    
    alias : 'widget.dataViewListaProdutosMercadoMenor',
    id: 'dataViewListaProdutosMercadoMenor',
//    layout: 'fit',
//    requires: ['Ext.ux.DataView.Draggable'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable2'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" style="">',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6 ? '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 64px; height: 64px; padding: 5px;"/>':               
                    '<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>'
            ),
                
               '<span style=" font-size:30; color:#F50"><b> {valor1} </b></span>',               
               
                '</div>',
//                  '<span><label style =" width:300px">{nome_produto}</label></span>',
            '</div>',
        '</tpl>'
// '<tpl for=".">',
//                    '<div class="thumb-wrap" id="{name:stripTags}">',
//                        '<div class="thumb"><img src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" title="{name:htmlEncode}" \n\
//                            style="width: 116x; height: 106px; \n\
//                            background-image: -webkit-linear-gradient(top,#fff,#f0f0f0); \n\
//                            padding: 5px 5px 5px 5px;\n\
//                            border-bottom: 1px solid #4e691f; \n\
//                            border-top: 1px solid #4e691f; \n\
//                            border-left: 1px solid #4e691f;\n\
//                             border-right: 1px solid #4e691f;\n\
//                            border-radius:8px;"></div>',
//                        
//                    '</div>',
//                '</tpl>',
//                '<div class="x-clear"></div>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
    store : 'produtos.StoreCrudProdutosMercado',
    
    //autoScroll: true,
    
    initComponent: function() {
        
//        
        this.mixins.dragSelector.init(this);
        console.log(this.mixins.draggable)
        this.mixins.draggable.init( this, {
            ddConfig: {
                ddGroup: 'kits'
            },
            ghostTpl: [
                '<tpl for=".">',
                    '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',               
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                '</tpl>',
                '<div class="count">',
                    '{[nome_produto.length]} images selected',
                '<div>'
            ]
        });
        
        this.callParent();
    },
    
    listeners: {
      itemdblclick:function(record, item, index, e, eOpts){
//          console.log(record,item)
//      var isNaLista = false;
////                this.store.remove(data)
//                this.store.load()
//                
//                for(var i = 0; i < Ext.getCmp('gridListaProdutosCliente').store.data.items.length ; i++){
//                
//                        if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_produtos > 0){
//
//                            if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_produtos == item.data.id_produtos){
//        //                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
//                                isNaLista =  true;
//                                break;
//                                                    }
//                            else
//                                isNaLista =  false;
//                        }
//        //                console.log(isNoPanfleto)
//                }
//                 if(!isNaLista){
//                     var proxy = this.store.getProxy();
//                    proxy.api.create = 'app/data/php/ListaProdutosCliente.php?action=insert&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
//                    this.store.setProxy(proxy)
//                    this.store.add(item)
//                    this.store.sync()
//                 }
//                else {
//                    this.store.load()
//                    Ext.Msg.alert('ERRO', 'Atenção, Produto já adicionado a lista');
//                }

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
