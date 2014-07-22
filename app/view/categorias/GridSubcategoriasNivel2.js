Ext.define('AppName.view.categorias.GridSubcategoriasNivel2',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.gridSubcategoriasNivel2',
	id: 'gridSubcategoriasNivel2',

	autoShow: true,
	store: Ext.create('Ext.data.Store',{
		model: 'AppName.model.layout.ModelTreePanelCategorias',
	    autoLoad: true,
	    remoteSort: true,
	    proxy: {
	        type: 'ajax',
	        api:{
	            read: 'app/data/php/Categorias.php',
	            create: '',
	            destroy: ''
	        },        
	        
	        reader: {
	            
	            type: 'json',
	            root: 'data',
	            seccessProperty: 'success'
	        },
	    }
	}),

	columns: [
		{
			header: 'categorias',
			dataIndex: 'nome_categoria',
			flex: 1
		}
	]
});