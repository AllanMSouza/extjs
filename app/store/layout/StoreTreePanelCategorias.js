Ext.define('AppName.store.layout.StoreTreePanelCategorias',{
    extend: 'Ext.data.TreeStore',
    
    model: 'AppName.model.layout.ModelTreePanelCategorias',
    storeId: 'storeTreePanelCategorias', 
    autoLoad: true,
    remoteSort: true,
  //   pageSize: 5,
    
    proxy:{
//        simpleSortMode: true,
        type: 'ajax',
        
        url: 'app/data/php/Categorias.php?action=getCategorias',
        
        reader: {
            
            type: 'json',
            root: 'data',
            records: 'data',
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
                Ext.Msg.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
            
        }
      },
//        listeners: {
//            
//            write: function(proxy, operation){
//               var obj = Ext.decode(operation.response.responseText);
//               if(obj.success){
//                   Ext.example.msg('Server Response', obj.message);
//                     Ext.getView().refresh();
//                }else{
//                   Ext.example.msg('Server Response', obj.message);
//         
//                }
//            }
//        }
        
   
})

