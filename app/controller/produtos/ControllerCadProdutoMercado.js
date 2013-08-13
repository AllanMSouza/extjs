Ext.define('AppName.controller.produtos.ControllerCadProdutoMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreCrudProdutosMercado'
        
    ],
    models: [
        //'produtos.ModelTreeCategoriasProdutos',
        'produtos.ModelCrudProdutos'
    ],
    views: [
       'produtos.FormCadProdutosMercado',
       'produtos.WindowCadProdutosMercado',
       //'produtos.TreeCategoriasProdutos',
       'produtos.GridListaProdutosMercado',
       'produtos.GridListaProdutosGeral',
       //'produtos.WindowGerenciarProdutos',
       //'produtos.TreeCategoriasProdutosListaProdutos'
       
    ],
    
    init: function(){
        this.control({
        });
    }
            
   
})