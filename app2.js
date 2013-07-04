Ext.Loader.setConfig({enabled: true});

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
        'ControllerProdutos',
        'ControllerLayout',
        'ControllerHeaderPanel'
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