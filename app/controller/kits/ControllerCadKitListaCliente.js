Ext.define('AppName.controller.kits.ControllerCadKitListaCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
    
      'kits.StoreDataViewKits'
    ],
    models: [
        'kits.ModelCrudKitsProdutosMercado',
        'kits.ModelListaProdutosKits'
    ],
    views: [
     
        'kits.PanelDescKit',
        'kits.DataViewProdutosKit',
        'kits.WindowDataViewKitsProdutosKit',
        
    ],
    
     init: function(){
        this.control({
          'windowDataViewKitsProdutosKit button[action=addKit]' : {click: this.addKit}
          
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
       
    }
    
    
  
})