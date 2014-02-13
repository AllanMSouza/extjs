Ext.define('AppName.view.layout.DataViewNewHeaderPanelCliente',{
     extend: 'Ext.view.View',
    alias : 'widget.dataViewNewHeaderPanelCliente',

    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
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
////                    (!Ext.isIE6? '<ul id="menutt"> <li> <a href="#"> <img align=top src="resources/imagens/iconsHeaderPanelCliente/{icon}" style="width: 64px; height: 64px;"/><span>{name}</span></a></li></ul>':
//                    (!Ext.isIE6? '<img align=top src="resources/imagens/iconsHeaderPanelCliente/{icon}" title={name:htmlEncode} style="width: 64px; height: 64px;"/>':                              
////                    (!Ext.isIE6? '<input class="span2" type="image" value="" src="resources/imagens/iconsHeaderPanelCliente/{icon}" style="width: 64px; height: 64px;" data-placement="bottom" data-original-title={name} rel="tooltip"> </input>':                              
//                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
//                ''),
//                
//                '</div>',                
//                '<span><label style ="float: left;    margin: 2px;    margin-right: 0;padding-left: 0px;padding-right: 80px;font-size:10;color:#333; width: 150px;">{name}</label></span>',
//            '</div>',
//        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    overItemCls: 'x-item-over',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
//    autoScroll: true,
    
//    emptyText: 'No images to display',
    
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