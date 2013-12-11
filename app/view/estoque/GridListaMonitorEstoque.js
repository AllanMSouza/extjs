Ext.define('AppName.view.estoque.GridListaMonitorEstoque',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaMonitorEstoque',
    id: 'gridListaMonitorEstoque',
    
    autoShow: true,
    store: 'estoque.StoreMonitorEstoque',
    
    columns:[
        {
            header: 'Imagem',
            dataIndex: 'id_produtos',
            flex: 1,
            renderer: function(val){
                return '<img style= "width: 60px; height: 50px; padding: 5px" align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+val+'"/>'
            }
        },
        {
            header: 'Código Produto',
            dataIndex: 'codigo_produto',
            flex: 1,
            align: 'center',
        },
        {
            header: 'Produto',
            dataIndex: 'nome_produto',
            flex: 2,
//            align: 'center',
        },
        {
            header: 'Categoria',
            dataIndex: 'nome_categoria',
            flex: 1,
            align: 'center',
        },
        {
            header: 'Quantidade',
            dataIndex: 'quantidade',
            flex: 1,
            align: 'center',
            
            renderer: function(val){
                 if (val >= 100) {
                    return '<span style="color:green;">' + val + '</span>';
                } else if(val >= 50 && val < 100) {
                    return '<span style="color:orange;">' + val + '</span>';
                }
                else if(val >= 0 && val < 50) {
                    return '<span style="color:red;">' + val + '</span>';
                }
                return val;
            } 
        },
        
        
    ],
    
    tbar: [
        {
            text: 'Todos',
            action: 'changeColor',
            id: 'select'
        },
        {
            text: 'Verde',
            action: 'changeColor',
            id: 'selectGreen'
        },
        {
            text: 'Laranja',
            action: 'changeColor',
            id: 'selectOrange'
        },
        {
            text: 'Vermelho',
            action: 'changeColor',
            id: 'selectRed'
        },
        '->',
        {
            xtype: 'textfield',
            width: 400,
            
        },
        
        {
            text: 'Pesquisar'
        }
    ],
    
    
});
