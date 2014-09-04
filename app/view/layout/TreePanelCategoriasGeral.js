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
    
   tbar:[
       {
         xtype: 'textfield',
         emptyText: 'Informe sua pesquisa',
         width: 200,
         id: 'pesquisamercado'
       },
       {
           text: 'Pesquisar',
           handler:function(){
            var pesquisa = Ext.getCmp('pesquisamercado').getValue()
            if(pesquisa != ''){
                  
                                            
                      //var win = Ext.widget('windowProdutos').setTitle('Resultado da Pesquisa');
                        //win.setTile('Produtos Categoria: ' + model[0].data.nome_categoria)
                    var store = Ext.getCmp('idImageView').store.getProxy();
                    store.api.read = 'app/data/php/Produtos.php?action=searchProduto&nome_produto=' + pesquisa
                    Ext.getCmp('idImageView').store.setProxy(store)
                    Ext.getCmp('idImageView').store.load()
                    //Ext.getCmp('windowPesquisar').close()

               }
            }
        }
   ],
    bbar:[
        {
            text: 'Categorias Padrão',
            handler: function(){
                // Ext.getCmp('treeCategoriasGeral').store.removeAll(); 
                var proxy = Ext.getCmp('treeCategoriasGeral').store.getProxy();
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&default='+1;
                Ext.getCmp('treeCategoriasGeral').store.setProxy(proxy);
                Ext.getCmp('treeCategoriasGeral').store.load();
                

            }
        },

        {
            text: 'Minhas Categorias',
            handler: function(){
                // Ext.getCmp('treeCategoriasGeral').store.removeAll();
                var proxy = Ext.getCmp('treeCategoriasGeral').store.getProxy();
                proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&default='+0;
                Ext.getCmp('treeCategoriasGeral').store.setProxy(proxy);
                Ext.getCmp('treeCategoriasGeral').store.load();


            }
        },
    ]
});