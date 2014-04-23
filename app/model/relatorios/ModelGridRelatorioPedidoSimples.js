Ext.define('AppName.model.relatorios.ModelGridRelatorioPedidoSimples',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_pedido',
    fields:[
        {name: 'id_pedido', type: 'int'},
        {name: 'data', type: 'string'},
        {name: 'valor_pedido', type: 'float'}
    ]
});