Ext.define('AppName.store.paineldecontrole.StoreGridControleFinanceiro',{
    extend: 'Ext.data.Store',
    
   model: 'AppName.model.paineldecontrole.ModelGridControleFinanceiro',
    autoLoad: true,
    remoteSort: true,
    //storeId: 'storeCampanha',
    
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/MonitorPedidosMercado.php?action=getRecebidoReceber',
                    
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