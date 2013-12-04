Ext.define('AppName.model.estoque.ModelMonitorPedidosMercado',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_pedido',
    
    fields: [
        {name: 'id_pedido', type: 'int'},
        {name: 'id_cliente', type: 'int'},
        {name: 'valor_pedido', type: 'double'},
        {name: 'nome', type: 'string'},
        {name: 'nome_lista', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'data', type: 'string'},
        {name: 'endereco', type: 'string'},
        {name: 'numero', type: 'string'},
        {name: 'bairro', type: 'string'},
        {name: 'cidade', type: 'string'},
        {name: 'complemento', type: 'string'},
        {name: 'cep', type: 'string'},
        {name: 'estado', type: 'string'},
    ]
});