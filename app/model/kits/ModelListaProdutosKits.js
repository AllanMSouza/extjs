Ext.define('AppName.model.kits.ModelListaProdutosKits',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_kits_has_lista_produtos_mercado',
    
    fields: [
        {name: 'kits_id_kit', type: 'int'},
        {name: 'lista_produtos_mercado_id_lista_produtos_mercado', type: 'int'},
        {name: 'valor', type: 'double'},
        {name: 'codigo_produto', type: 'int'},
        {name: 'nome_produto', type: 'string'},
        {name: 'id_produtos', type: 'int'},
        {name: 'id_kits_has_lista_produtos_mercado', type: 'int'},
        {name: 'quantidade', type: 'int'}
    ]
    
});