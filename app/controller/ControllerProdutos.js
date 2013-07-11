Ext.define('AppName.controller.ControllerProdutos',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'storeMinhasListas',
        
    ],
    models: [
        'modelMinhasListas'
    ],
    views: [
       'produtos.winProdutos',
       'produtos.gridpanelMinhasListas',
       'produtos.DataViewProdutos',
       'dataview.ImageView',
       'dataview.OrgPanel',
       
       'usuarios.FormMercado',
       'usuarios.WindowCadMercado',
       'usuarios.WindowCadCliente',
       'usuarios.FormCliente'
       
    ]
})