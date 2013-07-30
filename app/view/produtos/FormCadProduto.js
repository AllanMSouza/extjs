Ext.define('AppName.view.produtos.FormCadProduto',{
   extend: 'Ext.panel.Panel',
   alias: 'widget.formCadProduto',
   
   layout: 'border',
   id: 'formCliente',
   title: 'Cadastro de Produtos',
   border: false,
//   frame: true,
   ui: 'light',
   items:[
       {
           xtype: 'form',
           bodyPadding: 10,
           region: 'center',
//           frame: true,
           border: false,
           items:[
               
               {
                   xtype: 'fieldcontainer',
                   combineErros: true,
                   layout: 'hbox',
                   items: [
                       {
                           xtype: 'image',
                           autoShow: true,
                           width: 100,
                           height: 100,
                           //html: 'hahahahaha',
                           //baseCls: 'panel2'
                           src: 'resources/imagens/congelados.png'
                           
                           
                       },
                       {
                           xtype: 'fileuploadfield',
                           width: 270,
                           margins: '35 0 0 5'
                       }
                      
                   ]
               },
                {
                    xtype: 'fieldset',
                    title: 'Informações Produto',
                    margins: '0 0 0 5',
                    layout: 'anchor',
                       defaults: {
                       anchor: '100%'
                    },
                    items:[
                         {
                            xtype: 'fieldcontainer',
                            combineErros: true,
                            layout: 'vbox',
                            items:[
                                {
                                    xtype: 'fieldcontainer',
                                    layout: 'hbox',
                                    items:[
                                        {
                                            xtype: 'textfield',
                                            name: 'codigo_produto',
                                            fieldLabel: 'Codigo',
                                            labelWidth: 47,
                                            width: 130,
                                            //flex: 0.4,
                                            margins: '0 5 0 0'

                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'nome_categoria',
                                            fieldLabel: 'Categoria',
                                            id: 'fieldCategoria',
                                            labelWidth: 55,
                                            width: 220
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'id_categoria',
                                            id: 'fieldIdCategoria',
                                            hidden: true
                                        }
                                    ]
                                },                               
                                
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Nome',
                                    name: 'nome_produto',
                                    labelWidth: 40,
                                    margins: '0 0 0 5',
                                    width: 350
                                }
                            ]
                        }

                    ]
                  },
               {
                 xtype: 'fieldset',
                 title: 'Informações Mercado',
                 margins: '0 0 0 5',
                   layout: 'anchor',
                   defaults: {
                      anchor: '100%'
                   },
                   items:[
                       {
                           xtype: 'fieldcontainer',
                           combineErros: true,
                           layout: 'hbox',
                           items:[
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'Quantidade',
                                   flex: 1,
                                   labelWidth: 70,
                                   
                               },
                               {
                                   xtype: 'textfield',
                                   fieldLabel: 'Valor',
                                   flex: 1,
                                   labelWidth: 35,
                                   margins: '0 0 0 5'
                               }
                           ]                           
                       },
                       {
                           xtype: 'fieldcontainer',
                           combineErros: true,
                           layout: 'hbox',
                           items:[
                               {
                                   xtype: 'datefield',
                                   fieldLabel: 'Fab',
                                   flex: 1,
                                   labelWidth: 25,
                                   
                               },
                               {
                                   xtype: 'datefield',
                                   fieldLabel: 'Val',
                                   flex: 1,
                                   labelWidth: 25,
                                   margins: '0 0 0 5'
                               }
                           ]                           
                       }
                   ]
                 
               },
               {
                 xtype: 'fieldcontainer',
                 layout: 'vbox',
                 defaults: {
                     anchor: '100%'
                 },
                 items :[
                    {
                        xtype: 'fieldset',
                        title: 'Descrição do Produto',
                        //layout: 'border',
                        width: 382,
                        items:[
                            {
                                 xtype: 'textarea',
                                 region: 'center',
                                 width: 360,
                                 name: 'descricao',

                             }
                        ]
                    }
                 ]
               },     
               
           ]
       }
   ]
});