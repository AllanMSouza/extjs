Ext.define('AppName.controller.produtos.ControllerListaCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'produtos.StoreComboboxListaCliente'
    ],
    models: [
       'produtos.ModelComboboxListaCliente',
       'AppName.model.produtos.ModelListaProdutosCliente'
    ],
    views: [
        'produtos.GridListaProdutosCliente',
        'produtos.WindowNovaListaCliente',
        'produtos.FormNovaListaCliente'
    ],
    
    init: function(){
        this.control({
//        'gridListaProdutosCliente' : {drop: this.drop},
        'gridListaProdutosCliente button[action=novaLista]' : {click: this.novaLista},
        'gridListaProdutosCliente button[action=editarLista]' : {click: this.editarLista},
        'gridListaProdutosCliente button[action=excluirLista]' : {click: this.excluirLista},
        'windowNovaListaCliente button[action=save]': {click: this.save},
        'windowNovaListaCliente button[action=cancel]': {click: this.cancel}
        
        });
    },
    
    cancel: function(button){
         var win = button.up('window'),
               form = win.close()
    },
    
    novaLista: function(){
        Ext.widget('windowNovaListaCliente')
        
    },
            
    excluirLista: function(){
        var nome_lista = Ext.getCmp('comboboxListaProdutosCliente').getValue()
        
         Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Deseja realmente excluir esta lista?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                Ext.Ajax.request({
                                    url: 'app/data/php/ListaProdutosCliente.php?action=excluirLista&nome_lista='+nome_lista,

                                    success: function(resp,b){
                                        
                                        Ext.getCmp('gridListaProdutosCliente').store.load()
                                        Ext.getCmp('comboboxListaProdutosCliente').store.load()
                                        Ext.getCmp('comboboxListaProdutosCliente').setValue(' ')
                                        
              
                                    }
                                });
                            }
                        }
                        
                    })
        
        
    },
    
    editarLista: function(){
        //console.log(Ext.getCmp('comboboxListaProdutosCliente').getValue())
         Ext.widget('windowNovaListaCliente')
         
         Ext.getCmp('isNoBanco').setValue(1)
         Ext.getCmp('fieldNomeNovaLista').setValue(Ext.getCmp('comboboxListaProdutosCliente').getValue())
         Ext.getCmp('fieldLastName').setValue(Ext.getCmp('comboboxListaProdutosCliente').getValue())
//            console.log(Ext.getCmp('comboboxListaProdutosCliente').getStore().getRecords())
    },
    
    save: function(button){
        var win = button.up('window'),
               form = win.down('form').getForm();
               
               var proxy = Ext.getCmp('gridListaProdutosCliente').store.getProxy()
// 
        proxy.api.create = 'app/data/php/ListaProdutosCliente.php?action=insertNovaLista'
        Ext.getCmp('gridListaProdutosCliente').store.setProxy(proxy)
                              
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(Ext.getCmp('isNoBanco').getValue() == 1){
                    record.set(values);
                }
            }
            else{
                var record = Ext.create('AppName.model.produtos.ModelListaProdutosCliente');
                record.set(values);
                Ext.getCmp('gridListaProdutosCliente').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaProdutosCliente').store.sync();
            Ext.getCmp('gridListaProdutosCliente').store.load()
            Ext.getCmp('comboboxListaProdutosCliente').store.load()
            Ext.getCmp('comboboxListaProdutosCliente').setValue(' ')
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    }
    
    
})