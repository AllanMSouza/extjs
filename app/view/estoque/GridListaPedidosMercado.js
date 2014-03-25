Ext.define('AppName.view.estoque.GridListaPedidosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaPedidosMercado',
    id: 'gridListaPedidosMercado',
    
    autoShow: true,
    store: 'estoque.StoreMonitorPedidosMercado',
//    margins: '5 5 5 5',
    
    tbar:[
        {
            text: 'Dados do Pedido',
            action: 'dadosPedido'
        },  
//        {
//            text: 'Dados do Cliente'
//        },  
        {
            text: 'Lista de Produtos',
            action: 'getListaProdutos'
        },
        {
            xtype: 'textfield',
            width: 200
        },
        {
            xtype: 'button',
            text: 'Pesquisar'
        },
         {
            xtype: 'combobox',
            fieldLabel: 'Filtar por:',
            id: 'comboboxFiltrosPedido',
            store:  Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"Aberto", "name":"Aberto"},
                {"abbr":"Recebido", "name":"Recebido"},
                {"abbr":"Separando em estoque", "name":"Separando em estoque"},
                {"abbr":"Aguardando retirada", "name":"Aguardando retirada"},
                {"abbr":"Em transporte", "name":"Em transporte"},
                {"abbr":"Finalizado", "name":"Finalizado"},
                {"abbr":"Cancelado", "name":"Cancelado"},
                {"abbr":"Todos", "name":"Todos"},

            ]
            }),
            labelWidth: 60,
            width: 200,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
            margins: '0 5 0 0',
            listeners:{
                select:function(){
                    var proxy = Ext.getCmp('gridListaPedidosMercado').store.getProxy()
//                    console.log(store);
                    proxy.api.read = 'app/data/php/MonitorPedidosMercado.php?action=filtrarPor&status=' + Ext.getCmp('comboboxFiltrosPedido').getValue()
                    Ext.getCmp('gridListaPedidosMercado').store.setProxy(proxy)
                    Ext.getCmp('gridListaPedidosMercado').store.load()
                }
            }
        },
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