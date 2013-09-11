Ext.define('AppName.view.panfletos.GridListaPanfletos',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.gridListaPanfletos',
    id: 'gridListaPanfletos',
    
    autoShow: true,
    useArrows: true,
    rootVisible: false,
    region: 'center',
    store: 'panfletos.StoreCrudPanfletos',
    singleExpand: true,
//    showRootNode: false,
    
    tbar:[
//        {
//            xtype: 'combobox',
//            id: 'comboboxListaPanfletosNomeMercado',
//            store: 'usuarios.StoreCrudMercado',
//            queryMode: 'local',
//            displayField: 'nome',
//            listeners: {
//                select: function(){
//                    var proxy = Ext.getCmp('gridListaPanfletos').store.getProxy();
//                    proxy.api.read = 'app/data/php/Panfletos.php?action=select&nome_mercado=' + 
//                        Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue()
//                    Ext.getCmp('gridListaPanfletos').store.setProxy(proxy);
//                    Ext.getCmp('gridListaPanfletos').store.load();
//                }
//            }
//        },
        {
            xtype: 'button',
            text: 'Adicionar Panfleto',
            action: 'insertPanfleto',
//            disabled: true,
            id: 'btAddPanfleto',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
        },
        {
            xtype: 'button',
            text: 'Editar Panfleto',
            action: 'editarPanfleto',
            disabled: true,
            id: 'btEditarPanfleto',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
        },
        {
            xtype: 'button',
            text: 'Adicionar Pagina',
            action: 'insertPaginaPanfleto',
            disabled: true,
            id: 'btAddPagina',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
        },
        
        {
            xtype: 'button', 
            text: 'Editar Página',
            action: 'editarPagina',
            disabled: true,
            id: 'btEditarPagina',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
        },
        {
            xtype:'button',
            text: 'Adicionar Produtos',
            action: 'addProdutos',
            disabled: true,
            id: 'btAddProduto',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
        }
    ],
    
    columns:[
        {
            xtype: 'treecolumn', 
            header: 'Titulo', 
            dataIndex: 'titulo', 
            flex: 2
        },
        {
            header: 'Descrição', 
            dataIndex: 'descricao', 
            flex: 1.5
        },
        {
            header: 'Inicio', 
            xtype: 'datecolumn', 
            format: 'd/m/Y', 
            dataIndex: 'data_inicio', 
            flex: 1
        },
        {
            header: 'Fim', 
            xtype: 'datecolumn', 
            format: 'd/m/Y', 
            dataIndex: 'data_fim', 
            flex: 1
        }
    ]
});