var loginForm = {
    xtype: 'form',
    frame:true,
    defaults: {
        width: 235,
        labelWidth:60         
    },
    items: [
        {
            xtype: 'textfield',
            name: 'LOGIN',
            fieldLabel:"Usuário",
            allowBlank:false,
            value:'admin',
            blankText:"Digite o Nome de Usuário"
        },
        {
            xtype: 'textfield',
            name: 'SENHA',
            fieldLabel:"Senha",
            inputType: 'password',
            allowBlank:false,
            value:'admin',
            blankText:"Digite a Senha"
       }
            ],
      buttons: [
          {
              text: 'Login',                         
              handler: function(button){
                  var win = button.up('userlogin'),
                  form = win.down('form').getForm();
                  if(form.isValid()){
                      form.submit({
                          url: './app/data/php/login.php?action=autenticacao',
                          waitMsg: 'Autenticando',
                          success: function(form, resp){
                              Ext.getCmp('loginwindow').close();
                              viewRedir('layout','telaprincipal');
                          },
                          failure:function(form,resp){
                              Ext.Msg.alert('Usuario e/ou Senha incorreto');
                             
                         }
                      });
                 }
             }
           }]

}

Ext.define('AppName.view.Login',{
    extend: 'Ext.window.Window',
    alias: 'widget.viewLogin',
    id: 'viewLogin',   
    title: 'Login',
    height: 163,
    width: 260,
    closable: false,
    resizable: false,                              
    draggable: false,
    autoShow: true,
    renderTo: Ext.getBody(),
    modal: true,
    layout: 'fit',
    items:[loginForm]     
 
});

Ext.onReady(function(){
    Ext.create('FreeBlue.view.login');
})

