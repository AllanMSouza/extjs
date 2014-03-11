Ext.define('AppName.controller.ofertas.ControllerOfertas',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'ofertas.StoreMinhasOfertas'
    ],
    models: [
       'ofertas.ModelMinhasOfertas'
    ],
    views: [
       'ofertas.GridMinhasOfertas',
       'ofertas.WindowGerenciarOfertas',
       'ofertas.FormCadOferta',
       'ofertas.WindowCadOferta'
    ],
    
    init: function(){
        this.control({
            
            'gridMinhasOfertas button[action=editOferta]' : {click: this.editOferta},
            'gridMinhasOfertas button[action=excluirOferta]' : {click: this.excluirOferta},
            'windowCadOferta button[action=save]' : {click: this.save}
     
          
        })
    },
            
    editOferta:function(){
        var records = Ext.getCmp('gridMinhasOfertas').getSelectionModel().getSelection();
             
             if(records == ''){
                  Ext.Msg.show({
                        title: 'Atenção!',
                        msg: 'Nenhum registro selecionado!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR,
                        escope: this,
                        width: 300,
                        
                    })
                 
             }
                 
            if(records.length === 1){
                 var editWindow = Ext.widget('windowCadOferta');
                 var editForm = editWindow.down('form');
                 var record = records[0];
                editForm.loadRecord(record);
            }else{
                return;
            }
    },
    
    save: function(button){
         var win = button.up('window'),
               form = win.down('form').getForm();
                              
        if(form.isValid()){
            
            form.submit({
                url : 'app/data/php/Ofertas.php?action=insert',
                
                success: function(form, resp){
                     if(resp.result.success == true){
                            Ext.example.msg('Server Response', 'Oferta adicionada com sucesso!');
                            win.close();
                        }
                        Ext.getCmp('gridMinhasOfertas').store.load()
                },
                
                falure: function(){
                    if(resp.result.success == false){
                            Ext.example.msg('Server Response', 'Erro ao adicionar oferta!');
                            win.close();
                            
                        }
                        
                }
            });
        }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }       
    },
    
    excluirOferta:function(){
        var records = Ext.getCmp('gridMinhasOfertas').getSelectionModel().getSelection();
             
             if(records == ''){
                  Ext.Msg.show({
                        title: 'Atenção!',
                        msg: 'Nenhum registro selecionado!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR,
                        escope: this,
                        width: 300,
                        
                    })
                 
             }
                 
            if(records.length === 1){
                
                 Ext.Ajax.request({
                      url: 'app/data/php/Ofertas.php?action=destruir&id_lista_produtos_mercado=' + records[0].data.id_lista_produtos_mercado,
                        success: function(form, resp){
//                               
                            Ext.getCmp('gridMinhasOfertas').store.load()
//                                }
                        },
                        failure:function(form,resp){

                            Ext.example.msg('Server Response', resp.result.msg);

                        }
                 });
                
            }else {
                return;
            }
    },
   
})