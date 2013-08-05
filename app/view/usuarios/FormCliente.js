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
                                  name: 'nome',
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
                                  name: 'cpf',
                                  labelWidth: 40,
                                  flex: 1.5,
                                  margins: '0 5 0 0'
                                  
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'RG',
                                    name: 'rg',
                                    labelWidth: 30,
                                    flex: 1.5,
                                    margins: '0 27 0 0'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: 'Data Nascimento',
                                    name: 'data_nascimento',
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
                                  name: 'email',
                                  labelWidth: 40,
                                  flex: 3,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Telefone',
                                  name: 'telefone',
                                  labelWidth: 50,
                                  flex: 2,
                                  margins: '0 5 0 0'
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Celular',
                                  name: 'celular',
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
                                    name: 'login',
                                    flex: 2,
                                    labelWidth: 40,
                                    margins: '0 5 0 0'
                                                                        
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Senha',
                                    name: 'senha',
                                    flex: 2,
                                    inputType: 'password',
                                    labelWidth: 40,
                                    margins: '0 5 0 0'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Confirmação',
                                    name: 'conf_senha',
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
                                  name: 'endereco',
                                  labelWidth:60,
                                  margins: '0 5 0 0',
                                  flex: 4
                                  
                              },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'No.',
                                  name: 'numero',
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
                                   name: 'bairro',
                                   labelWidth: 60,
                                   margins: '0 5 0 0',
                                   flex: 2
                               },
                              {
                                  xtype: 'textfield',
                                  fieldLabel: 'Complemento',
                                  name: 'complemento',
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
                                   name: 'cidade',
                                   labelWidth: 60,
                                   margins: '0 5 0 0',
                                   flex: 2
                               },
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'UF',
                                   name: 'estado',
                                   labelWidth: 20,
                                   margins: '0 5 0 0',
                                   flex: 2/3
                               },
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'CEP',
                                   name: 'cep',
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
            text: 'Save',
            action: 'saveCliente'
        },
        {
            text: 'Cancel'
        }
    ]
    
});