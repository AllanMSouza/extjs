Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
              
//        'layout.ControllerProdutos',
        'layout.ControllerLayout',
        'layout.ControllerTreePanelCategorias',
        
        
//        'produtos.ControllerCadProduto',
//        'produtos.ControllerCadProdutoMercado',       

        'usuarios.ControllerCrudMercado',
        
//        'panfletos.ControllerListaPanfletos',
//        'panfletos.ControllerListaProdutosPanfletos',
        
        'desktop.ControllerDesktop',
        
//        'kits.ControllerCrudKitsMercado',
        
//        'relatorios.ControllerRelatorioProdutosMercado',
//        'relatorios.graficos.ControllerGraficos',
        
//        'estoque.ControllerMonitorPedidos',
//        'estoque.ControllerMonitorEstoque',
        
//        'pedido.ControllerFinalizarPedido',
        
        'controlpanel.ControllerControlPanelMercado'
        

        
       ],
    
    launch: function(){
        Ext.create('AppName.view.desktop.AppLayoutMercadoPaineldeControle')
//        Ext.create('Ext.container.Viewport',{
//           layout: 'border',
//           
//           items:[
//               {
//                   xtype: 'headerPanelMercado'
//                   
//               },
//               
//               {
//                   xtype: 'contentPanel',
//                   layout: 'border',
//                   items:[
////                       {
////                           xtype: 'treeCategoriasGeral'
////                           
////                       },
////                       {
////                           xtype: 'panel', 
////                           region: 'center',
////                           layout: 'border',
////                           border: false,
////                           autoHeight: true, 
////                           margins: '5 0 5 0',
////                           items: [
////                               {
////                                   xtype: 'orgPanel',
////                                   layout: 'fit',
////                                   title: 'Listra Produtos Geral',
////                                   id: 'dataViewListaProdutosGeral',
////                                   hidden: false,
////                                   border: false,
//////                                   height: 300,
////                                   region: 'center',
////                                   trackOver: true
////                               },
//////                               {
//////                                   xtype: 'gridListaProdutosGeral', 
//////                                   region: 'center',
//////                                   id: 'gridListaProdutosGeral',
//////                                   title: 'Lista de Produtos Geral', 
//////                                   height: 350,
//////                                   hidden: false,
//////                                   border: false,
//////                                   viewConfig: {
//////                                        plugins: {
//////                                           ddGroup: 'gridListaProdutosMercado',
//////                                           ptype  : 'gridviewdragdrop'
//////                                       }
//////                                  }
//////                                  
//////                               },
////                               
//////                               {
//////                                   xtype:'panelImageListaProdutosMercado',
//////                                   id: 'panelImageListaProdutosMercado',
//////                                   layout: 'fit',
//////                                   title: 'Listra Produtos mercado',
////////                                   id: 'panelImageListaProdutosMercado',
//////                                   hidden: true,
//////                                   border: false,
//////                                   //height: 250,
//////                                   region: 'center',
//////                                   trackOver: true
//////                               }
////                        ]
////                       },
////                       {
////                                    xtype: 'gridListaProdutosMercado',
////                                    id: 'gridListaProdutosMercado',
////                                    region: 'east',
////                                    margins: '5 5 5 0'
////
////                                },
//                       
//                   ]
//               },           
//           ]
//            
//        });
    }   
});