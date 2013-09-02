Ext.define('AppName.model.produtos.ModelListaProdutosCliente',{
   extend: 'Ext.data.Model',
   idProperty: 'id_produtos',
   
   fields:[
       {name: 'nome_lista', type: 'string'},
       {name: 'id_lista_cliente', type: 'int'},
       {name: 'produtos_id_produtos', type: 'int'},
       {name: 'id_produtos', type:'int'},
       {name: 'id_categoria', type:'int'},
       {name: 'codigo_produto', type:'int'},
       {name: 'categorias_id_categorias', type: 'int'},
       {name: 'descricao', type: 'string'},
       {name: 'nome_produto', type: 'string'},
       {name: 'nome_categoria', type:'string'},
       {name: 'nome_imagem', type: 'string'}
       
   ]
   
});