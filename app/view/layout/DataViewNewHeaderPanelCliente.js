Ext.define('AppName.view.layout.DataViewNewHeaderPanelCliente',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewNewHeaderPanelCliente',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
//        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" >',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6? '<img align=top src="resources/imagens/iconsHeaderPanelCliente/{icon}" style="width: 64px; height: 64px; padding: 1px;"/>':               
                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
                ''),
//                '<span><label style =" width=64px height=20px">{name}</label></span>',
                '</div>',
                
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
                    url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente.json',
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
    
    listeners: {

selectionchange: function(model, records) {
           
//           console.log(model,records)
           
           var nomeCategoria = records[0].data.id;
        if(Ext.getCmp('panel-categorias').collapsed == 'left'){
            Ext.getCmp('panel-categorias').expand()
            //console.log(Ext.getCmp('panel-categorias').store)
           
        }
        
        Ext.getCmp('panel-categorias').setTitle('Categoria - '+ nomeCategoria);
        var store = Ext.getCmp('panel-categorias').store.getProxy()
        
        if(nomeCategoria == 'Kits'){
            store.url = 'app/data/php/Kits.php?action=selectKitsCliente';
        }
        else{
            store.url = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + nomeCategoria;
        }
        
        
        Ext.getCmp('panel-categorias').store.setProxy(store)
        Ext.getCmp('panel-categorias').store.load()
                       
        }
    }
});