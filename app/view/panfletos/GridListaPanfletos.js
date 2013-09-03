Ext.define('AppName.view.panfletos.GridListaPanfletos',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaPanfletos',
    id: 'gridListaPanfletos',
    
    autoShow: true,
    region: 'center',
    store: 'panfletos.StoreCrudPanfletos',
    
    tbar:[
        {
            xtype: 'combobox',
            id: 'comboboxListaPanfletosNomeMercado',
            store: 'usuarios.StoreCrudMercado',
            queryMode: 'local',
            displayField: 'nome',
            listeners: {
                select: function(){
                    var proxy = Ext.getCmp('gridListaPanfletos').store.getProxy();
                    proxy.api.read = 'app/data/php/Panfletos.php?action=select&nome_mercado=' + 
                        Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue()
                    Ext.getCmp('gridListaPanfletos').store.setProxy(proxy);
                    Ext.getCmp('gridListaPanfletos').store.load();
                }
            }
        },
        {
            xtype: 'button',
            text: 'Adicionar Panfleto',
            action: 'insertPanfleto'
        },
        {
            xtype: 'button',
            text: 'Adicionar Pagina',
            action: 'insertPaginaPanfleto'
        }
    ],
    
    columns:[
        {header: 'Titulo', dataIndex: 'titulo', flex: 2},
        {header: 'Descrição', dataIndex: 'descricao', flex: 1.5},
        {header: 'Inicio', xtype: 'datecolumn', format: 'd/m/Y', dataIndex: 'data_inicio', flex: 1},
        {header: 'Fim', xtype: 'datecolumn', format: 'd/m/Y', dataIndex: 'data_fim', flex: 1}
    ]
});