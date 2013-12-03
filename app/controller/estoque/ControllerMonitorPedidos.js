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
     'estoque.PanelChangeStatus'
        
    ],
    
     init: function(){
        this.control({
          'windowDataViewKitsProdutosKit button[action=addKit]' : {click: this.addKit},
          'panelChangeStatus button[action=changeStatus]' : {click: this.changeStatus}
          
        })
    },
    
    addKit: function(){
//       console.log(Ext.getCmp('comboboxListaProdutosCliente').getValue())
       if(Ext.getCmp('comboboxListaProdutosCliente').getValue() != null){
           Ext.Ajax.request({
                url: 'app/data/php/ListaProdutosCliente.php?action=insertKit&id_kit=' + Ext.getCmp('id_kit').getValue() +
                    '&nome_lista='+Ext.getCmp('comboboxListaProdutosCliente').getValue(),
                 success: function(form, resp){
                     
                      Ext.example.msg('Server Response', 'Registro inserido com sucesso!');
                      Ext.getCmp('gridListaProdutosCliente').store.load()
                 },
                 failure:function(form,resp){
                      Ext.example.msg('Server Response', 'Erro ao inserir registro');
                 }
            });
           
       }
       else {
           Ext.Msg.alert('ERRO', 'Atenção, nenhuma lista selecionada');
           return false;
       }
       
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
        
    }
    
    
  
})