Ext.define('AppName.controller.panfletos.ControllerListaPanfletos',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'panfletos.StoreCrudPanfletos'
    ],
    models: [
       'panfletos.ModelCrudPanfletos'
    ],
    views: [
       'panfletos.GridListaPanfletos',
       'panfletos.WindowGerenciarPanfletos',
       'panfletos.WindowCadPanfletos',
       'panfletos.FormCadPanfletos',
       'panfletos.WindowCadPaginaPanfleto',
       'panfletos.FormCadPaginaPanfleto',
       'panfletos.WindowCadProdutosPanfleto',
//       'panfletos.GridListaProdutosPanfleto'
    ],
    
    init: function(){
        this.control({
            'gridListaPanfletos button[action=insertPanfleto]' : {click: this.insertPanfleto},
            'gridListaPanfletos button[action=editarPagina]' : {click: this.editarPagina},
            'gridListaPanfletos button[action=editarPanfleto]' : {click: this.editarPanfleto},
            'gridListaPanfletos button[action=addProdutos]' : {click: this.addProdutos},
            'windowCadPanfletos button[action=save]' : {click: this.save},
            'gridListaPanfletos button[action=insertPaginaPanfleto]' : {click: this.insertPaginaPanfleto},
            'windowCadPaginaPanfleto button[action=savePagina]' : {click: this.savePagina},
            'gridListaPanfletos' : {selectionchange: this.selectionchange}
        });
    },
    
    insertPaginaPanfleto: function(){
        
        
      Ext.widget('windowCadPaginaPanfleto')
      var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection();
      
      //console.log(records[0].data)
      Ext.getCmp('fieldIdPanfleto').setValue(records[0].data.id_panfleto)
      Ext.getCmp('fieldIdPaginaPanfleto').setValue(0)
    },

insertPanfleto: function(){
    
    if(Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection()!=null){
            Ext.widget('windowCadPanfletos')
        }
        else {
            Ext.MessageBox.show({
                    title: 'Erro',
                    msg: 'Nenhum Panfleto Selecionado!',
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
        }
//    console.log(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue())
//    if(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue() != null){
        
//        Ext.getCmp('fieldNomeMercado').setValue(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue())
//    }
//    else {
//         Ext.MessageBox.show({
//                    title: 'Erro',
//                    msg: 'Nenhum Mercado Selecionado!',
//                    icon: Ext.MessageBox.ERROR,
//                    buttons: Ext.Msg.OK
//                });
//    }
    
},

save: function(button){
    var win = button.up('window'),
               form = win.down('form').getForm();
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_panfleto']){
                    record.set(values);
                    win.close();
                    Ext.getCmp('gridListaPanfletos').store.sync();
                    //            Ext.getCmp('gridListaPanfletos').store.load();
                }
            }
            else{
                var record = Ext.create('AppName.model.panfletos.ModelCrudPanfletos');
                record.set(values);
                Ext.getCmp('gridListaPanfletos').store.getRootNode().appendChild(record);
                win.close();
                Ext.getCmp('gridListaPanfletos').store.sync();
                Ext.getCmp('gridListaPanfletos').store.load();                   
            }

            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
},

savePagina:function(button){
    var win = button.up('window'),
               form = win.down('form').getForm();
        
        if(Ext.getCmp('fieldIdPaginaPanfleto').getValue() == 0){
            if(form.isValid()){
                form.submit({
                    url: 'app/data/php/PaginaPanfleto.php?action=insert',
                     success: function(form, resp){
                                    //console.log(form,resp)
                                    if(resp.result.success == true){
                                        Ext.example.msg('Server Response', resp.result.msg);
                                        win.close()
                                        Ext.getCmp('gridListaPanfletos').store.load()
                                    }
                            },
                            failure:function(form,resp){
                                //postFailure(form, resp);
                                Ext.example.msg('Server Response', resp.result.msg);

                            }
                });

               }
               else{
                   Ext.ux.Msg.flash({
                       msg: 'Ha campos preenchidos incorretamente',
                       type: 'error'
                   });
               }
        }
        else{
             if(form.isValid()){
                form.submit({
                    url: 'app/data/php/PaginaPanfleto.php?action=update',
                     success: function(form, resp){
                                    //console.log(form,resp)
                                    if(resp.result.success == true){
                                        Ext.example.msg('Server Response', resp.result.msg);
                                        win.close()
                                         Ext.getCmp('gridListaPanfletos').store.load()
                                    }
                            },
                            failure:function(form,resp){
                                //postFailure(form, resp);
                                Ext.example.msg('Server Response', resp.result.msg);

                            }
                });

               }
               else{
                   Ext.ux.Msg.flash({
                       msg: 'Ha campos preenchidos incorretamente',
                       type: 'error'
                   });
               }
            
        }
            
},
editarPagina: function(){
     var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection();
//     
//     console.log(records[0].data.id_pagina_panfleto)
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadPaginaPanfleto');
             Ext.getCmp('fieldIdPaginaPanfleto').setValue(records[0].data.id_pagina_panfleto)
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
        Ext.getCmp('imgPanfletos').setSrc('app/data/php/PaginaPanfleto.php?action=getImagemPanfleto&id_pagina_panfleto='+ record.data.id_pagina_panfleto)
        //Ext.getCmp('fileuploadfieldImagemProdutos').setValue("uahuahuah")
        //console.log(record.data.nome_imagem)
                
},

editarPanfleto: function(){
     var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection();
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadPanfletos');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
       
},      

addProdutos:function(){
    var win = Ext.widget('windowCadProdutosPanfleto')
    var win2 = win.createWindow()
    Ext.getCmp('desktop').restoreWindow(win2);
    
    var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection();
//    console.log()
    var proxy = Ext.getCmp('gridListaProdutosPanfleto').store.getProxy()
    proxy.api.read = 'app/data/php/PaginaPanfletoHasProdutos.php?action=select&id_pagina_panfleto=' + records[0].data.id_pagina_panfleto
    Ext.getCmp('gridListaProdutosPanfleto').store.setProxy(proxy)
    Ext.getCmp('gridListaProdutosPanfleto').store.load()
    
//    Ext.getCmp('windowCadProdutosPanfleto').setTitle(records[0])
},

selectionchange:function(){
    var records = Ext.getCmp('gridListaPanfletos').getSelectionModel().getSelection();
//    console.log(records)
  if(records[0].data.descricao == 'Página'){
      Ext.getCmp('btEditarPagina').enable()
      Ext.getCmp('btAddProduto').enable()
      Ext.getCmp('btAddPagina').disable()
      Ext.getCmp('btEditarPanfleto').disable()
//      Ext.getCmp('btAddPanfleto').disable()
  }
  else{
      Ext.getCmp('btEditarPagina').disable()
      Ext.getCmp('btAddProduto').disable()
      Ext.getCmp('btAddPagina').enable()
      Ext.getCmp('btEditarPanfleto').enable()
//      Ext.getCmp('btAddPanfleto').enable()
  }
      
}
});