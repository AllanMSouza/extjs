Ext.define('AppName.model.usuarios.ModelCadMercado',{
    extend: 'Ext.data.Model',
    
     idProperty: 'id_usuarios',

    fields:[

    	// Tabela Usuarios

        {name: 'id_usuarios', type: 'int'},
        {name: 'login', type: 'string'},
        {name: 'senha', type:'string'},
        {name: 'conf_senha', type:'string'},
        {name: 'nome', type:'string'},
        {name: 'endereco', type:'string'},
        {name: 'email', type:'string'},
        {name: 'numero', type:'string'},
        {name: 'cidade', type:'string'},
        {name: 'estado', type:'string'},
        {name: 'bairro', type:'string'},
        {name: 'cep', type:'string'},
        {name: 'complemento', type:'string'},
        {name: 'telefone', type:'string'},
        {name: 'celular', type:'string'},

        // tabela Mercado

        {name: 'id_mercado', type:'int'},
        {name: 'cnpj', type:'string'},
        {name: 'razao_social', type:'string'},
        {name: 'nome_fantasia', type:'string'},
        {name: 'inscricao_social', type:'string'},
        {name: 'usuarios_id_usuarios', type:'int'},
        
    ]
})
