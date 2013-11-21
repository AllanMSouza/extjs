Ext.define('AppName.view.relatorios.GridListaCategorias',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaCategorias',
    
    autoShow: true,
//    title: 'Categorias',
    store: 'relatorios.StoreGridListaCategorias',
//    layout: 'fit',
    width: 300,
    
    columns:[
        {
            header: 'Nome Categoria',
            dataIndex: 'nome_categoria',
            flex: 1
        }
    ]
});