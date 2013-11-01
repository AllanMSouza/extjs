Ext.define('AppName.store.kits.StoreDataViewKits',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.kits.ModelCrudKitsProdutosMercado',
    autoLoad: true,
     remoteSort: true,
        
      proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
        url: 'app/data/php/Kits.php?action=getTotalKit&id_kit=',
       
        
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
        
        listeners: {
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
                   Ext.getCmp('valorKitDataView').
                       update('<div style="padding-top:50px;">'+
                                   '<table border=0px>'+

                                    '<tr>'+
                                        '<td><b style=" font-size:14"> Kit:</b></td>' +  '<td style=" font-size:14"> ' + operation[0].data.titulo +'</td>' + 
                                    '</tr>'+
                                    '<tr>'+
                                        '<td><b style=" font-size:14"> Descrição:</b></td>' +  '<td style=" font-size:14"> ' + operation[0].data.desc_kit +'</td>' + 
                                    '</tr>'+
                                    '</table>'+
                                    '<table border=0px>'+
                                    '<tr>'+
                                        '<td> <b style=" font-size:14"> De:</td> <td style= "width: 170px"></b>  <label style=" font-size:30; color:#55F"><b> R$ '+  + de.toFixed(2)+' </b></label> </td> <td> <b style=" font-size:14"> Por:</b></td> <td style= "width: 170px"><label style=" font-size:30; color:#55F"><b> R$ ' + por.toFixed(2)+ ' </b></label></td> <td> <b style=" font-size:14"> Desconto: </b></td> <td style= "width: 80px"> <label style=" font-size:30; color:#F00"><b>'+ operation[0].data.desconto +'% </b></label> </td>' +
                                    '</tr>'+

                                '</table>'+
                            '</div>'
                               )
             } 
        }
    
});