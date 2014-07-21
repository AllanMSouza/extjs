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
		'categorias.GridListaSubcategorias',
		'categorias.WindowCadCategorias',
		'categorias.FormCadCategorias'
	],

	init: function(){
        this.control({
            'gridListaCategorias button[action=add_categorias]': {click: this.add_categorias}
          
        })
    },

    add_categorias: function(){
    	Ext.widget('windowCadCategorias')
    }
});