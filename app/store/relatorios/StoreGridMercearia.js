Ext.define('AppName.store.relatorios.StoreGridMercearia',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelListaProdutosCliente',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Produtos.php?action=getProdutosMercado&id_categorias=5&leaf=false'
        },      
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
    }

   
})

