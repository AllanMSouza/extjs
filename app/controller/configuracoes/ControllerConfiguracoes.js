Ext.define('AppName.controller.configuracoes.ControllerConfiguracoes',{
    extend: 'Ext.app.Controller',
    
    stores: [
        
    ],
    models: [
        
    ],
    views: [
        'configuracoes.WindowConfiguracoes',
        'configuracoes.FormConfiguracoes'
    ],
    
    init: function(){
        this.control({
            'formConfiguracoes button[action=save]': {click: this.salvar}
          
        })
    },
            
     salvar: function(button){
            var win = button.up('window'),
               form = win.down('form').getForm();
                              
//           console.log(Ext.getCmp('confCancelamento').getValue())
        if(form.isValid()){
            
            form.submit({
                url : 'app/data/php/Configuracoes.php?action=cancelamento&cancelamento=' + Ext.getCmp('confCancelamento').getValue(),
                
                success: function(form, resp){
                     if(resp.result.success == true){
                            Ext.example.msg('Server Response', 'Cancelamento configurado com sucesso!');
                            win.close();
                        }
                },
                
                falure: function(){
                    if(resp.result.success == false){
                            Ext.example.msg('Server Response', 'Erro ao configurar cancelamento!');
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
     }
            
  
})