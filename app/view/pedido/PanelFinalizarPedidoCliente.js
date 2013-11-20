Ext.define('AppName.view.pedido.PanelFinalizarPedidoCliente',{
    extend: 'Ext.window.Window',
    alias: 'widget.panelFinalizarPedidoCliente',
    id: 'panelFinalizarPedidoCliente',
    
    autoShow: true,
    layout: 'border',
    width: 900,
    height: 500,
    
    items:[
        {
            xtype: 'treeListaClienteFinalizarPedido',
            region: 'center'
        }
    ]
});