Ext.Loader.setConfig({enabled: true});

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
        'layout.ControllerProdutos',
        'layout.ControllerLayout',
        'layout.ControllerHeaderPanel',
        'layout.ControllerTreePanelCategorias'
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
               {xtype: 'contentPanel'},
               {xtype: 'treePanelCategorias'},
               {xtype: 'headerPanel'},
               {xtype: 'descriptionPanel'},

           
           ]
            
        });
    }   
});