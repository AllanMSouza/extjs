Ext.define('AppName.store.produtos.StoreCrudProdutosMercado',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelProdutosListaMercado',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/ListaProdutosMercado.php?action=select',
            create: 'app/data/php/ListaProdutosMercado.php?action=insert',
            update: 'app/data/php/ListaProdutosMercado.php?action=update',
            destroy: 'app/data/php/ListaProdutosMercado.php?action=destroy'
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
        
        },
         listeners: {
            
             write: function(proxy, operation){
               
                var obj = Ext.decode(operation.response.responseText);
                //console.log(obj)
                if(obj.success){
                             
                 Ext.example.msg('Server Response', obj.msg);
                                       
                 }else{
                    Ext.example.msg('Server Response', obj.msg);
        
                 }
             }
         }
    //}
    
    
});