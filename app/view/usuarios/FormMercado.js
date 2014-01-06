Ext.define('AppName.view.usuarios.FormMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.formMercado',
    
    layout: 'border',
    id: 'formMercado',
    border:false,    
    items:[
        {
            xtype: 'form',
            //bodyPadding: 10,
            region: 'center',
            border:false,
            items:[
                
                {
                    xtype: 'tabpanel',
                    border: false,
//                    height: 200,
                    ui: 'ligth',
                    plain: true,
                    defaults :{
                        bodyPadding: 10,
                        anchor: '100%'
                    },
                    items:[
                        {
                            title: 'Informações Gerais',
                            border: false,
                            plain: true,
                            bodyPadding: '10 30',
                            loader: {
//                                url: 'ajax1.htm',
//                                contentType: 'html',
                                loadMask: true
                            },
                            items:[
                                {
//                                    xtype: 'fieldcontainer',
//                                    combineErros: true,
//                                    layout: 'hbox',
//                                    items:[
//                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Nome',
                                            name: 'nome',
                                            width: 400,
                                            labelWidth: 40,
                                            //flex: 3,
                                            margins: '0 5 0 0'

                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            combineErros: true,
                                            layout: 'column',
                                            items:[
                                                 {
                                                      xtype: 'fieldcontainer',
                                                      //width: 200,
                                                      layout: 'hbox',
                                                      //bodyPadding: 10,
                                                      items:[
                                                           {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'CNPJ',
                                                            name: 'cnpj',
                                                            width: 173,
                                                            labelWidth: 40,
                                                            //flex: 1.5,
                                                            margins: '0 5 0 0'

                                                          },
                                                          {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'Razão Social',
                                                            name: 'razao_social',
                                                            width: 222,
                                                            labelWidth: 85,
                                                            //flex: 1.5,
                                                            margins: '0 27 0 0'
                                                        }
                                                          
                                                      ]
                                                  },
                                                  
                                                
                                            ]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            combineErros: true,
                                            layout: 'column',
                                            items: [
                                                {
                                                      xtype: 'fieldcontainer',
                                                      //width: 200,
                                                      layout: 'hbox',
                                                      //bodyPadding: 10,
                                                      items:[
                                                       {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'Nome Fantasia',
                                                            name: 'nome_fantasia',
                                                            labelWidth: 100,
                                                            width: 400,
                                                            //flex: 3,
                                                            margins: '0 5 0 0'

                                                        },                                                       
                                                 ]
                                                }
                                            ]
                                        },
                                         {
                                            xtype: 'textfield',
                                            fieldLabel: 'Inscrição Social',
                                            name: 'inscricao_social',
                                            labelWidth: 100,
                                            width: 400,
                                            flex: 2,
                                            margins: '0 5 0 0'

                                        }
                                       
//                                    ]
//                                },
                                
                            ]
                        },
                        
                        {
                          title: 'Logradouro',
                          plain: true,
                          border: false,
                          bodyPadding: '20 20',
                          items:[
                               {
                                   xtype: 'fieldcontainer',
                                    combineErros: true,
                                    layout: 'column',
                                    items:[
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
                                                    width: 350,
                                                    margins: '0 5 0 0'
                                                    //flex: 4

                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'No.',
                                                    name: 'numero',
                                                    width: 70,
                                                    labelWidth: 20
                                                    //flex: 1/2

                                                },                              
                                            ]
                                          }                                        
                                    ]
                               },
                               {
                                   xtype: 'fieldcontainer',
                                   combineErros: true,
                                   layout: 'column',
                                   items:[ 
                                       {
                                           xtype: 'fieldcontainer',
                                           combineErros: true,
                                           layout: 'hbox',
                                           items:[
                                               {
                                                   xtype: 'textfield',
                                                   fieldLabel: 'Bairro',
                                                   name: 'bairro',
                                                   width: 200,
                                                   labelWidth: 60,
                                                   margins: '0 5 0 0'
                                             //flex: 2
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Complemento',
                                                    name: 'complemento',
                                                    labelWidth: 85,
                                                    width: 220
                                                    //flex: 3

                                                },                              
                                           ]
                                      }
                                 ]                       
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'column',
                                    items: [                       
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
                                                   width: 230,
                                                   margins: '0 5 0 0'
                                                   //flex: 2
                                               },                                               
                                               {
                                                   xtype: 'textfield',
                                                   fieldLabel: 'CEP',
                                                   name: 'cep',
                                                   width:115,
                                                   labelWidth: 30,
                                                   //flex: 1
                                                   margins: '0 5 0 0'
                                               },
                                               {
                                                   xtype: 'textfield',
                                                   fieldLabel: 'UF',
                                                   name: 'estado',
                                                   labelWidth: 20,
                                                   width: 70,
                                                   margins: '0 5 0 0'
                                                   //flex: 2/3
                                               },
                                            ]
                                        }
                                    ]
                                }
                                   
                                  ]
                                },
                        {
                            title: 'Contato',
                            plain: true,
                            border: false,
                            bodyPadding: '20 100',
                            items:[
                                  {
                                  xtype: 'textfield',
                                  fieldLabel: 'Email',
                                  name: 'email',
                                  labelWidth: 60,
                                  width: 250,
                                  //flex: 3,
                                  margins: '0 5 0 0'
                                  
                              },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'column',
                                    width: 600,
                                    items:[
                                            {
                                                xtype: 'fieldcontainer',
                                                fieldLabel: 'Telefone',
                                                labelWidth: 60,
                                                layout: {
                                                    type: 'hbox',
                                                    defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
                                                },
                                                defaults: {
                                                    hideLabel: true
                                                },
                                                combineErrors: true,
                                                msgTarget: 'under',
                                                items: [
                                                    {xtype: 'displayfield', value: '('},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'ddd_telefone', width: 35, allowBlank: false},
                                                    {xtype: 'displayfield', value: ')'},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'telefone_pt1', width: 48, allowBlank: false, margins: '0 5 0 0'},
                                                    {xtype: 'displayfield', value: '-'},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'telefone_pt2', width: 48, allowBlank: false}
                                                ]
                                            }
                                    
                                    ]
                                },
                                  {
                                    xtype: 'fieldcontainer',
                                    layout: 'column',
                                    width: 600,
                                    items:[
                                            {
                                                xtype: 'fieldcontainer',
                                                fieldLabel: 'Celular',
                                                labelWidth: 60,
                                                layout: {
                                                    type: 'hbox',
                                                    defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
                                                },
                                                defaults: {
                                                    hideLabel: true
                                                },
                                                combineErrors: true,
                                                msgTarget: 'under',
                                                items: [
                                                    {xtype: 'displayfield', value: '('},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'ddd_celular', width: 35, allowBlank: false},
                                                    {xtype: 'displayfield', value: ')'},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'celular_pt1', width: 48, allowBlank: false, margins: '0 5 0 0'},
                                                    {xtype: 'displayfield', value: '-'},
                                                    {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'celular_pt2', width: 48, allowBlank: false}
                                                ]
                                            }
                                    
                                    ]
                                }
                            ]
                            
                        },
                        {
                            title: 'Acesso/Login',
                            plain: true,
                            border: false,
                            bodyPadding: '20 120',
                            items:[
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
                                    fieldLabel: 'Senha',
                                    name: 'conf_senha',
                                    flex: 2,
                                    inputType: 'password',
                                    labelWidth: 40  ,
                                    margins: '0 5 0 0'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ],
    buttons:[
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            action: 'cancel',
            handler: function(){
                Ext.getCmp('windowCadMercado').close()
            }
        }
    ]
});