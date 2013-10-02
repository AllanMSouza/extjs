Ext.define('AppName.controller.kits.ControllerCrudKitsMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
      'kits.StoreCrudKitsProdutosMercado'   ,
      'kits.StoreKitsHasProdutos'
    ],
    models: [
        'kits.ModelCrudKitsProdutosMercado',
        'kits.ModelListaProdutosKits'
    ],
    views: [
        'kits.GridListaKitsMercado',
//        'kits.GridListaProdutosMercado',
        'kits.WindowCadKit',
        'kits.WindowCadProdutosKitsMercado',
        'kits.WindowGerenciarListaKitsMercado',
        'kits.GridListaKitsProdutosMercado',
        'kits.FormCadKit'
    ],
    
     init: function(){
        this.control({
            'gridListaKitsMercado button[action=add]' : {click: this.add},
            'gridListaKitsMercado button[action=edit]' : {click: this.edit},
            'gridListaKitsMercado button[action=addProdutos]' : {click: this.addProduto},
            'formCadKit button[action=save]' :  {click: this.save}
          
        })
    },
    
    
    add: function(){
        Ext.widget('windowCadKit')
    },
    
    addProduto:function(){
        var record = Ext.getCmp('gridListaKitsMercado').getSelectionModel().getSelection();
//        console.log(record[0].data.id_kit)
        Ext.widget('windowCadProdutosKitsMercado')
        Ext.getCmp('textfieldIdKit').setValue(record[0].data.id_kit)
        var proxy = Ext.getCmp('gridListaKitsProdutosMercado').store.getProxy()
        proxy.api.read = 'app/data/php/KitsHasProdutos.php?action=select&id_kit='+record[0].data.id_kit
        Ext.getCmp('gridListaKitsProdutosMercado').store.setProxy(proxy)
        Ext.getCmp('gridListaKitsProdutosMercado').store.load()
        
    },
    
    save: function(button){
        //console.log('haha')
        var win = button.up('windowCadKit'),
            form = win.down('form').getForm();
        
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_kit']){
                    form.submit({
                        url: 'app/data/php/Kits.php?action=update',
                        success: function(form, resp){
                                //console.log(form,resp)
                                if(resp.result.success == true){
                                    Ext.example.msg('Server Response', resp.result.msg);
                                    win.close()
                                    Ext.getCmp('gridListaKitsMercado').store.load()
                                }
                        },
                        failure:function(form,resp){
                            //postFailure(form, resp);
                            Ext.example.msg('Server Response', resp.result.msg);


                            //window.location.reload();
                        }

                    })
                }
            }
            
            else {
                var record = Ext.create('AppName.model.kits.ModelCrudKitsProdutosMercado');
                record.set(values);
//                Ext.getCmp('gridListaKitsMercado').store.add(record);
                form.submit({
                    url: 'app/data/php/Kits.php?action=insert',
                    success: function(form, resp){
                            //console.log(form,resp)
                            if(resp.result.success == true){
                                Ext.example.msg('Server Response', resp.result.msg);
                                win.close()
                                Ext.getCmp('gridListaKitsMercado').store.load()
                            }
                    },
                    failure:function(form,resp){
                        //postFailure(form, resp);
                        Ext.example.msg('Server Response', resp.result.msg);


                        //window.location.reload();
                    }

                })
            }
        }            
    },
    
    edit: function(a,b){
        
             var records = Ext.getCmp('gridListaKitsMercado').getSelectionModel().getSelection();
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadKit');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
//        Ext.getCmp('imgProdutos').setSrc('app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+ record.data.id_produtos)
        //Ext.getCmp('fileuploadfieldImagemProdutos').setValue("uahuahuah")
        //console.log(record.data.nome_imagem)
                
    },
})