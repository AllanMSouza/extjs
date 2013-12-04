Ext.define('AppName.controller.estoque.ControllerMonitorPedidos',{
    extend: 'Ext.app.Controller',
    
    stores: [    
      'estoque.StoreMonitorPedidosMercado'
    ],
    models: [
        'estoque.ModelMonitorPedidosMercado'
//        'kits.ModelListaProdutosKits'
    ],
    views: [
     'estoque.GridListaPedidosMercado',
     'estoque.WindowMonitorPedidos',
     'estoque.PanelChangeStatus',
     
     'pedido.WindowDadosEntregaPedido',
     'pedido.FormDadosEntregaPedido',
     'pedido.WindowListaProdutosPedido'
        
    ],
    
     init: function(){
        this.control({
          'windowDataViewKitsProdutosKit button[action=addKit]' : {click: this.addKit},
          'panelChangeStatus button[action=changeStatus]' : {click: this.changeStatus},
          'gridListaPedidosMercado button[action=dadosPedido]' : {click: this.dadosPedido},
          'gridListaPedidosMercado button[action=getListaProdutos]' : {click: this.getListaProdutos}
          
        })
    },
    
      changeStatus: function(button){
//        console.log(button.id)
        var status = button.id,
            record = Ext.getCmp('gridListaPedidosMercado').getSelectionModel().getSelection();
    
        console.log(record)
         Ext.Ajax.request({
            url: 'app/data/php/MonitorPedidosMercado.php?action=changeStatus&id_pedido=' + record[0].data.id_pedido + 
                '&status=' + status,
            success: function(form, resp){
//                               
                Ext.getCmp('gridListaPedidosMercado').store.load()
//                                }
            },
            failure:function(form,resp){

                Ext.example.msg('Server Response', resp.result.msg);

            }
        });
        
    },
    
    dadosPedido: function(){
        
           var records = Ext.getCmp('gridListaPedidosMercado').getSelectionModel().getSelection();
             
             if(records == ''){
                  Ext.Msg.show({
                        title: 'Atenção!',
                        msg: 'Nenhum registro selecionado!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR,
                        escope: this,
                        width: 300,
                        
                    })
                 
             }
                 
            if(records.length === 1){
                 var editWindow = Ext.widget('windowDadosEntregaPedido')
                 var editForm = editWindow.down('form');
                 var record = records[0];
                editForm.loadRecord(record);
            }else{
                return;
            }
        
    },
    
    getListaProdutos: function(){
        Ext.widget('windowListaProdutosPedido')
        
        var records = Ext.getCmp('gridListaPedidosMercado').getSelectionModel().getSelection();
        
        var proxy = Ext.getCmp('treeListaClienteFinalizarPedido').store.getProxy()

        proxy.api.read = 'app/data/php/ListaProdutosCliente.php?action=select&nome_lista=' + records[0].data.nome_lista + '&id_cliente=' + records[0].data.id_cliente
        Ext.getCmp('treeListaClienteFinalizarPedido').store.setProxy(proxy)
        Ext.getCmp('treeListaClienteFinalizarPedido').store.load()
    }
    
    
  
})