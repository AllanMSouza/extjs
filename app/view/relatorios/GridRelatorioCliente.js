Ext.define('AppName.view.relatorios.GridRelatorioCliente',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridRelatorioCliente',
    id: 'gridRelatorioCliente',
    
    store: 'relatorios.StoreRelatorioCliente',
    emptyText: 'Nenhum pedido efetuado',
    layout: 'fit',
    autoScroll: true,
    
    columns: [
       {
           header: 'Nome',
           dataIndex: 'nome',
           flex: 2
       },
       {
           header: 'Telefone',
           dataIndex: 'telefone',
           flex: 1
       },
       {
           header: 'Email',
           dataIndex: 'email',
           flex: 1
       },
       {
           header: 'Endereço',
           dataIndex: 'endereco',
           flex: 2
       },
        
    ]
});