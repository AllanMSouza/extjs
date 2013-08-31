Ext.define('AppName.model.produtos.ModelComboboxListaCliente',{
    extend: 'Ext.data.Model',
    idProperty: 'id_lista_cliente',
    
    fields:[
        {name: 'id_lista_cliente', type: 'int'},
        {name: 'nome_lista', type: 'string'},
        {name: 'cliente_id_cliente', type: 'int'}
    ]
});