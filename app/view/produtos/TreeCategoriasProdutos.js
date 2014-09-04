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
    store: 'produtos.StoreTreeCategoriasProdutos',

    bbar:[
        {
            text: 'Categorias Padrão',
            handler: function(){
                var proxy = Ext.getCmp('treeCategoriasProdutos').store.getProxy();
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&default='+1;
                Ext.getCmp('treeCategoriasProdutos').store.setProxy(proxy);
                Ext.getCmp('treeCategoriasProdutos').store.load();

            }
        },

        {
            text: 'Minhas Categorias',
            handler: function(){
                var proxy = Ext.getCmp('treeCategoriasProdutos').store.getProxy();
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&default='+0;
                Ext.getCmp('treeCategoriasProdutos').store.setProxy(proxy);
                Ext.getCmp('treeCategoriasProdutos').store.load();

            }
        },
    ]
});