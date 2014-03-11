Ext.define('AppName.view.ofertas.FormCadOferta',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadOferta',
    id: 'formCadOferta',
    
    bodyPadding: '5 5',
    items:[
        {
            xtype: 'datefield',
            name: 'validade_oferta',
            labelWidth: 60,
            fieldLabel: 'Validade'
        },
        {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items:[
                {
                    xtype: 'textfield',
                    name: 'valor_oferta',
                    fieldLabel: 'Valor',
                    labelWidth: 60,
                    flex: 1.5
                },
                {
                    xtype: 'textfield',
                    name: 'id_lista_produtos_mercado',
                    id: 'field_id_lista_produtos_mercado_cad_ofertas',
                    hidden: true
                },
                {
                    xtype: 'checkbox',
                    margins: '0 0 0 5',
                    name: 'status_oferta',
                    labelWidth: 40,
                    fieldLabel: 'Ativo',
                    inputValue: '1',
                    flex: 1
                }
            ]
        }
    ]
});