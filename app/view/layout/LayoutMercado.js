Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
              
//        'layout.ControllerProdutos',
        'layout.ControllerLayout',
//        'layout.ControllerHeaderPanel',
        'layout.ControllerTreePanelCategorias',
        
        'produtos.ControllerCadProduto',
        'produtos.ControllerCadProdutoMercado',
        
//        'usuarios.ControllerCrudClientes',
        'usuarios.ControllerCrudMercado',
//        'usuarios.ControllerLogin'
        
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
               {
                   xtype: 'headerPanelMercado',
                   
               },
               {
                   xtype: 'contentPanel',
                   layout: 'border',
                   items:[
                       {
                           xtype: 'treePanelCategorias', 
                           margins: '5 0 5 5',
                           collapsed: false,
                           tbar:[
                               {
                                 xtype: 'textfield',
                                 emptyText: 'Informe sua pesquisa',
                                 width: 200
                               },
                               {
                                   text: 'Pesquisar'
                               }
                           ]
                       },
                       {
                           xtype: 'panel', 
                           region: 'center',
                           layout: 'border',
                           autoHeight: true, 
                           margins: '5 5 5 0',
                           items: [
                               {
                                   xtype: 'gridListaProdutosGeral', 
                                   region: 'north', 
                                   title: 'Lista de Produtos Geral', 
                                   height: 350, 
                                   border: false,
                                   viewConfig: {
                                        plugins: {
                                           ddGroup: 'gridListaProdutosMercado',
                                           ptype  : 'gridviewdragdrop'
                                       },                                  
//                                       listeners: {
//                                           drop: function(node, data, dropRec, dropPosition) {
//                                               console.log('drop')
//                                           }
//                                      }    
                                  },
                                  
                               },
                               {
                                   xtype: 'gridListaProdutosMercado', 
                                   height: 400, 
                                   region: 'center',
                                   border: false,
                                   title: 'Lista Produtos Mercado',
                                    viewConfig: {
                                        plugins: {
                                           ddGroup: 'gridListaProdutosMercado',
                                           ptype  : 'gridviewdragdrop',
                                       },                                  
                                       listeners: {
                                           drop: function(node, data, dropRec, dropPosition) {
                                               Ext.widget('windowCadProdutosMercado')
//                                               console.log(data.records[0].data.categorias_id_categorias, data.records[0].data.codigo_produto )
                                               Ext.getCmp('fieldIdProdutosCadProdutosMercado').setValue(data.records[0].data.id_produtos);
//                                               Ext.getCmp('fieldIdCategoriasIdCategoriasWindowCadProdutoMercado').setValue(data.records[0].data.categorias_id_categorias)
//                                               Ext.getCmp('fieldCodigoProdutoWindowCadProdutoMercado').setValue(data.records[0].data.codigo_produto)
                                           }
                                      }    
                                  },
                               }
                       ]
                       },
                       
                   ]
               },           
           ]
            
        });
    }   
});