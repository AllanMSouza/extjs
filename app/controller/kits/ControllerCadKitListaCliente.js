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
       
            var isNaLista = this.verificarKit();
            if(!isNaLista){
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
            else
                Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
       }
       else {
           Ext.Msg.alert('ERRO', 'Atenção, nenhuma lista selecionada');
           return false;
       }
       
    },
    
    verificarKit:function(){
        for(var i = 0; i < Ext.getCmp('gridListaProdutosCliente').store.data.items.length; i++){
                
                if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_kit > 0){
                    
                    if(Ext.getCmp('gridListaProdutosCliente').store.data.items[i].data.id_kit == Ext.getCmp('id_kit').getValue()){
//                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
                        return true;
                    }
                    else
                        return false;
                }
        }
    }
    
    
  
})