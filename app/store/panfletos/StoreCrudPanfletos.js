Ext.define('AppName.store.panfletos.StoreCrudPanfletos',{
    extend: 'Ext.data.TreeStore',
    
    model: 'AppName.model.panfletos.ModelCrudPanfletos',
    autoLoad: true,
     remoteSort: true,
        
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/Panfletos.php?action=select',
            create: 'app/data/php/Panfletos.php?action=insert',
            update: 'app/data/php/Panfletos.php?action=update',
            destroy: 'app/data/php/Panfletos.php?action=destroy'
         
        },
        
        actionMethods: {
//            read: 'POST',
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
    
});