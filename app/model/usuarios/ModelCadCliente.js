Ext.define('AppName.model.usuarios.ModelCadCliente',{
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
        {name: 'ddd_telefone', type: 'int'},
        {name: 'telefone_pt1', type: 'int'},
        {name: 'telefone_pt2', type: 'int'},
        {name: 'ddd_celular', type: 'int'},
        {name: 'celular_pt1', type: 'int'},
        {name: 'celular_pt2', type: 'int'},
        {name: 'celular', type:'string'},
        {name: 'func', type:'string'},
        {name: 'tipoFunc', type:'int'},

        // tabela Cliente

        {name: 'id_cliente', type:'int'},
        {name: 'cpf', type:'string'},
        {name: 'rg', type:'string'},
        {name: 'data_nascimento', type:'string'},
        {name: 'usuarios_id_usuarios', type:'int'},
        {name: 'sexo', type: 'string'}
        
    ]
})
