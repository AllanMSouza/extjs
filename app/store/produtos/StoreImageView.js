Ext.define('AppName.store.produtos.StoreImageView',{
    extend: 'Ext.data.Store',
    
    autoLoad: true,
    model: 'AppName.model.produtos.ModelCrudProdutos',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Produtos.php?action=select',
            create: 'app/data/php/Produtos.php?action=insert',
            destroy: 'app/data/php/Produtos.php?action=destroy'
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
        },
        listeners:{
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
        
        }
});