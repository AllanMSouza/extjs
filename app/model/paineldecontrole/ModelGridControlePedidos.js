Ext.define('AppName.model.paineldecontrole.ModelGridControlePedidos',{
    extend: 'Ext.data.Model',
    idProperty: 'id_pedido',
    fields:[
        {name: 'id_pedido', type: 'int'},
        {name: 'status', type: 'string'},
        {name: 'img', type: 'string'},
        {name: 'qnt', type: 'int'}
    ]
});