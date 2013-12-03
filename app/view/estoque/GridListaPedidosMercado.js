Ext.define('AppName.view.estoque.GridListaPedidosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaPedidosMercado',
    id: 'gridListaPedidosMercado',
    
    autoShow: true,
    store: 'estoque.StoreMonitorPedidosMercado',
//    margins: '5 5 5 5',
    
    tbar:[
        {
            text: 'Dados do Pedido'
        },  
        {
            text: 'Dados do Cliente'
        },  
        {
            text: 'Lista de Pedidos'
        },
        {
            xtype: 'textfield',
            width: 200
        },
        {
            xtype: 'button',
            text: 'Pesquisar'
        }
    ],
    
    columns:[
        {
            header: 'Nº Pedido',
            dataIndex: 'id_pedido',
            flex: 1
        },
        {
            header: 'Valor',
            dataIndex: 'valor_pedido',
            flex: 1
        },
        {
            header: 'data',
            dataIndex: 'data',
            flex: 1
        },
        {
            header: 'Cliente',
            dataIndex: 'nome',
            flex: 1
        },
        {
            header: 'Status',
            dataIndex: 'status',
            flex: 1
        }
    ]
});