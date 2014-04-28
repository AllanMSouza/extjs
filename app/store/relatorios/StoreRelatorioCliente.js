Ext.define('AppName.store.relatorios.StoreRelatorioCliente',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.relatorios.ModelGridRelatorioCliente',
    autoLoad: true,
    remoteSort: true,
//    groupField: 'id_pedido',
    proxy: {
       
        type: 'ajax',
        api:{
            read: 'app/data/php/Relatorios.php?action=getRelatorioCliente',
        },      
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
    }
});