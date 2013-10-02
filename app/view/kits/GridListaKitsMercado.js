Ext.define('AppName.view.kits.GridListaKitsMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaKitsMercado',
    id: 'gridListaKitsMercado',
    
//    autoShow: true,
//    title: 'Lista Kits Mercado',
    layout: 'fit',
    region: 'center',
    store: 'kits.StoreCrudKitsProdutosMercado',
    
    tbar:[
        {
            text: 'Novo kit',
            action: 'add'
        },
        {
            text: 'Editar',
            action: 'edit'
        },
        {
            text: 'Excluir'
        },
        {
            text: 'Adicionar Produtos ao Kit',
            action: 'addProdutos'
        }
    ],
    
    columns:[
        {header: 'Titulo', dataIndex: 'titulo', flex: 1},
        {header: 'Descrição', dataIndex: 'descricao', flex: 1},
        {header: 'Desconto', dataIndex: 'desconto', flex: 0.5},
        {header: 'Validade', dataIndex: 'validade', flex: 1}
    ],
    
});