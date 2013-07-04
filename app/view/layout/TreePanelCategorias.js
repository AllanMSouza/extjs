Ext.define('AppName.view.layout.TreePanelCategorias',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.treePanelCategorias',
    
    rootVisible: false, 
    useArrows: true, 
    id: 'panel-categorias',
    title:'Categorias', 
    region: 'west', 
    split:true, 
    collapsible:true, 
    width:200, 
    collapsed:true, 
    //store: store,
    items:[
        
    ],
    
    listeners: {
        selectionchange: function(model, records) {
            if (records[0]) {
                Ext.widget('winProdutos');
                if(!Ext.getCmp('panel-descricao').collapsed){
                    Ext.getCmp('panel-descricao').collapse();
                }
            }
        }
        
    }
    
    
    
});
