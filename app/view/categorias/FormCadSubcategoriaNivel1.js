Ext.define('AppName.view.categorias.FormCadSubcategoriaNivel1',{
	extend: 'Ext.form.Panel',
	alias: 'widget.formCadSubcategoriaNivel1',
	id: 'formCadSubcategoriaNivel1',

	bodyPadding: '10 5',
	border: false,

	items: [
		{
			xtype: 'textfield',
			name: 'nome_categoria',
			fieldLabel: 'Subcategoria'
		},
		{
			xtype: 'textfield',
			id: 'fieldCategorias_id_categorias',
			name: 'categorias_id_categoria',
			hidden: true
		},
		{
			xtype: 'textfield',
			name: 'id_categorias',
			hidden: true,
			id: 'fieldid_categorias',
			value: 0
		}
	],

});