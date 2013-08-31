Ext.define('AppName.store.produtos.StoreComboboxListaCliente',{
    extend: 'Ext.data.Store',
    model: 'AppName.model.produtos.ModelComboboxListaCliente',
    
    autoLoad: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            
            read: 'app/data/php/ListaProdutosCliente.php?action=selectListas'
            
        },        
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        }
    }
});