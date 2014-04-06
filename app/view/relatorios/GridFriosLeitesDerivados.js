Ext.define('AppName.view.relatorios.GridFriosLeitesDerivados',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridFriosLeitesDerivados',
    id: 'gridFriosLeitesDerivados',
    
    store: 'relatorios.StoreGridFriosLeitesDerivados',
    emptyText: 'Nenhum produto cadastrado',
    layout: 'fit',
    height: 300,
    width: 800,
    autoScroll: true,
    columns:[
        {
            header: 'Nome',
            dataIndex: 'nome_produto',
            flex:2,
        },
        {
            header: 'Preço',
            dataIndex: 'valor',
            flex:0.5,
            align: 'center'
        },
        {
            header: 'Quantidade',
            dataIndex: 'quantidade',
            flex:0.5,
            align: 'center'
        },
        {
            header: 'Faixa de estoque',
            flex:0.8,
            align: 'center',
            renderer: function(a,b,c,d){
                console.log(c.data)
                return '<span style="color:green;">' + c.data.verde + '</span>' +'/'+ '<span style="color:orange;">' + c.data.laranja + '</span>' +'/'+ '<span style="color:red;">' + c.data.vermelho + '</span>';
            }
            
        },
        {
            header: 'Validade',
            dataIndex: 'validade',
            flex:0.8,
            align: 'center'
        }
    ]
});