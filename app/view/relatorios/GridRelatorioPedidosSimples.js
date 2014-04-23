Ext.define('AppName.view.relatorios.GridRelatorioPedidosSimples',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridRelatorioPedidosSimples',
    id: 'gridRelatorioPedidosSimples',
    
    store: 'relatorios.StoreGridRelatorioPedidoSimples',
    emptyText: 'Nenhum pedido efetuado',
    layout: 'fit',
    autoScroll: true,
    
    columns: [
        {
            header: 'Código',
            dataIndex: 'id_pedido',
            flex: 1
        },
        
        {
            header: 'Data',
            dataIndex: 'data',
            flex: 1
        },
        
        {
            header: 'Valor',
            dataIndex: 'valor_pedido',
            flex: 1
        },
        
    ]
});