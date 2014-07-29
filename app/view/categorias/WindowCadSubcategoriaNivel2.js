Ext.define('AppName.view.categorias.WindowCadSubcategoriaNivel2',{
	extend: 'Ext.window.Window',
	alias: 'widget.windowCadSubcategoriaNivel2',
	id: 'windowCadSubcategoriaNivel2',

	title: 'Cadastro de subcategorias',
	autoShow: true,
	modal: true,
	width: 400,
	height: 300,
	border: false,
	layout: 'border',

	items:[
		{
			xtype: 'formCadSubcategoriaNivel1',
			region: 'north',
			height: 40
		},
		{
			xtype: 'gridSubcategoriasNivel2',
			region: 'center'
		}
	],

	buttons: [
		{
			text: 'Salvar',
			action: 'savesub'
		},
		{
			text: 'Cancelar'
		}
	]
});