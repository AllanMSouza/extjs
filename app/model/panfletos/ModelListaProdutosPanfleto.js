Ext.define('AppName.model.panfletos.ModelListaProdutosPanfleto',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_pagina_panfleto_has_produtos',
    
    fields:[
        {name: 'id_pagina_panfleto_has_produtos', type: 'int'},
        {name: 'id_produtos', type: 'int'},
        {name: 'pagina_panfleto_id_pagina_panfleto', type: 'int'},
        {name: 'produtos_id_produtos', type:'int'},
        {name: 'codigo_produto', type:'int'},
        {name: 'nome_produto', type:'string'},
        {name: 'descricao', type: 'string'},
        {name: 'valor', type: 'float'}
    ]
});