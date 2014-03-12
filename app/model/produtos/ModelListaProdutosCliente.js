Ext.define('AppName.model.produtos.ModelListaProdutosCliente',{
   extend: 'Ext.data.Model',
   idProperty: 'id_produtos',
   
   fields:[
       {name: 'nome_lista', type: 'string'},
       {name: 'id_lista_cliente_has_lista_produtos_mercado', type:'int'},
       {name: 'last_name', type: 'string'},
       {name: 'id_lista_cliente', type: 'int'},
       {name: 'produtos_id_produtos', type: 'int'},
       {name: 'isNoBanco', type: 'int'},
       {name: 'qtd', type: 'int'},
       {name: 'status_oferta', type: 'int'},
       {name: 'id_produtos', type:'int'},
       {name: 'id_categoria', type:'int'},
       {name: 'codigo_produto', type:'int'},
       {name: 'categorias_id_categorias', type: 'int'},
       {name: 'descricao', type: 'string'},
       {name: 'nome_produto', type: 'string'},
       {name: 'nome_categoria', type:'string'},
       {name: 'nome_imagem', type: 'string'},
       {name: 'valor', type: 'double'},
       {name: 'valor1', type: 'double'},
       {name: 'fabricacao', type: 'string'},
       {name: 'validade', type: 'string'},
       {name: 'id_kit', type: 'int'},
       {name: 'tipo', type: 'string'},
       {name: 'leaf', type: 'bool'},
       {name: 'id_lista_cliente_has_kits', type: 'int'}
       
       
   ]
   
});