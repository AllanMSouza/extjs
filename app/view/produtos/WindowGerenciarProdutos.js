Ext.define('AppName.view.produtos.WindowGerenciarProdutos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGerenciarProdutos',
    
    autoShow: true,
    width: 820,
    height: 400,
    layout: 'border',
    title: 'Gerenciar Produtos',
    items:[
        {
            xtype: 'treeCategoriasProdutosListaProdutos',
            region: 'west'
        },
        {
            xtype:'gridListaProdutos',
            region: 'center'
        }
    ]
});