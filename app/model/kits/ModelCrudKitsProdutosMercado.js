Ext.define('AppName.model.kits.ModelCrudKitsProdutosMercado',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_kit',
    
    fields:[
        {name: 'id_kit', type: 'int'},
        {name: 'titulo', type: 'string'},
        {name: 'desc_kit', type: 'string'},
        {name: 'descricao', type: 'string'},
        {name: 'ativo', type: 'int'},
        {name: 'validade', type: 'string'},
        {name: 'nome_produto', type: 'string'},
        {name: 'desconto', type: 'float'},
        {name: 'permissao', type: 'int'},
        {name: 'total', type: 'string'},
        {name: 'desc_total', type: 'string'},
        {name: 'id_produtos', type: 'int'},
        {name: 'total_itens', type: 'double'},
        {name: 'ativo_string', type: 'string'}
        
    ]
});