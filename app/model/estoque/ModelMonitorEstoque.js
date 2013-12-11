Ext.define('AppName.model.estoque.ModelMonitorEstoque',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_produtos',
    
    fields: [
        {name: 'id_produtos', type: 'int'},
        {name: 'codigo_produto', type: 'int'},
        {name: 'nome_produto', type: 'string'},
        {name: 'nome_categoria', type: 'string'},
        {name: 'quantidade', type: 'int'}
       
    ]
});