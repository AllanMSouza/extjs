Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/examples/ux');

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
              
        'layout.ControllerProdutos',
        'layout.ControllerLayout',
        'layout.ControllerHeaderPanel',
        'layout.ControllerTreePanelCategorias',
        
        'produtos.ControllerCadProduto',
        
        
        
        'usuarios.ControllerCrudClientes',
        'usuarios.ControllerCrudMercado',
//        'usuarios.ControllerLogin'
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
               {xtype: 'contentPanel'},
               {xtype: 'treePanelCategorias'},
               {xtype: 'headerPanel'},
               //{xtype: 'descriptionPanel'},
               
//               {xtype: 'windowLogin',
//               region: 'center'}

           
           ]
            
        });
    }   
});