Ext.define('AppName.view.categorias.GridListaCategorias',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridListaCategorias',
	// id: 'gridListaCategorias',

	autoShow: true,
	store: 'categorias.StoreListaCategorias',

	margins: '0 0 0 0',

	tbar: [
		{
			text: 'Adicionar Categoria',
			action: 'add_categorias'
		},
		{
			text: 'Editar Categoria'
		},
		{
			text: 'Excluir Categoria'
		},
		
	],

	columns:[
		{
			header: 'Imagem',
			dataIndex: 'nome_imagem',
			flex: 1
		},
		{
			header: 'Categoria',
			dataIndex: 'nome_categoria',
			flex: 1
		},

	],

	listeners: {
		selectionchange:function(model, record){
			// console.log(record[0].data)
			var proxy = Ext.getCmp('gridListaSubcategorias').store.getProxy()
			console.log(proxy)
			proxy.api.read = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + record[0].data.nome_categoria
			Ext.getCmp('gridListaSubcategorias').store.setProxy(proxy)
			Ext.getCmp('gridListaSubcategorias').store.load()
		}
	}
});