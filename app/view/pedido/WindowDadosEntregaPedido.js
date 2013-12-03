Ext.define('AppName.view.pedido.WindowDadosEntregaPedido',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowDadosEntregaPedido',
    id: 'windowDadosEntregaPedido',
    
    autoShow: true,
    width: 740,
    height: 200,
    layout: 'border',
    modal: true,
    items:[
        {
            xtype: 'formDadosEntregaPedido',
            region: 'center'
        }
    ]
});