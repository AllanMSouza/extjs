Ext.define('AppName.view.produtos.WindowCadProdutosMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProdutosMercado',
    id: 'windowCadProdutosMercado',
    
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
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            action: 'cancel',
            handler: function(){
                Ext.getCmp('windowCadProdutosMercado').close()
            }
        }
    ]
});