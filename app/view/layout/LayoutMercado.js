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
                                   xtype: 'gridListaProdutosGeral', 
                                   region: 'north', 
                                   title: 'Lista de Produtos Geral', 
                                   height: 350, 
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
                                  
                               }
                        ]
                       },
                       
                   ]
               },           
           ]
            
        });
    }   
});