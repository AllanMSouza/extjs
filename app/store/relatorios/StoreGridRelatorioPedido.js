Ext.define('AppName.store.relatorios.StoreGridRelatorioPedido',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.relatorios.ModelGridRelatorioPedido',
    autoLoad: true,
    remoteSort: true,
    groupField: 'id_pedido',
    proxy: {
       
        type: 'ajax',
        api:{
            read: 'app/data/php/Relatorios.php?action=getRelatorioProdutosPedidos',
        },      
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
    }
});