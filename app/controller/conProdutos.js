Ext.define('AppName.controller.conProdutos',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'storeMinhasListas',
        
    ],
    models: [
        'modelMinhasListas'
    ],
    views: [
       'winProdutos',
       'gridpanelMinhasListas',
       'DataViewProdutos',
       'dataview.ImageView',
       'dataview.OrgPanel',
       
    ]
})