Ext.define('AppName.view.layout.TreePanelCategoriasGeral',{
   extend: 'Ext.tree.Panel',
   alias: 'widget.treeCategoriasGeral',
   
    rootVisible: false, 
    useArrows: true, 
    singleExpand: true,
    id: 'treeCategoriasGeral',
    title:'Categorias Produtos', 
    region: 'west',
    margins: '5 0 5 5',
    collapsed: false,
                           
    split:true, 
    width:300, 
    store: 'produtos.StoreTreeCategoriasProdutos',
    
//    tbar:[
//        {
//          xtype: 'textfield',
//          emptyText: 'Informe sua pesquisa',
//          width: 200
//        },
//        {
//            text: 'Pesquisar'
//        }
//    ]
});