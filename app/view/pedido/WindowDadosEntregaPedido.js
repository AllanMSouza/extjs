Ext.define('AppName.view.pedido.WindowDadosEntregaPedido',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowDadosEntregaPedido',
    id: 'windowDadosEntregaPedido',
    
    autoShow: true,
    title: 'Dados para entrega do pedido',
    width: 740,
    height: 300,
    border: false,
    layout: 'border',
    modal: true,
    items:[
        {
            xtype: 'formDadosEntregaPedido',
            region: 'center'
        }
    ],
    
    buttons:[
        {
            text: 'Fechar',
            handler: function(){
                Ext.getCmp('windowDadosEntregaPedido').close()
            }
        }
    ]
});