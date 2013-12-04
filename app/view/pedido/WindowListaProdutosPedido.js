Ext.define('AppName.view.pedido.WindowListaProdutosPedido',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowListaProdutosPedido',
    id: 'windowListaProdutosPedido',
    
    autoShow: true,
    width: 750,
    height: 400,
    title: 'Produtos do pedido',
    layout: 'border',
    boder: false,
    modal: true,
    items:[
        {
//            bodyPadding: '5 5',
            xtype: 'treeListaClienteFinalizarPedido',
            region: 'center',
            border: false,
//            margins: '5 5 5 5'
        },
    ],
    
    buttons: [
        {
            text: 'Fechar',
            handler: function(){
                Ext.getCmp('windowListaProdutosPedido').close()
            }
        }
    ]
});