Ext.define('AppName.view.layout.HeaderPanelMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerPanelMercado',
    
    region: 'north', 
    height:40, 
    frameHeader:false, 
    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background:#fff; border-color:#c0c0c0;',
    
    items:[
       
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Gerenciar Produtos', 
                    width: 130, 
                    margins: '2 2 2 2',
                    action: 'showWindowGerenciarProdutos'
                },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Logout', 
                    action: 'logout',
                    width: 80, 
                    margins: '2 2 2 2'
                },
                //{
                   // xtype:'searchPanel'
                //}
    ]
});
