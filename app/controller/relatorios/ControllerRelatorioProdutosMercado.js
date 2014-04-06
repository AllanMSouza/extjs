Ext.define('AppName.controller.relatorios.ControllerRelatorioProdutosMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.StoreGridListaCategorias',
        'relatorios.StoreGridPadariaeSobremesas',
        'relatorios.StoreGridMercearia',
        'relatorios.StoreGridCarnes',
        'relatorios.StoreGridFriosLeitesDerivados',
        'relatorios.StoreGridFrutasOvosVerduras',
        'relatorios.StoreGridComidasProntaseCongeladas',
        'relatorios.StoreGridBebidas',
        'relatorios.StoreGridHigienePessoal',
        'relatorios.StoreGridSaudeeBeleza',
        'relatorios.StoreGridBazareLimpeza',
    ],
    models: [
        'produtos.ModelTreeCategoriasProdutos'
    ],
    views: [
      'relatorios.GridListaCategorias',
      'relatorios.WindowRelatorioProdutosMercado',
      'relatorios.GridListaRelatorioProdutosMercado',
      'relatorios.PanelGridsProdutosPorCategoria',
      'relatorios.GridPadariaeSobremesas',
      'relatorios.GridMercearia',
      'relatorios.GridCarnes',
      'relatorios.GridFriosLeitesDerivados',
      'relatorios.GridFrutasOvosVerduras',
      'relatorios.GridComidasProntaseCongeladas',
      'relatorios.GridBebidas',
      'relatorios.GridHigienePessoal',
      'relatorios.GridSaudeeBeleza',
      'relatorios.GridBazareLimpeza',
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