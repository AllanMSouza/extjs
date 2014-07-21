Ext.define('AppName.view.categorias.GridListaSubcategorias',{
	extend: 'Ext.tree.Panel',
	alias: 'widget.gridListaSubcategorias',
	id: 'gridListaSubcategorias',

	autoShow: true,
	store: 'categorias.StoreListaSubcategorias',

	rootVisible: false, 
    // useArrows: true, 
    singleExpand: true,
    // margins: '0 0 0 5',
    split: true,

	tbar: [
		{
			xtype: 'button',
			text: 'Adicionar Subcategoria',
			menu: [
				{
			        text: 'Subcategoria Nivel 1',
			        handler: function(){
			        	Ext.widget('windowCadSubcategoriaNivel1')
			        }
				},
				{
			        text: 'Subcategoria Nivel 2'
				    
				}
			]

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
	],

	listeners: {
		// beforeitemexpand: function(node){

		// 	if(node.data.id_categorias){
		// 		var nome_categoria = node.data.nome_categoria;
				
		// 		var proxy = Ext.getCmp('gridListaSubcategorias').store.getProxy()
		// 		proxy.api.read = "app/data/php/Categorias.php?action=getCategorias&nomeCategoria="+nome_categoria
		// 		Ext.getCmp('gridListaSubcategorias').store.setProxy(proxy);
		// 		Ext.getCmp('gridListaSubcategorias').store.reload();
		//    }
		// }
	}

});