Ext.define('AppName.view.kits.FormCadKit',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadKit',
    
    autoShow: true,
//    title: 'Novo kit',
    border: false,
    width: 400,
    region: 'center',
    height: 300,
    bodyPadding: 10,
    items:[
        {
            xtype: 'textfield',
            fieldLabel: 'Titúlo',
            name: 'titulo',
            labelWidth: 50,
            width: 370
        },
        {
            xtype: 'filefield',
            name: 'imagem',
            fieldLabel: 'Imagem',
            labelWidth: 50,
            width: 370
        },
        {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Validade',
                    name: 'validade',
                    flex: 0.9,
                    labelWidth: 50,
                     format: 'Y-m-d',
                    margins: '0 5 0 0'
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Desconto',
                    name: 'desconto',
                    flex:0.7,
                    labelWidth: 60,
                     margins: '0 5 0 0'
                },
                {
                    xtype: 'checkbox',
                    fieldLabel: 'Ativo',
                    name: 'ativo',
                    flex: 0.3,
                    labelWidth: 30,
                     margins: '0 5 0 0'
                },
               
                
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
//                    region: 'center',
//                    layout: 'fit',
                    margins: '0 0 7 0'
                }
            ]
        }
    ],
    
    
    buttons: [
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            action: 'cancel'
        }
    ]
    
    
});