Ext.define('AppName.view.categorias.WindowCadCategorias',{
	extend: 'Ext.window.Window',
	alias: 'widget.windowCadCategorias',
	id: 'windowCadCategorias',

	autoShow: true,
	title: 'Cadastro de Categorias',
	width: 400,
	height: 200,
	layout: 'border',
	border: false,
	items:[
		{
			xtype: 'formCadCategorias',
			region: 'center',
			border: false
		}
	],

	buttons:[
		{
			text: 'Salvar',
			action: 'save'

		},
		{
			text: 'Cancelar'
		}
	]
});