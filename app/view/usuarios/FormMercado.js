Ext.define('AppName.view.usuarios.FormMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.formMercado',
    
    layout: 'border',
    id: 'formMercado',
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
                                  flex: 2,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'CNPJ',
                                  labelWidth: 40,
                                  flex: 1.5,
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
                                  fieldLabel: 'Razão Social',
                                  labelWidth: 100,
                                  flex: 3,
                                  margins: '0 5 0 0'
                                  
                              }
                          ]
                        },
                        {
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Nome Fantasia',
                                  labelWidth: 100,
                                  flex: 3,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Inscrição Social',
                                  labelWidth: 100,
                                  flex: 2,
                                  margins: '0 5 0 0'
                                  
                              }
                          ]
                        },
                        {
                          xtype: 'fieldcontainer',
                          combineErros: true,
                          layout: 'hbox',
                          items:[
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'email',
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
                                  labelWidth: 50,
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