Ext.define('AppName.controller.relatorios.ControllerRelatorioProdutosMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.StoreGridListaCategorias'        
    ],
    models: [
        'produtos.ModelTreeCategoriasProdutos'
    ],
    views: [
      'relatorios.GridListaCategorias',
      'relatorios.WindowRelatorioProdutosMercado',
      'relatorios.GridListaRelatorioProdutosMercado'
    ],
    
     init: function(){
        this.control({
            'gridListaCategorias' : {selectionchange: this.getProdutos},
            'gridListaRelatorioProdutosMercado button[action=showWindowGraficoBarras]' : {click: this.showWindowGraficoBarras}
        })
    },
    
    getProdutos: function(record, model){
                    
            store = Ext.getCmp('gridListaRelatorioProdutosMercado').store.getProxy()
            store.api.read = 'app/data/php/Produtos.php?action=getProdutosMercado&id_categorias=' + model[0].data.id_categorias + '&leaf=false' 
            Ext.getCmp('gridListaRelatorioProdutosMercado').store.setProxy(store)
            Ext.getCmp('gridListaRelatorioProdutosMercado').store.load();
        },
        
    showWindowGraficoBarras: function(){
        Ext.widget('windowGraficoBarrasProdutosMercado')
//         console.log('botão')
    }
    
   
})