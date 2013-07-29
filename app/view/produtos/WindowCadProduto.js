Ext.define('AppName.view.produtos.WindowCadProduto',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProduto',
    
    autoShow: true,
    width: 720,
    height: 520,
    closable: true,
    layout: 'border',
    items:[
        {
            xtype: 'formCadProduto',
            region: 'center'
        },
        {
            xtype: 'treeCategoriasProdutos',
            region: 'west',
            ui: 'light'
        }
    ],
    buttons:[
        {
            text: 'Save',
            action: 'save'
        },
        {text: 'Cancel'}
    ]
    
});