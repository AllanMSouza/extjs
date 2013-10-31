Ext.define('AppName.model.kits.ModelCrudKitsProdutosMercado',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_kit',
    
    fields:[
        {name: 'id_kit', type: 'int'},
        {name: 'titulo', type: 'string'},
        {name: 'descricao', type: 'string'},
        {name: 'ativo', type: 'int'},
        {name: 'validade', type: 'string'},
        {name: 'desconto', type: 'float'},
        {name: 'permissao', type: 'int'},
        {name: 'total', type: 'string'},
        {name: 'desc_total', type: 'string'}
    ]
});