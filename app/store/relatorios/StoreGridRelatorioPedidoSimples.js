Ext.define('AppName.store.relatorios.StoreGridRelatorioPedidoSimples',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.relatorios.ModelGridRelatorioPedidoSimples',
    autoLoad: true,
    remoteSort: true,
    proxy: {
       
        type: 'ajax',
        api:{
            read: 'app/data/php/Relatorios.php?action=getPedidosSimples',
        },      
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
    }
});