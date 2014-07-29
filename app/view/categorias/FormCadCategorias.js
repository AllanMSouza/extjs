Ext.define('AppName.view.categorias.FormCadCategorias',{
	extend: 'Ext.form.Panel',
	alias: 'widget.formCadCategorias',
	id: 'formCadCategorias',

	layout: 'border',

	items: [
		{
			xtype: 'panel',
			layout: 'border',
			region: 'west',
			width: 100,
			items: [
				{
                   xtype: 'image',
                   id: 'imgCategorias',
                   autoShow: true,
                   width: 100,
                   height: 100,
                   src: 'resources/imagens/congelados.png'
               },
			]
		},
		{
			xtype: 'panel',
			layout: 'vbox',
			region: 'center',
			items:[
				{
                   xtype: 'fileuploadfield',
                   name: 'imgCategorias',
                   // id: 'fileuploadfieldImagemCategorias',
                   fieldLabel: 'Imagem',
                   labelWidth: 60,
                   width: 280,
                   margins: '30 0 0 5'
                   

                },
                {
                	xtype: 'textfield',
                	fieldLabel: 'Categoria',
                	name: 'nome_categoria',
                	labelWidth: 60,
                	width: 205,
                	margins: '0 0 0 5'
                },
                {
                	xtype: 'textfield',
                	hidden: true,
                	name: 'id_categorias',
                	value: 0
                	
                }
			]
		}
	]
});