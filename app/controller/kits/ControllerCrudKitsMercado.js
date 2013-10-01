Ext.define('AppName.controller.kits.ControllerCrudKitsMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
      'kits.StoreCrudKitsProdutosMercado'        
    ],
    models: [
        'kits.ModelCrudKitsProdutosMercado'
    ],
    views: [
        'kits.GridListaKitsMercado',
//        'kits.GridListaProdutosMercado',
        'kits.WindowCadKit',
        'kits.WindowCadKitsProdutosMercado',
        'kits.WindowGerenciarListaKitsMercado',
        'kits.FormCadKit'
    ],
    
     init: function(){
        this.control({
            'gridListaKitsMercado button[action=add]' : {click: this.add},
            'formCadKit button[action=save]' :  {click: this.save}
          
        })
    },
    
    
    add: function(){
        Ext.widget('windowCadKit')
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
})