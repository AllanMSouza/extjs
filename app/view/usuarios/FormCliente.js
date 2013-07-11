Ext.define('AppName.view.usuarios.FormCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.formCliente',
    
    layout: 'border',
    id: 'formCliente',
    border:false,    
    items:[
        {
            xtype: 'form',
            bodyPadding: 10,
            region: 'center',
            border:false,
            items:[
                {
                    xtype: 'fieldset',
                    title: 'Informações',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Nome',
                                  labelWidth: 40,
                                  flex: 3,
                                  margins: '0 5 0 0'
                                  
                              },
                              
                          ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErros: true,
                            layout: 'hbox',
                            items:[
                                {
                                  xtype: 'textfield',
                                  fieldLabel: 'CPF',
                                  labelWidth: 40,
                                  flex: 1.5,
                                  margins: '0 5 0 0'
                                  
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'RG',
                                    labelWidth: 30,
                                    flex: 1.5,
                                    margins: '0 27 0 0'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Data Nascimento',
                                    labelWidth: 110,
                                    flex: 2,
                                    margins: '0 5 0 0'
                                },
                            ]
                        },
                        {
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Email',
                                  labelWidth: 40,
                                  flex: 3,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Telefone',
                                  labelWidth: 50,
                                  flex: 2,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Celular',
                                  labelWidth: 47,
                                  flex: 2,
                                  margins: '0 5 0 0'
                                  
                              }
                          ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Login',
                                    flex: 2,
                                    labelWidth: 40,
                                    margins: '0 5 0 0'
                                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Senha',
                                    flex: 2,
                                    inputType: 'password',
                                    labelWidth: 40,
                                    margins: '0 5 0 0'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Confirmação',
                                    flex: 2,
                                    inputType: 'password',
                                    labelWidth: 78  ,
                                    margins: '0 5 0 0'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Localização',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Endereço',
                                  labelWidth:60,
                                  margins: '0 5 0 0',
                                  flex: 4
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'No.',
                                  labelWidth: 20,
                                  flex: 1/2
                                  
                              },                              
                          ]
                        },
                        {                            
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'Bairro',
                                   labelWidth: 60,
                                   margins: '0 5 0 0',
                                   flex: 2
                               },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Complemento',
                                  labelWidth: 90,
                                  flex: 3
                                  
                              },                              
                          ]
                        
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            layout: 'hbox',
                            items: [
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'Cidade',
                                   labelWidth: 60,
                                   margins: '0 5 0 0',
                                   flex: 2
                               },
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'UF',
                                   labelWidth: 20,
                                   margins: '0 5 0 0',
                                   flex: 2/3
                               },
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'CEP',
                                   labelWidth: 30,
                                   flex: 1
                               },
                            ]
                        }
                    ]
                },
            ]
        }
    ],
    buttons:[
        {
            text: 'Save'
        },
        {
            text: 'Cancel'
        }
    ]
    
});