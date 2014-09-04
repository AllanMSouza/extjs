Ext.define('AppName.view.layout.TreePanelCategorias',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.treePanelCategorias',
    //id: 'treePanelCategorias',
    
    rootVisible: false, 
    useArrows: true, 
    id: 'panel-categorias',
    title:'Categorias', 
    region: 'west', 
    split:true, 
    collapsible:true, 
    width:300, 
    collapsed:true, 
    store: 'layout.StoreTreePanelCategorias',
    items:[
        
    ],

    bbar:[
        {
            text: 'Categorias Padrão',
            handler: function(){
                var proxy = Ext.getCmp('dataViewNewHeaderPanelCliente').store.getProxy()
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategoriasPadrao'
                Ext.getCmp('dataViewNewHeaderPanelCliente').store.setProxy(proxy)

                // var proxy2 = Ext.getCmp('panel-categorias').store.getProxy()
                // proxy2.api.read = 'app/data/php/Categorias.php?action=getCategorias'
                // Ext.getCmp('panel-categorias').store.setProxy(proxy2)

                // Ext.getCmp('panel-categorias').store.load()

                Ext.getCmp('dataViewNewHeaderPanelCliente').store.load()
            }
        },

        {
            text: 'Minhas Categorias',
            handler: function(){
                var proxy = Ext.getCmp('dataViewNewHeaderPanelCliente').store.getProxy()
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategoriasMercado'
                Ext.getCmp('dataViewNewHeaderPanelCliente').store.setProxy(proxy)

                // var proxy2 = Ext.getCmp('panel-categorias').store.getProxy()
                // proxy2.api.read = 'app/data/php/Categorias.php?action=getCategorias'
                // Ext.getCmp('panel-categorias').store.setProxy(proxy2)

                // Ext.getCmp('panel-categorias').store.load()

                Ext.getCmp('dataViewNewHeaderPanelCliente').store.load()
            }
        },
    ]
});
