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
            
    listeners: {
        itemclick: function(record, item, index) {
//            console.log(item)
                var num =0;
              if(item.data.id == 'Alerta de Estoque'){
                 Ext.widget('windowAlertaEstoque')
                   Ext.Ajax.request({
                      url: 'app/data/php/MonitorEstoque.php?action=countRed',
                      
                     success: function(form,resp){
//                          console.log(form,resp)
                        var data = Ext.decode(form.responseText)
                           num = data.data
                           Ext.getCmp('windowAlertaEstoque').update('<div style="width:400px; margin-left:120px; margin-top: 35px;"> \n\
                                <b><label style="color:#FFF; font-size:16px;"> Você possui ' + num +' produto(s) em estoque minimo!</b></label>\n\
                               </div>')
                     },
                    failure:function(form,resp){
                  
                    }
                  });
                  
              }
        }
    }

});