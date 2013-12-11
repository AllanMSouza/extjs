Ext.define('AppName.view.pedido.WindowAcompanharPedidos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowAcompanharPedidos',
    
    autoShow: true,
    title: 'Meus Pedidos',
    layout: 'border',
    width: 830,
    height: 400,
    items:[
        {
            xtype: 'gridListaPedidosCliente'
        }
    ]
});