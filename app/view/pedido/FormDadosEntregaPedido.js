Ext.define('AppName.view.pedido.FormDadosEntregaPedido',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formDadosEntregaPedido',
    id: 'formDadosEntregaPedido',
    
    autoShow: true,
    border: false,
    bodyPadding: 10,
//    layout: 'fit',
    items:[
        {
            xtype: 'fieldset',
            id: 'fieldsetLogradouro',
//            disabled: true,
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
        },
        {
            xtype: 'fieldset',
            title: 'Dados do Pedido',
            layout: 'hbox',
            width: 700,
            defaults: {
//                flex: 1,
                labelWidth: 40,
                margins: '0 0 5 5'
            },
            items:[
                {
                    xtype: 'textfield',
                    name: 'nome',
                    fieldLabel: 'Cliente',
                    flex: 1
                },
                {
                    xtype: 'textfield',
                    name: 'id_pedido',
                    fieldLabel: 'Pedido',
                    flex: 0.5
                },
                {
                    xtype: 'textfield',
                    name: 'data',
                    fieldLabel: 'Data',
                    flex: 0.8
                },
                {
                    xtype: 'textfield',
                    name: 'valor_pedido',
                    fieldLabel: 'Valor',
                    flex: 0.5
                }
            ]
        }
    ]
});