Ext.define('AppName.controller.pedido.ControllerFinalizarPedido',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'pedido.StoreTreeListaClienteFinalizarPedido'
    ],
    models: [
       'produtos.ModelListaProdutosCliente'
    ],
    views: [
        'pedido.TreeListaClienteFinalizarPedido',
        'pedido.PanelFinalizarPedidoCliente',
        'pedido.FormFinalizarPedido'
        
    ],
    
     init: function(){
        this.control({
          'panelFinalizarPedidoCliente button[action=confirmar]' : {click: this.confirmar}
          
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
            
        
    }
   
})