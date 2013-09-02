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
            labelWidth:40,
            id:'fieldNomeNovaLista'
        },
         {
            xtype: 'textfield',
            fieldLabel: 'Nome',
            name: 'last_name',
            labelWidth:40,
            hidden: true,
            id:'fieldLastName'
        },
        {
            xtype: 'textfield',
            hidden: true,
            id: 'isNoBanco',
            name: 'isNoBanco'
        }
    ]
})