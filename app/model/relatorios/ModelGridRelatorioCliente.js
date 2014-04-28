Ext.define('AppName.model.relatorios.ModelGridRelatorioCliente',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_usuarios',
    fields:[
        {name: 'id_usuarios', type: 'int'},
        {name: 'nome', type: 'string'},
        {name: 'telefone', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'endereco', type: 'string'},
    ]
});