Ext.define('AppName.store.produtos.StoreTreeCategoriasProdutos',{
    extend: 'Ext.data.TreeStore',
    
    model: 'AppName.model.produtos.ModelTreeCategoriasProdutos',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Categorias.php?action=getCategorias',
        },
        
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
        
        writer:{
            type: 'json',
            writeAllFields: true,
            allowSingle: true,
            encode: true,
            root: 'data'
        }
    }
    
    
});