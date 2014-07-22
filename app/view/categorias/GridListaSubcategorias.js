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
			        text: 'Subcategoria Nivel 2',
			        handler: function(){
			        	var model = Ext.getCmp('gridListaSubcategorias').getSelectionModel().getSelection();
			        	// console.log(model[0])
			        	if(model[0] != null){
			        		Ext.widget('windowCadSubcategoriaNivel2')
				        	// console.log(model[0].data.id_categorias)
				        	var proxy = Ext.getCmp('gridSubcategoriasNivel2').store.getProxy();
				        	proxy.api.read = 'app/data/php/Categorias.php?action=listSubcategorias&id_categorias=' + model[0].data.id_categorias
				        	Ext.getCmp('gridSubcategoriasNivel2').store.setProxy(proxy);
				        	Ext.getCmp('gridSubcategoriasNivel2').store.load();
			        	}
			        	else {
			        		
			        		Ext.Msg.show({
		                        title: 'Atenção!',
		                        msg: 'Selecione uma Subcategoria!',
		                        buttons: Ext.Msg.OK,
		                        icon: Ext.MessageBox.ERROR,
		                        escope: this,
		                        width: 200,
		                        
		                    })
			        	}		        	
			        }
				    
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