Ext.define('AppName.controller.usuarios.ControllerLogin',{
    extend: 'Ext.app.Controller',
    
    stores: [
       
        
    ],
    models: [
       
    ],
    views: [
       'usuarios.WindowLogin',
       'usuarios.FormLogin'
    ],
    
    init: function(){
        this.control({
            
        'windowLogin button[action=save]' : {click: this.save}
          
        })
    },
    
    save: function(button){
        var win = button.up('windowLogin'),
            form = win.down('form').getForm();
            
            if(form.isValid()){
                form.submit({
                    url: 'app/data/php/Login.php?action=logar',
                    waitMsg: 'Autenticando',
                    
                    success: function(form, resp){
                        if(resp.result.success == true){
                            Ext.example.msg('Server Response', resp.result.msg);
                            win.close()
//                            if(resp.result.data.id_usuarios == 1){
//                                Ext.widget('layoutAdministrador')
//                            }
                            
                            //Ext.getCmp('gridListaProdutos').store.load()
                        }
                    },
                    
                    failure: function(){
                         Ext.Msg.show({
                            title: 'Erro',
                            msg: 'Usuário e/ou senha incorreto',
                            buttons: Ext.Msg.OK,
                            icon: Ext.MessageBox.ERROR,
                            escope: this,
                            width: 300,

                        })
                    }
                });
            }
    }
})