Ext.define('AppName.controller.produtos.ControllerCadProduto',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreTreeCategoriasProdutos',
        'produtos.StoreTreeCategoriasProdutosListaProdutos',
        'produtos.StoreCrudProdutos'
        
    ],
    models: [
        'produtos.ModelTreeCategoriasProdutos',
        'produtos.ModelCrudProdutos'
    ],
    views: [
       'produtos.FormCadProduto',
       'produtos.WindowCadProduto',
       'produtos.TreeCategoriasProdutos',
       'produtos.GridListaProdutos',
       'produtos.WindowGerenciarProdutos',
       'produtos.TreeCategoriasProdutosListaProdutos'
       
    ],
    
    init: function(){
        this.control({
            'windowCadProduto button[action=save]':{click: this.save},
            'treeCategoriasProdutosListaProdutos' : {selectionchange: this.getProdutos},
            'windowCadProduto button[action=cancel]':{click: this.cancel},
            'treeCategoriasProdutos':{selectionchange: this.setNomeCategoria},
            'gridListaProdutos button[action=insert]':{click: this.insert},
            'gridListaProdutos button[action=edit]':{click: this.edit}
        });
    },
            
    insert: function(){
        Ext.widget('windowCadProduto')
    },
    
   edit: function(a,b){
        
             var records = Ext.getCmp('gridListaProdutos').getSelectionModel().getSelection();
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadProduto');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
        Ext.getCmp('imgProdutos').setSrc('app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+ record.data.id_produtos)
        //Ext.getCmp('fileuploadfieldImagemProdutos').setValue("uahuahuah")
        //console.log(record.data.nome_imagem)
                
    },
            
    cancel:function(button){
        var win = button.up('windowCadProduto');
        win.close()
    },
            
   saveProduto: function(button){
        var win = button.up('window'),
               form = win.down('form').getForm(),
               IDUSUARIOS = form.getRecord() ? form.getRecord().get('id_produtos') : 0;
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_produtos']){
                    record.set(values);
                }
            }
            else{
                var record = Ext.create('AppName.model.produtos.ModelCrudProdutos');
                record.set(values);
                Ext.getCmp('gridListaProdutos').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaProdutos').store.sync();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    },
    
    save: function(button){
        //console.log('haha')
        var win = button.up('windowCadProduto'),
            form = win.down('form').getForm();
        
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_produtos']){
                    form.submit({
                        url: 'app/data/php/Produtos.php?action=update',
                        success: function(form, resp){
                                //console.log(form,resp)
                                if(resp.result.success == true){
                                    Ext.example.msg('Server Response', resp.result.msg);
                                    win.close()
                                    Ext.getCmp('gridListaProdutos').store.load()
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
                var record = Ext.create('AppName.model.produtos.ModelCrudProduto');
                record.set(values);
                Ext.getCmp('gridListaProdutos').store.add(record);
                form.submit({
                    url: 'app/data/php/Produtos.php?action=insert',
                    success: function(form, resp){
                            //console.log(form,resp)
                            if(resp.result.success == true){
                                Ext.example.msg('Server Response', resp.result.msg);
                                win.close()
                                Ext.getCmp('gridListaProdutos').store.load()
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
    getProdutos: function(record, model){
        //console.log(model[0])
        var store = Ext.getCmp('gridListaProdutos').store.getProxy()
        store.api.read = 'app/data/php/Produtos.php?action=getProdutos&id_categorias=' + model[0].data.id_categorias + '&leaf=' + model[0].data.leaf
        Ext.getCmp('gridListaProdutos').store.setProxy(store)
        Ext.getCmp('gridListaProdutos').store.load()
        
    },
    
    setNomeCategoria: function(record, model){
       // console.log(Ext.getCmp('fileuploadfieldImagemProdutos').getValue())
       // Ext.getCmp('imgProdutos').setSrc(Ext.getCmp('fileuploadfieldImagemProdutos').getSubmitValue())
        if(model[0].data.leaf){
            Ext.getCmp('fieldCategoria').setValue(model[0].data.nome_categoria)
            Ext.getCmp('fieldIdCategoria').setValue(model[0].data.id_categorias)
            
        }
    }
})