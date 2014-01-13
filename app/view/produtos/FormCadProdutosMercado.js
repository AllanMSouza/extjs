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
                    name: 'quantidade',
                    fieldLabel: 'Unidades',
                    labelWidth: 55,
                    width: 165
                },
              
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
                    format: 'Y-m-d',
                    maxValue: new Date(),
                    width: 180,
                    margins: '0 5 0 0'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Validade',
                    name: 'validade',
                    format: 'Y-m-d',
//                    mimValue: new Date(),
                    labelWidth: 55,
                    width: 165
                },
                {
                    xtype: 'textfield',
                    name: 'id_produtos',
                    hidden: true,
                    id: 'fieldIdProdutosCadProdutosMercado'
                },
//                {
//                    xtype: 'textfield',
//                    name: 'categorias_id_categorias',
//                    hidden: true,
//                    id: 'fieldIdCategoriasIdCategoriasWindowCadProdutoMercado'
//                },
//                {
//                    xtype: 'textfield',
//                    name: 'codigo_produto',
//                    hidden: true,
//                    id: 'fieldCodigoProdutoWindowCadProdutoMercado'
//                },
                
          ]
        },
        {
            xtype: 'fieldset',
            title: 'Faixas de Estoque',
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                xtype: 'textfield'
            },
            items:[
                {
                    fieldLabel: 'Vermelho',
                    name: 'vermelho'
                },
                {
                    fieldLabel: 'Laranja',
                    name: 'laranja'
                },
                {
                    fieldLabel: 'Verde',
                    name: 'verde'
                },
            ]
        }
        
        
    ]
});