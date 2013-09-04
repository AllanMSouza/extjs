Ext.define('AppName.view.panfletos.FormCadPanfletos',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadPanfletos',
    
    region: 'center',
//    layout: 'hbox',
    autoShow: true,
    border: false,
    bodyPadding: 10,
    items:[
        {
            xtype: 'textfield',
            fieldLabel: 'Titulo',
            name: 'titulo',
            labelWidth: 40,
            width: 367
        },
        {
          xtype: 'fieldcontainer',
          layout: 'hbox',
          items:[
              {
                  xtype: 'datefield',
                  labelWidth: 40,
                  name: 'data_inicio',
                  fieldLabel: 'Inicio',
                  format: 'Y-m-d',
                  flex: 1
              },
              {
                  xtype: 'datefield',
                  labelWidth: 30,
                  name: 'data_fim',
                  fieldLabel: 'Fim',
                  format: 'Y-m-d',
                  flex: 1,
                  margins: '0 0 0 5'
              }
          ]
        },
        {
            xtype: 'fieldset',
            title: 'Descrição',
            layout: 'fit',
            items:[
                {
                    xtype: 'textarea',
                    name: 'descricao',
                    margins: '0 0 8 0'
//                    region: 'center'
                }
            ]
        },
        {
            xtype: 'textfield',
            name: 'nome_mercado',
            hidden: true,
            id: 'fieldNomeMercado'
        }
    ]
});