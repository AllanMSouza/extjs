Ext.define('AppName.controller.ControllerLayout',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'StoreTreePanelCategorias'
        
    ],
    models: [
        'ModelTreePanelCategorias'
    ],
    views: [
       'layout.ContentPanel',
       'layout.DescriptionPanel',
       //'HeaderPanel',
       //'SearchPanel',
       //'layout.TreePanelCategorias'
       
    ]
})