Ext.define('AppName.view.relatorios.GridRelatorioPedidosProdutos',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridRelatorioPedidosProdutos',
    id: 'gridRelatorioPedidosProdutos',
    
    store:'relatorios.StoreGridRelatorioPedido',
    layout: 'fit',
    region: 'center',
    
    features: [{
            id: 'group',
            ftype: 'groupingsummary',
//            groupHeaderTpl: '{valor_pedido}',
            hideGroupedHeader: true,
            enableGroupingMenu: false
        }],
    
    columns:[
        {
            header: 'Pedido',
            dataIndex: 'id_pedido',
            flex: 1
        },
        {
            header: 'Produto',
            dataIndex: 'nome_produto',
            flex: 1
        },
        {
            header: 'Categoria',
            dataIndex: 'nome_categoria',
            flex: 1
        },
        {
            header: 'Valor Produto',
            dataIndex: 'valor',
            flex: 1
        },
        {
            header: 'Valor Pedido',
            dataIndex: 'valor_pedido',
            flex: 1
        }
        
    ]
});
