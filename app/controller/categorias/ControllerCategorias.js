Ext.define('AppName.controller.categorias.ControllerCategorias',{
	extend: 'Ext.app.Controller',

	stores:[
		'categorias.StoreListaCategorias',
		'categorias.StoreListaSubcategorias',
	],

	models: [
		'categorias.ModelListaCategorias'
	],

	views: [
		'categorias.GridListaCategorias',
		'categorias.WindowListaCategorias',
		'categorias.GridListaSubcategorias'
	],
});