Ext.define('AppName.view.produtos.TreeCategoriasProdutos',{
   extend: 'Ext.tree.Panel',
   alias: 'widget.treeCategoriasProdutos',
   
    rootVisible: false, 
    useArrows: true, 
    singleExpand: true,
    id: 'treeCategoriasProdutos',
    title:'Categorias Produtos', 
    region: 'west', 
    split:true, 
    width:300, 
    store: 'produtos.StoreTreeCategoriasProdutos'
});