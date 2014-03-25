Ext.define('AppName.store.paineldecontrole.StoreGridControlePedidos',{
    extend: 'Ext.data.Store',
    
   model: 'AppName.model.paineldecontrole.ModelGridControlePedidos',
    autoLoad: true,
    remoteSort: true,
    //storeId: 'storeCampanha',
    
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/MonitorEstoque.php?action=getPedidos',
                    
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
      
})