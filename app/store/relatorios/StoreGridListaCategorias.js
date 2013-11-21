Ext.define('AppName.store.relatorios.StoreGridListaCategorias',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelTreeCategoriasProdutos',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Categorias.php?action=select',
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

   
})

