Ext.define('AppName.store.pedido.StoreListaPedidosCliente',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.pedido.ModelMeusPedidosCliente',
    autoLoad: true,
    remoteSort: true,
   
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/PedidosCliente.php?action=select'
             
        },
        
        actionMethods: {
            read: 'POST',
            create: 'POST',
            update: 'POST',
            destroy: 'POST'
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
        
        extraParams: {
            start: 'start',
            limit: 'limit',
            sort: 'name',
            dir: 'ASC',
            total: 'total'
            
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
               if(obj.success){
                               
                Ext.example.msg('Server Response', obj.message);
                
                                       
                }else{
                   Ext.example.msg('Server Response', obj.message);
         
                }
                Ext.getCmp('gridListaProdutosCliente').store.load()
            },
        }
})