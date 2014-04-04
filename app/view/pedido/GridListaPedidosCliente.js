Ext.define('AppName.view.pedido.GridListaPedidosCliente',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaPedidosCliente',
    id: 'gridListaPedidosCliente',
    
    autoShow: true,
    store: 'pedido.StoreListaPedidosCliente',
    region: 'center',
    
    columns:[
        {
            header: 'Nº Pedido',
            dataIndex: 'id_pedido',
            flex: 1
        },
        {
            header: 'Data do Pedido',
            dataIndex: 'data',
            flex: 1
        },
        {
            header: 'Status',
            dataIndex: 'status',
            flex: 1
        },
        {
            header: 'Valor',
            dataIndex: 'valor_pedido',
            flex: 1
        },
        {
            header: 'Nome Lista',
            dataIndex: 'nome_lista',
            flex: 1
        },
        
    ],
    
    tbar: [
        {
            text: 'Listar Produtos',
            action: 'listaProdutos'
        },
        {
            text: 'Cancelar Pedido',
            action: 'changeStatus',
            id: 'Cancelado'
        },
        {
            text: 'Atualizar Pedidos',
            handler: function(){
                Ext.getCmp('gridListaPedidosCliente').store.load();
            }
        },
        
        {
            xtype: 'textfield',
            width: 350
        },
        {
            text: 'Pesquisar'
        },
        {
            xtype: 'textfield',
            id: 'podeCancelar',
            hidden : true

        }
    ]
});