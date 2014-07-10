Ext.define('AppName.model.categorias.ModelListaCategorias',{
	extend: 'Ext.data.Model',

	idProperty: 'id_categorias',

	fields:[
		{name: 'id_categorias', type: 'int'},
		{name: 'nome_categoria', type: 'string'},
		{name: 'categorias_id_categorias', type: 'int'},
		{name: 'leaf', type:'bool'}
	]
});