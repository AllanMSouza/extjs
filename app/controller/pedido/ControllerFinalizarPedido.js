Ext.define('AppName.controller.pedido.ControllerFinalizarPedido',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'pedido.StoreTreeListaClienteFinalizarPedido',
        'pedido.StoreListaPedidosCliente'
    ],
    models: [
       'produtos.ModelListaProdutosCliente',
       'pedido.ModelMeusPedidosCliente'
    ],
    views: [
        'pedido.TreeListaClienteFinalizarPedido',
        'pedido.PanelFinalizarPedidoCliente',
        'pedido.FormFinalizarPedido',
        'pedido.GridListaPedidosCliente',
        'pedido.WindowAcompanharPedidos'
        
    ],
    
     init: function(){
        this.control({
          'panelFinalizarPedidoCliente button[action=confirmar]' : {click: this.confirmar},
          'gridListaPedidosCliente button[action=changeStatus]' : {click: this.changeStatus}
          
        })
    },
    
    
    confirmar: function(button){
        var win = button.up('panelFinalizarPedidoCliente'),
                form = win.down('form').getForm();
        
        if(form.isValid()){
             var record = form.getRecord(),
             values = form.getValues();
             if(record){
                 form.submit({
                     url: 'app/data/php/PedidosCliente.php?action=insert',
                      success: function(form, resp){
                                //console.log(form,resp)
                                if(resp.result.success == true){
                                    Ext.example.msg('Server Response', "Pedido realizado com sucesso!");
                                    win.close()
//                                    Ext.getCmp('gridListaProdutos').store.load()
                                }
                        },
                        failure:function(form,resp){
                            //postFailure(form, resp);
                            Ext.example.msg('Server Response', "Erro ao finalizar pedido!");


                            //window.location.reload();
                        }
                 });
             }
            
        }
        
        else {
            
        }
            
        
    },
    
     changeStatus: function(button){
//        console.log(button.id)
        var status = button.id,
            record = Ext.getCmp('gridListaPedidosCliente').getSelectionModel().getSelection();
    
        console.log(record)
         Ext.Ajax.request({
            url: 'app/data/php/MonitorPedidosMercado.php?action=changeStatus&id_pedido=' + record[0].data.id_pedido + 
                '&status=' + status,
            success: function(form, resp){
//                               
                Ext.getCmp('gridListaPedidosCliente').store.load()
//                                }
            },
            failure:function(form,resp){

                Ext.example.msg('Server Response', resp.result.msg);

            }
        });
        
    },
   
})