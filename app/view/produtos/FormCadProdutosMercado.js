Ext.define('AppName.view.produtos.FormCadProdutosMercado',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formCadProdutosMercado',
    
    autoShow: true,
    bodyPadding: 10,
    //layout: 'fit',
//    region: 'center',
    items:[
        {
          xtype: 'fieldcontainer',
          layout: 'hbox',
          defaults:{
              anchor: '100%'
          },
          items:[
              {
                    xtype: 'textfield',
                    fieldLabel: 'Valor',
                    name: 'valor',
                    labelWidth: 65,
                    width: 180,
                    margins: '0 5 0 0'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Unidades',
                    labelWidth: 55,
                    width: 165
                }
              
          ]
        },
         {
          xtype: 'fieldcontainer',
          layout: 'hbox',
          items:[
              {
                    xtype: 'datefield',
                    fieldLabel: 'Fabricação',
                    name: 'fabricacao',    
                    labelWidth: 65,
                    width: 180,
                    margins: '0 5 0 0'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Validade',
                    name: 'validade',
                    labelWidth: 55,
                    width: 165
                },
                {
                    xtype: 'textfield',
                    name: 'id_produtos',
                    hidden: true,
                    id: 'fieldIdProdutosCadProdutosMercado'
                }
              
          ]
        },
        
        
    ]
});