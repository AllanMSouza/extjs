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
  

    showWindowProdutos: function(model, records) {
            if (records[0]) {
                Ext.widget('winProdutos');
                if(!Ext.getCmp('panel-descricao').collapsed){
                    Ext.getCmp('panel-descricao').collapse();
                }
            }
        },
        
        getProdutos: function(record, model){
             var store = Ext.getCmp('gridListaProdutosGeral').store.getProxy()
            store.api.read = 'app/data/php/Produtos.php?action=getProdutos&id_categorias=' + model[0].data.id_categorias + '&leaf=' + model[0].data.leaf
            Ext.getCmp('gridListaProdutosGeral').store.setProxy(store)
            Ext.getCmp('gridListaProdutosGeral').store.load()
        }
})