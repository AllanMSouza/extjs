Ext.define('AppName.controller.layout.ControllerLayout',{
    extend: 'Ext.app.Controller',
    
    stores: [
        //'StoreTreePanelCategorias'
        
    ],
    models: [
        //'ModelTreePanelCategorias'
    ],
    views: [
       'layout.ContentPanel',
       'layout.DescriptionPanel',
//       'layout.LayoutAdministrador'
       
    ]
})