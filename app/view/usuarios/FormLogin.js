Ext.define('AppName.view.usuarios.FormLogin',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formLogin',
    
    layout: 'vbox',
    //region: 'center',
    autoShow: true,
    border: false,
    bodyPadding: 10,
    items:[
        {
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Login',
            labelWidth: 40
            
        },
        {
            xtype: 'textfield',
            name: 'password',
            labelWidth: 40,
            fieldLabel: 'Senha',
            inputType: 'password'
        }
    ]
});