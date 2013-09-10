Ext.define('AppName.view.panfletos.FormCadPaginaPanfleto',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadPaginaPanfleto',
    
    autoShow: true,
    region: 'center',
    bodyPadding: 10,
    border: false,
    items:[
        
        {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            items:[
                {
                    xtype: 'image',
                    id: 'imgPanfletos',
                    autoShow: true,
                    width: 100,
                    height: 100,
                    src: 'resources/imagens/congelados.png'
                },
                {
                    xtype: 'textfield',
                    name: 'numero_pagina',
                    fieldLabel: 'Nº',
                    labelWidth: 20,
                    width: 60,
                    margins: '80 0 0 0'
                },
            ]
        },
        {
            xtype: 'filefield',
            name: 'imagem_panfleto',
            width: 400,
            labelWidth:120,
            fieldLabel: 'Imagem do Panfleto',
            margins: '0 0 0 0'
        },
        {
            xtype: 'textfield',
            hidden: true,
            name: 'id_panfleto',
            id: 'fieldIdPanfleto'
        },
        {
            xtype:'textfield',
            hidden: true,
            name:'id_pagina_panfleto',
            id: 'fieldIdPaginaPanfleto'
        }
        
        
    ]
});