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
    },
    listeners: {
            
             read: function(proxy, operation){
//               console.log(operation[0].data.nome_lista)
                Ext.getCmp('comboboxListaProdutosCliente').setValue(operation[0].data.nome_lista)
                var proxy = Ext.getCmp('gridListaProdutosCliente').store.getProxy()
//                    console.log(store);
                    proxy.api.read = 'app/data/php/ListaProdutosCliente.php?action=select&nome_lista=' + Ext.getCmp('comboboxListaProdutosCliente').getValue()
                    Ext.getCmp('gridListaProdutosCliente').store.setProxy(proxy)
                    Ext.getCmp('gridListaProdutosCliente').store.load()
              
             }
         }
});