Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
              
//        'layout.ControllerProdutos',
        'layout.ControllerLayout',
        'layout.ControllerTreePanelCategorias',
        
        
        'produtos.ControllerCadProduto',
        'produtos.ControllerCadProdutoMercado',       

        'usuarios.ControllerCrudMercado',

        
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
               {
                   xtype: 'headerPanelMercado'
                   
               },
               {
                   xtype: 'contentPanel',
                   layout: 'border',
                   items:[
                       {
                           xtype: 'treeCategoriasGeral'
                           
                       },
                       {
                           xtype: 'panel', 
                           region: 'center',
                           layout: 'border',
                           autoHeight: true, 
                           margins: '5 5 5 0',
                           items: [
                               {
                                   xtype: 'orgPanel',
                                   layout: 'fit',
                                   title: 'Listra Produtos Geral',
                                   id: 'dataViewListaProdutosGeral',
                                   hidden: true,
                                   border: false,
                                   height: 300,
                                   region: 'north',
                                   trackOver: true
                               },
                               {
                                   xtype: 'gridListaProdutosGeral', 
                                   region: 'north',
                                   id: 'gridListaProdutosGeral',
                                   title: 'Lista de Produtos Geral', 
                                   height: 350,
                                   hidden: false,
                                   border: false,
                                   viewConfig: {
                                        plugins: {
                                           ddGroup: 'gridListaProdutosMercado',
                                           ptype  : 'gridviewdragdrop'
                                       }
                                  }
                                  
                               },
                               {
                                   xtype: 'gridListaProdutosMercado',
                                   id: 'gridListaProdutosMercado'
                                  
                               },
                               {
                                   xtype:'panelImageListaProdutosMercado',
                                   id: 'panelImageListaProdutosMercado',
                                   layout: 'fit',
                                   title: 'Listra Produtos mercado',
//                                   id: 'panelImageListaProdutosMercado',
                                   hidden: true,
                                   border: false,
                                   //height: 250,
                                   region: 'center',
                                   trackOver: true
                               }
                        ]
                       },
                       
                   ]
               },           
           ]
            
        });
    }   
});