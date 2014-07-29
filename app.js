Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
              
       'layout.ControllerProdutos',
        'layout.ControllerLayout',
        'layout.ControllerHeaderPanelCliente',
        'layout.ControllerTreePanelCategorias',
        
        
        'produtos.ControllerCadProduto',
        'produtos.ControllerCadProdutoMercado',
        'produtos.ControllerListaCliente',

        'categorias.ControllerCategorias',
        // this.store = Ethis.store = Ext.create('Ext.data.Store', {
//                 autoLoad: true,
//                 sortOnLoad: true,
//                 fields: ['nome_categoria', 'id_categorias'],
//                 proxy: {
//                     type: 'ajax',
//                     // url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente.json',
//                     url : 'app/data/php/Categorias.php?action=select', 
// //                    url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente_Legenda.json',
//                     reader: {
//                         type: 'json',
//                         root: ''
//                     }
//                 }
//             })xt.create('Ext.data.Store', {
//                 autoLoad: true,
//                 sortOnLoad: true,
//                 fields: ['nome_categoria', 'id_categorias'],
//                 proxy: {
//                     type: 'ajax',
//                     // url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente.json',
//                     url : 'app/data/php/Categorias.php?action=select', 
// //                    url : 'resources/imagens/iconsHeaderPanelCliente/iconsHeaderPanelCliente_Legenda.json',
//                     reader: {
//                         type: 'json',
//                         root: ''
//                     }
//                 }
//             })

        'usuarios.ControllerCrudClientes',
        'kits.ControllerCadKitListaCliente',
        
        'pedido.ControllerFinalizarPedido',
        'usuarios.ControllerLogin'
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
               {xtype: 'contentPanel'},
               {xtype: 'newHeaderPanelCliente'},
               {xtype: 'treePanelCategorias'},
//               {xtype: 'headerPanelCliente'},                
               
               {xtype: 'descriptionPanel'},
//               {xtype: 'windowControlPanel'},
               
               
               
//               {xtype: 'windowLogin',
//               region: 'center'}

           
           ]
            
        });
    }   
});