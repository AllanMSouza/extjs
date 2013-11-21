Ext.define('AppName.view.relatorios.graficos.WindowGraficoPizzaProdutosMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGraficoPizzaProdutosMercado',
    
    autoShow: true,
    layout: 'border',
    width: 880,
    height: 550,
    modal: true,
    title: 'Grafico de Barras Produtos Mercado',
    items: [
        {
//            xtype: 'graficoBarrasProdutosMercado',
            xtype: 'graficoPizzaProdutosMercado',
            region: 'center'
        }
    ]
});