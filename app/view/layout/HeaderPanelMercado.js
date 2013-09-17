Ext.define('AppName.view.layout.HeaderPanelMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerPanelMercado',
    
    region: 'north', 
    height:60, 
    frameHeader:false, 
    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background:#fff; border-color:#c0c0c0;',
    
    items:[
//            {
//                xtype: 'button',
//                region: 'west',
//                text: '',
//                width: 50, 
//                height: 60,
//                margins: '2 2 2 2', 
//                scale:'large', 
//                iconAlign: 'top', 
//                action: 'showIcons'
//            },
//            {
//                xtype: 'button',
//                region: 'west',
//                text: '',
//                width: 50, 
//                height: 60, 
//                margins: '2 2 2 2', 
//                scale:'large', 
//                iconAlign: 'top', 
//                action: 'showLista'
//            },
       
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Meus Produtos', 
                    width: 130, 
                    margins: '2 2 2 2',
                    action: 'showWindowGerenciarProdutosMercado'
                },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Montar Kits', 
                    width: 130, 
                    margins: '2 2 2 2',
//                    action: 'showWindowGerenciarProdutosMercado'
                },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Gerenciar Panfletos', 
                    width: 130, 
                    margins: '2 2 2 2',
                    action: 'showWindowGerenciarPanfletos'
                },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Gerenciar Cadastro', 
                    width: 130, 
                    margins: '2 2 2 2',
                    action: 'showWindowGerenciarCadastro'
                },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Cadastrar Produtos', 
                    width: 130, 
                    margins: '2 2 2 2',
                    action: 'showWindowCadastrarProdutos'
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
