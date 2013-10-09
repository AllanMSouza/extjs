Ext.define('AppName.view.kits.WindowCadProdutosKitsMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProdutosKitsMercado',
    
    autoShow: true,
    width: 1350,
    height: 500,
    closable: true,
    maximizable: true,
    title: 'Adicionar Produtos aos Kits',
    layout: 'border',
    items:[
        {
            
            xtype: 'treeCategoriasGeral',
            margins: '0 0 0 0',
            ui: 'light',
            width: 250
        },
        {
            xtype: 'panel',
            title: 'Lista Produtos Mercado',
            ui: 'light',
            split: true,
            autoScroll: true,
            layout: 'fit',
            region: 'center',
            items:[
                {
                    xtype: 'dataViewListaProdutosMercado',
//                    region: 'center',
                    
        //            id: 'dataViewListaProdutosMercado',
                    border: false,
//                    region: 'center',
        //            trackOver: true,

                },
            ]
        },
        {
            xtype: 'panel',
            region: 'east',
            width: 400,
            split: true,
            layout: 'border',
            items:[
                {
                    xtype: 'gridListaKitsProdutosMercado',
                    region: 'center',
//                    layout: '',
                    border: false
                },
                {
                    xtype: 'panel',
                    region: 'south',
                    height: 50,
                    border: false,
                    bodyStyle: 'background: -webkit-gradient(linear, left top, left bottom, from(#C0C0C0), to(#F0F0F0)) repeat-X; border-color:#000; ',
                    layout: 'border',
                    items: [
                        {
                            xtype: 'panel',
                            region: 'west',
                            id: 'htmlPanelKit',
                            border: false,
                            bodyStyle: 'background: -webkit-gradient(linear, left top, left bottom, from(#C0C0C0), to(#F0F0F0)) repeat-X;',
                            html: '<div style="padding-top:10px;"><label style=" font-size:20; padding-top:15px; color:#55F"><b> Total: 0,00  Des: 0% Economia: 0,00</b></label></div>'
                        },
                          {
                              xtype: 'textfield',
//                              name: '',
                              id: 'textfieldIdKit',
                              hidden: true
                          }
                    ]
                }
            ]
        },
        
        
        
    ]
});