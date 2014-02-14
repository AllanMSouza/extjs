Ext.define('AppName.view.usuarios.FormCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.formCliente',
    
    layout: 'border',
    id: 'formCliente',
    border:false,    
    items:[
        {
            xtype: 'form',
            //bodyPadding: 10,
            region: 'center',
            border:false,
            ui: 'light',
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
                            bodyPadding: '10 50',
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
                                            width: 350,
                                            labelWidth: 40,
                                            //flex: 3,
                                            margins: '0 5 0 0'

                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            combineErros: true,
                                            layout: 'column',
                                            items:[
//                                                 {
//                                                    xtype: 'textfield',
//                                                    fieldLabel: 'CPF',
//                                                    name: 'cpf',
//                                                    width: 150,
//                                                    labelWidth: 40,
//                                                    //flex: 1.5,
//                                                    margins: '0 5 0 0'
//
//                                                  },
                                                  {
                                                      xtype: 'fieldcontainer',
                                                      //width: 200,
                                                      layout: 'hbox',
                                                      //bodyPadding: 10,
                                                      items:[
                                                           {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'CPF',
                                                            name: 'cpf',
                                                            width: 173,
                                                            labelWidth: 40,
                                                            //flex: 1.5,
                                                            margins: '0 5 0 0'

                                                          },
                                                          {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'RG',
                                                            name: 'rg',
                                                            width: 172,
                                                            labelWidth: 32,
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
                                                            xtype: 'combobox',
                                                            fieldLabel: 'Sexo',
                                                            name: 'sexo',
                                                            store:  Ext.create('Ext.data.Store', {
                                                            fields: ['abbr', 'name'],
                                                            data : [
                                                                {"abbr":"M", "name":"M"},
                                                                {"abbr":"F", "name":"F"},
        //                                                        {"abbr":"AZ", "name":"Arizona"}
                                                                //...
                                                            ]
                                                            }),
                                                            labelWidth: 40,
                                                            width: 100,
                                                            queryMode: 'local',
                                                            displayField: 'name',
                                                            valueField: 'abbr',
                                                            margins: '0 5 0 0'
                                                        },
                                                         {
                                                            xtype: 'datefield',
                                                            fieldLabel: 'Data Nascimento',
                                                            name: 'data_nascimento',
                                                            labelWidth: 105,
                                                            width: 245,
                                                           // flex: 2,
                                                            margins: '0 5 0 0'
                                                        }
                                                 ]
                                                }
                                            ]
                                        },
                                       
//                                    ]
//                                },
                                
                            ]
                        },
                        
                        {
                          title: 'Logradouro',
                          plain: true,
                          border: false,
                          bodyPadding: '10 20',
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
                            bodyPadding: '10 100',
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
                            bodyPadding: '10 120',
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
                                },
                                {
                                    xtype: 'textfield',
//                                    fieldLabel: 'Senha',
                                    hidden:true,
                                    name: 'tipoFunc',
                                    id:'tipoFunc'
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
             xtype:'combobox',
             fieldLabel: 'Funcionario',
             hidden: true,
//             name: 'tipoFunc',
             id:'tipoFuncionario',
             store:  Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"Administrador", "name":"3"},
                {"abbr":"Estoque/Pedidos", "name":"4"},
                {"abbr":"Painel de Controle", "name":"5"},
                {"abbr":"Suporte", "name":"6"},
//                                                        {"abbr":"AZ", "name":"Arizona"}
                //...
            ]
            }),
//            labelWidth: 40,
//            width: 100,
            queryMode: 'local',
            displayField: 'abbr',
            valueField: 'name',
            listeners:{
                select:function(){
//                    console.log(Ext.getCmp('tipoFuncionario').getValue())
                    Ext.getCmp('tipoFunc').setValue(Ext.getCmp('tipoFuncionario').getValue())
                }
            }
        },
        {
            text: 'Salvar',
            action: 'saveCliente'
        },
        {
            text: 'Cancelar',
            action: 'cancel',
            handler: function(){
                Ext.getCmp('windowCadCliente').close()
            }
        },
        
    ]
    
});