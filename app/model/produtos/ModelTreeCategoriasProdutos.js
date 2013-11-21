Ext.define('AppName.model.produtos.ModelTreeCategoriasProdutos',{
   extend: 'Ext.data.Model',
   idProperty: 'id_categorias',
   
   fields:[
       {name: 'id_categorias', type: 'int'},
       {name: 'nome_categoria', type: 'string'},
       {name: 'categorias_id_categorias', type: 'int'},
       {name: 'text', type: 'string'}
   ]
   
});