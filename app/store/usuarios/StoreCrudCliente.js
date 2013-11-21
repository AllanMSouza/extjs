Ext.define('AppName.store.usuarios.StoreCrudCliente',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.usuarios.ModelCadCliente',
    autoLoad: true,
    remoteSort: true,
    //storeId: 'storeCampanha',
    
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/Clientes.php?action=select',
            create: 'app/data/php/Clientes.php?action=insert',
            update: 'app/data/php/Clientes.php?action=update',
            destroy: 'app/data/php/Clientes.php?action=destroy'
         
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
                //console.log(obj)
                if(obj.success){
                             
                 Ext.example.msg('Server Response', obj.msg);
                                       
                 }else{
                    Ext.example.msg('Server Response', obj.msg);
        
                 }
             }
         }
        
   
        
    
})