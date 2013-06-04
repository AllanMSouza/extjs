Ext.define('AppName.view.dataview.ImageView', {
    extend: 'Ext.view.View',
    alias : 'widget.imageview',
    //requires: ['Ext.data.Store'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    (!Ext.isIE6? '<img src="extjs/examples/kitchensink/resources/images/touch-icons/{thumb}" />' : 
                    '<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'extjs/examples/kitchensink/resources/images/touch-icons/{thumb}\')"></div>'),
                '</div>',
                '<span>{name}</span>',
            '</div>',
        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: true,
    singleSelect: false,
    cls: 'x-image-view',
    //autoScroll: true,
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['name', 'thumb', {name: 'leaf', defaultValue: true}],
            proxy: {
                type: 'ajax',
                url : 'extjs/examples/kitchensink/resources/data/sencha-touch-examples.json',
                reader: {
                    type: 'json',
                    root: ''
                }
            }
        });
        
        this.mixins.dragSelector.init(this);
        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'organizerDD'
            },
            ghostTpl: [
                '<tpl for=".">',
                    '<img src="extjs/examples/kitchensink/resources/images/touch-icons/{thumb}" />',
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                '</tpl>',
                '<div class="count">',
                    '{[values.length]} images selected',
                '<div>'
            ]
        });
        
        this.callParent();
    },
    
    listeners: {
//        click: {
//            element: 'el', //bind to the underlying el property on the panel
//            fn: function(){ console.log('click el'); }
//        }
selectionchange: function(model, records) {
                //console.log(Ext.getCmp('panel-descricao'))
                    //console.log(model, records[0].data)
                    if(Ext.getCmp('panel-descricao').collapsed == 'right'){
                        Ext.getCmp('panel-descricao').expand()
                        
                        Ext.getCmp('panel-descricao').update('Descrição icone: ' + records[0].data.name)
                     }
                     
                     else
                         Ext.getCmp('panel-descricao').update('Descrição icone: ' + records[0].data.name)
    }
    }
});
