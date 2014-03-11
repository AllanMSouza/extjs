Ext.define('AppName.model.produtos.ModelProdutosListaMercado',{
   extend: 'Ext.data.Model',
   idProperty: 'id_lista_produtos_mercado',
   
   fields:[
       {name: 'id_lista_produtos_mercado'},
       {name: 'id_produtos', type:'int'},
       {name: 'codigo_produto', type:'int'},
       {name: 'categorias_id_categorias', type: 'int'},
       {name: 'descricao', type: 'string'},
       {name: 'nome_produto', type: 'string'},
       {name: 'nome_imagem', type: 'string'},
       
       {name: 'valor', type: 'float'},
       {name: 'valor1', type: 'string'},
       {name: 'status_oferta', type: 'int'},
       {name: 'quantidade', type: 'int'},
       {name: 'fabricacao', type: 'string'},
       {name: 'validade', type: 'string'},
       
       {name: 'vermelho', type: 'int'},
       {name: 'verde', type: 'int'},
       {name: 'laranja', type: 'int'},
       
   ]
   
});