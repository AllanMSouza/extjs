Ext.define('AppName.store.relatorios.StoreGridHigienePessoal',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelListaProdutosCliente',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Produtos.php?action=getProdutosMercado&id_categorias=11&leaf=false'
        },      
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
    }

   
})

