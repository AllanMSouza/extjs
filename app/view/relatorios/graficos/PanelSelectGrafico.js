Ext.define('AppName.view.relatorios.graficos.PanelSelectGrafico',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelSelectGrafico',
    
    autoShow: true,
    layout: 'accordion',
    region: 'center',
    width: 790,
    height: 360,
    defaults: {
        bodyPadding: 10
    },
    items:[
        {
            xtype: 'panel',
            title: 'Selecionar grafico de produtos',
//            height: 350,
            items:[
                {
                    xtype: 'dataviewGraficosProdutos'
                }
            ]
            
        },
        {
            xtype: 'panel',
            title: 'Selecionar grafico de vendas',
            items:[
                {
                    xtype: 'dataviewGraficosProdutos'
                }
            ]
            
        },
        {
            xtype: 'panel',
            title: 'Selecionar grafico de clientes',
            items:[
                {
                    xtype: 'dataviewGraficosProdutos'
                }
            ]
            
        }
    ]
});