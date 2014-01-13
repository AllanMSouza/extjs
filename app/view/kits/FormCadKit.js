Ext.define('AppName.view.kits.FormCadKit',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadKit',
    id: 'formCadKit',
    
    autoShow: true,
//    title: 'Novo kit',
    border: false,
    width: 400,
    region: 'center',
    height: 300,
    bodyPadding: 10,
    items:[
        {
            xtype: 'fieldcontainer',
            layout: 'column',
            items: [
                 {
                    xtype: 'image',
//                    region: 'east',
                    id: 'imgKit',
                    autoShow: true,
                    width: 100,
                    height: 100,
                    //html: 'hahahahaha',
                    //baseCls: 'panel2'
                    src: 'resources/imagens/congelados.png'


                },
                 {
                    xtype: 'fieldcontainer',
        //            layout: 'hbox',
//                    region: 'center',
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
//                                    flex: 0.3,
                                    width: 160,
                                    labelWidth: 50,
                                     format: 'Y-m-d',
                                    margins: '0 5 0 0'
                                },
                                 {
                                    xtype: 'textfield',
                                    fieldLabel: 'Desconto',
                                    name: 'desconto',
                                    width: 110,
                                    labelWidth: 60,
                                     margins: '0 5 0 0'
                                },
//                                {
//                                    xtype: 'checkbox',
//                                    fieldLabel: 'Ativo',
//                                    name: 'ativo',
//                                    flex: 0.1,
//                                    labelWidth: 30,
//                                     margins: '0 5 0 0'
//                                },
                                {
                                    xtype: 'textfield',
                                    name: 'id_kit',
                                    hidden: true
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
                //                    region: 'center',
//                                    layout: 'fit',
                                    width: 345,
                                    margins: '0 0 7 0'
                                }
                            ]
                        }
                    ]
                },
            ]
        },
       
       
    ],
    
    
    buttons: [
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            action: 'cancel',
            handler:function(){
                Ext.getCmp('windowCadKit').close()
            }
        }
    ]
    
    
});