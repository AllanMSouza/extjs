Ext.define('AppName.controller.layout.ControllerTreePanelCategorias',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'layout.StoreTreePanelCategorias',
        'produtos.StoreTreeCategoriasProdutos'
    ],
    models: [
        'layout.ModelTreePanelCategorias',
        'produtos.ModelTreeCategoriasProdutos'
    ],
    views: [
            
       'layout.TreePanelCategorias',
       'layout.TreePanelCategoriasGeral'
    ],
    
    init: function(){
        this.control({
            
        'treePanelCategorias': {selectionchange: this.showWindowProdutos},
        'treeCategoriasGeral' : {selectionchange: this.getProdutos}
          
        })
    },
  

    showWindowProdutos: function(records, model) {
            if (model[0]) {
//                console.log(model[0])
                if(model[0].data.kit){
                     Ext.widget('windowDataViewKitsProdutosKit').setTitle('Kit: ' + model[0].data.titulo)
                     
                    
                    Ext.getCmp('imgDataViewKit').setSrc('app/data/php/Kits.php?action=getImgKit&id_kit='+model[0].data.id_kit)

                    var proxy = Ext.getCmp('dataViewProdutosKit').store.getProxy()
                    proxy.url = 'app/data/php/Kits.php?action=getTotalKit&id_kit=' + model[0].data.id_kit

                    Ext.getCmp('dataViewProdutosKit').store.setProxy(proxy)
                    Ext.getCmp('dataViewProdutosKit').store.load()
                }
                else {
                    var win = Ext.widget('windowProdutos').setTitle('Produtos Categoria: ' + model[0].data.nome_categoria);
                        //win.setTile('Produtos Categoria: ' + model[0].data.nome_categoria)
                    var store = Ext.getCmp('dataViewListaProdutosMercado').store.getProxy();
                    store.api.read = 'app/data/php/Produtos.php?action=getProdutosMercadoDefault&id_categorias=' + model[0].data.id_categorias + '&leaf=' + model[0].data.leaf
                    Ext.getCmp('dataViewListaProdutosMercado').store.setProxy(store)
                    Ext.getCmp('dataViewListaProdutosMercado').store.load()
                }
                
            }
        },
        
        getProdutos: function(record, model){
             var store = Ext.getCmp('idImageView').store.getProxy()
            store.api.read = 'app/data/php/Produtos.php?action=getProdutos&id_categorias=' + model[0].data.id_categorias + '&leaf=' + model[0].data.leaf
            Ext.getCmp('idImageView').store.setProxy(store)
            Ext.getCmp('idImageView').store.load()
           
            store = Ext.getCmp('gridListaProdutosMercado').store.getProxy()
            store.api.read = 'app/data/php/Produtos.php?action=getProdutosMercado&id_categorias=' + model[0].data.id_categorias + '&leaf=' + model[0].data.leaf
            Ext.getCmp('gridListaProdutosMercado').store.setProxy(store)
            Ext.getCmp('gridListaProdutosMercado').store.load();
        }
})