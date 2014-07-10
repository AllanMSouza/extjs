Ext.define('AppName.view.categorias.GridListaSubcategorias',{
	extend: 'Ext.tree.Panel',
	alias: 'widget.gridListaSubcategorias',
	id: 'gridListaSubcategorias',

	autoShow: true,
	store: 'categorias.StoreListaSubcategorias',

	rootVisible: false, 
    useArrows: true, 
    singleExpand: true,
    margins: '0 0 0 5',

	tbar: [
		{
			text: 'Adicionar Subcategoria'
		},
		{
			text: 'Editar Subcategoria'
		},
		{
			text: 'Excluir Subcategoria'
		},
		
	],

	columns:[
		{
			xtype: 'treecolumn',
			header: 'Subcategoria',
			dataIndex: 'nome_categoria',
			flex: 1
		}
	]

});