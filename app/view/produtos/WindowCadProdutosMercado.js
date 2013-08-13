Ext.define('AppName.view.produtos.WindowCadProdutosMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProdutosMercado',
    
    autoShow: true,
    width: 400,
    heght: 300,
    modal: true,
    closable: true,
    border: false,
    title: 'Cadastro de Produtos Mercado',
    //layout: 'border',
    items:[
        {
            xtype: 'formCadProdutosMercado',
            border: false
        }
    ],
    buttons:[
        {
            text: 'Save'
        },
        {
            text: 'Cancel'
        }
    ]
});