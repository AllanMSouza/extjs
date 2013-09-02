Ext.define('AppName.view.produtos.FormNovaListaCliente',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formNovaListaCliente',
    
    autoShow: true,
    bodyPadding: 10,
    border: false,
    items:[
        {
            xtype: 'textfield',
            fieldLabel: 'Nome',
            name: 'nome_lista',
            labelWidth:40
        }
    ]
})