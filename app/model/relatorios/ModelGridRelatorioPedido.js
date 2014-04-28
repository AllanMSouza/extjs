Ext.define('AppName.model.relatorios.ModelGridRelatorioPedido',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_pedido',
    fields:[
        {name: 'id_pedido', type: 'int'},
        {name: 'data', type: 'string'},
        {name: 'nome_produto', type: 'string'},
        {name: 'nome_categoria', type: 'string'},
        {name: 'valor', type: 'float'},
        {name: 'valor_pedido', type: 'float'}
    ]
});
