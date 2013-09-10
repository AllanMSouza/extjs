Ext.define('AppName.model.panfletos.ModelCrudPanfletos',{
    extend: 'Ext.data.Model',
    idProperty: 'id_panfleto',
    
    fields:[
        {name: 'id_panfleto', type: 'int'},
        {name: 'titulo', type: 'string'},
        {name: 'descricao', type: 'string'},
        {name: 'data_inicio', type: 'string'},
        {name: 'data_fim', type: 'string'},
        {name: 'nome_mercado', type: 'string'},
        {name: 'id_pagina_panfleto', type: 'int'},
        {name: 'numero_pagina', type: 'int'}
    ]
});