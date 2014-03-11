Ext.define('AppName.store.ofertas.StoreMinhasOfertas',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.ofertas.ModelMinhasOfertas',
    autoLoad: true,
    remoteSort: true,
    
    proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/Ofertas.php?action=select',
            create: 'app/data/php/Ofertas.php?action=insert'
                    
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