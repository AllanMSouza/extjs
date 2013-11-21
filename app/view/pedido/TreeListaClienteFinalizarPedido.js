Ext.define('AppName.view.pedido.TreeListaClienteFinalizarPedido',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.treeListaClienteFinalizarPedido',
    id: 'treeListaClienteFinalizarPedido',
    
    autoShow: true,
    width: 700,
    height: 300,
    store: 'pedido.StoreTreeListaClienteFinalizarPedido',
    rootVisible: false,
    useArrows: true,
    autoScroll: true,
    
    columns:[
        {
            xtype: 'treecolumn',
            text: 'Produto',
            flex: 3,
            sortable: true,
            dataIndex: 'nome_produto',
            
        },
        { 
            header: 'Quantidade', 
            dataIndex: 'qtd',
            flex: 1 
        },
        { 
            header: 'Tipo', 
            dataIndex: 'tipo',
            flex: 1 
        },
        { 
            header: 'Valor', 
            dataIndex: 'valor1',
            flex: 1 
        },
        {
            header: 'Imagem',
            flex: 1,            
            renderer: function(a,b,c,d){
//                console.log(c.data.id_produtos)
                return '<img style= "width: 60px; height: 50px; padding: 5px" align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+ c.data.id_produtos +'&id_kit='+ c.data.id_kit +'"/>'
            }
            
        }
    ]
});