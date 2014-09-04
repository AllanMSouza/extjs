Ext.define('AppName.view.produtos.TreeCategoriasProdutosListaProdutos',{
   extend: 'Ext.tree.Panel',
   alias: 'widget.treeCategoriasProdutosListaProdutos',
   
    rootVisible: false, 
    useArrows: true, 
    singleExpand: true,
    id: 'treeCategoriasProdutosListaProdutos',
    title:'Filtar Categorias', 
    region: 'west', 
    collapsible: true,
    collapsed: true,
    split:true, 
    width:300, 
    store: 'produtos.StoreTreeCategoriasProdutosListaProdutos',

    
});
