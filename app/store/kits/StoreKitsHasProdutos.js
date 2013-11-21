Ext.define('AppName.store.kits.StoreKitsHasProdutos',{
    extend: 'Ext.data.Store',
    model: 'AppName.model.kits.ModelListaProdutosKits',
    
    autoLoad:true,
    remoteSort: true,
        
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/KitsHasProdutos.php?action=select',
            create: 'app/data/php/KitsHasProdutos.php?action=insert',
            update: 'app/data/php/KitsHasProdutos.php?action=update',
            destroy: 'app/data/php/KitsHasProdutos.php?action=destroy'
         
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
                //console.log(obj)
                if(obj.success){
                             
                 Ext.example.msg('Server Response', obj.msg);
                                       
                 }else{
                    Ext.example.msg('Server Response', obj.msg);
        
                 }
             },
             
             read: function(proxy, operation){
//                 var obj = Ext.decode(operation);
//                 console.log(operation, operation.length)
                   var de =0.0, por = 0.0;
                   
                   for(var i=0; i < operation.length; i++){
                       de += operation[i].data.total_itens;
//                         console.log(operation[i].data.total_itens)
                   }
                   por = de * (100 - operation[0].data.desconto)/100
//                   console.log(de)
//                   console.log(por.toFixed(2))
                   Ext.getCmp('htmlPanelKit').
                       update('<div style="padding-top:10px;"><label style=" font-size:20; padding-top:15px; color:#55F"><b> Total: R$ ' + de.toFixed(2)+' - '+ operation[0].data.desconto+'% por: R$ '+por.toFixed(2)+'</b></label></div>')
             }
         }
});