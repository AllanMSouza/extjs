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
    width:300, 
    collapsed:true, 
    store: 'layout.StoreTreePanelCategorias',
    items:[
        
    ],   
});
