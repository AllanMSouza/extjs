Ext.define('AppName.view.categorias.WindowCadSubcategoriaNivel1',{
	extend: 'Ext.window.Window',
	alias: 'widget.windowCadSubcategoriaNivel1',
	id: 'windowCadSubcategoriaNivel1',

	title: 'Cadastro de subcategorias',
	autoShow: true,
	modal: true,
	width: 300,
	height: 130,
	border: false,
	layout: 'border',

	items:[
		{
			xtype: 'formCadSubcategoriaNivel1',
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