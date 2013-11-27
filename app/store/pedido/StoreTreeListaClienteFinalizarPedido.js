Ext.define('AppName.store.pedido.StoreTreeListaClienteFinalizarPedido',{
    extend: 'Ext.data.TreeStore',
    
    model: 'AppName.model.produtos.ModelListaProdutosCliente',
    storeId: 'storeTreePanelCategorias', 
    autoLoad: true,
    remoteSort: true,
  
    proxy:{
        simpleSortMode: true,
        type: 'ajax',
        
       
        url: 'app/data/php/ListaProdutosCliente.php?action=select',
       
        reader: {
            
            type: 'json',
            root: 'data',
            records: 'data',
            seccessProperty: 'success'
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

        
   
})

