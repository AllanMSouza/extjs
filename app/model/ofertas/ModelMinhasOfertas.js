Ext.define('AppName.model.ofertas.ModelMinhasOfertas',{
    extend: 'Ext.data.Model',
    idProperty: 'id_lista_produtos_mercado',
    
    fields:[
        {name: 'id_produtos', type: 'int'},
        {name: 'id_lista_produtos_mercado', type: 'int'},
        {name: 'nome_produto', type: 'string'},
        {name: 'valor', type: 'float'},
        {name: 'valor_oferta', type: 'float'},
        {name: 'validade_oferta', type: 'string'},
        {name: 'produtos_id_produtos', type: 'int'},
        {name: 'status_oferta', type: 'int'}
    ]
});