Ext.define('AppName.view.produtos.GridDataViewProdutos',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridDataViewProdutos',
    id: 'gridDataViewProdutos',
    
    region: 'center',
    store : 'produtos.StoreCrudProdutosMercado',
    
    columns:[
        {
            header: 'Produto',
            dataIndex: 'id_produtos',
            flex: 0.5,
            renderer: function(val){
//                console.log(val)
                return '<img style= "width: 70px; height: 60px; padding: 5px" align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+ val +'"/>'
            }
        },
        {
            header: 'Nome',
            dataIndex: 'nome_produto',
            flex: 1
        },
        {
            header: 'Valor',
            dataIndex: 'valor1'
        }
    ],
    viewConfig: {
        plugins: [{
           ddGroup: 'kits',
           ptype  : 'gridviewdragdrop'

       }]
    }
});