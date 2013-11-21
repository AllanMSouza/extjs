Ext.define('AppName.store.storeMinhasListas',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelListaProdutosCliente',
    autoLoad: true,
    remoteSort: true,
    //storeId: 'storeCampanha',
    
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        api:{
            read: 'app/data/php/ListaProdutosCliente.php?action=select',
            create: 'app/data/php/ListaProdutosCliente.php?action=insert',
//            update: 'app/data/php/Campanhas.php?action=update',
            destroy: 'app/data/php/ListaProdutosCliente.php?action=destroy'
         
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
            
            read: function(proxy, operation){
                var total = 0.0;
                for(var i=0; i < operation.length; i++){
//                    console.log(operation[i].data)
                    if(operation[i].data.id_kit > 0){
//                        console.log(operation[i].data.valor)
                        total += operation[i].data.valor; //0* operation[i].data.qtd;
                    }
                    else
                       total += operation[i].data.valor * operation[i].data.qtd;
                   }
                   
//                   console.log(operation)
                   var formatter = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 1
                  });
                  
                  Ext.getCmp('valorListaCliente').setValue(total.toFixed(2))
                  var a = total.toFixed(2)
                  console.log(a)
                  Ext.getCmp('panelpedido').update('<div style="padding-top:8px;"><b><label style=" font-size:20;color:#333"></b></label><label style=" font-size:32;color:#333"><b>' + formatter.format(a) + ' </b></label></div>')
            }
        }
})