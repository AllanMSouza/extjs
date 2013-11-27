Ext.define('AppName.view.pedido.FormFinalizarPedido',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formFinalizarPedido',
    id: 'formFinalizarPedido',
    
    autoShow: true,
    layout: 'vbox',
    width: 750,
    border: false,
    items:[
        {
            xtype: 'fieldcontainer',
            layout: 'column',
            margins: '0 0 0 5',
            items:[
                {
                    xtype: 'textfield',
                    name: 'total',
                    id: 'fieldtotal',
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    name: 'nome_lista',
                    id: 'fieldNomeLista',
                    hidden: true
                },
                {
                    xtype: 'radiogroup',
                    margins: '0 0 0 5',
                    fieldLabel: 'Retirar ou Entregar?',
                    labelWidth: 130,
                    columns: 2,
                    vertical: true,
                    width: 350,
                    items:[
                         { boxLabel: 'Retirar', width: 70, name: 'retirarEntregar', inputValue: '1', checked: true},
                         { boxLabel: 'Entregar',width: 70,  name: 'retirarEntregar', inputValue: '2' },
                         
                    ],
                    
                     listeners:{
                                change:function(a,b,c){
                                    if(b.retirarEntregar == 2){
                                        Ext.getCmp('fieldsetLogradouro').enable()
                                    }
                                    else {
                                        Ext.getCmp('fieldsetLogradouro').disable()
                                    }
                                }
                            }
                },
//                {
//                    xtype: 'radiogroup',
//                    margins: '0 0 0 5',
//                    fieldLabel: 'Endereço de entrega',
//                    labelWidth: 150,
//                    width: 400,
//                    columns: 2,
//                    vertical: true,
//                    items:[
//                         { boxLabel: 'Cadastrado', width: 100, name: 'localOutro', inputValue: '1', checked: true},
//                         { boxLabel: 'Outro',width: 100,  name: 'localOutro', inputValue: '2'},
//                    ],
//                    listeners:{
//                        change:function(a,b,c){
//                            if(b.localOutro == 2){
//                                Ext.getCmp('fieldsetLogradouro').enable()
//                            }
//                            else {
//                                Ext.getCmp('fieldsetLogradouro').disable()
//                            }
//                        }
//                    }
//
//                },
                
            ]
        },
        
        {
            xtype: 'fieldset',
            id: 'fieldsetLogradouro',
            disabled: true,
            margins : '0 0 0 5',
            title: 'Endereço de Entrega',
            width: 700,
//            height: 200,
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
                                     width: 600,
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
                                    width: 375,
                                    labelWidth: 60,
                                    margins: '0 5 0 0'
                              //flex: 2
                                 },
                                 {
                                     xtype: 'textfield',
                                     fieldLabel: 'Complemento',
                                     name: 'complemento',
                                     labelWidth: 85,
                                     width: 295
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
                                    width: 375,
                                    margins: '0 5 0 0'
                                    //flex: 2
                                },                                               
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'CEP',
                                    name: 'cep',
                                    width:160,
                                    labelWidth: 30,
                                    //flex: 1
                                    margins: '0 5 0 0'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'UF',
                                    name: 'estado',
                                    labelWidth: 20,
                                    width:130,
                                    margins: '0 5 0 0'
                                    //flex: 2/3
                                },
                             ]
                         }
                     ]
                 }
            
            ]
        }
    ]
    
});