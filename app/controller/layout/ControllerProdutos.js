Ext.define('AppName.controller.layout.ControllerProdutos',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'storeMinhasListas',
        'produtos.StoreImageView'
        
    ],
    models: [
        'modelMinhasListas'
    ],
    views: [
       'produtos.WindowProdutos',
//       'produtos.gridpanelMinhasListas',
       'produtos.DataViewProdutos',
       'dataview.ImageView',
       'dataview.OrgPanel',
       
//       'usuarios.FormMercado',
//       'usuarios.WindowCadMercado',
//       'usuarios.WindowCadCliente',
//       'usuarios.FormCliente'
       
    ]
})