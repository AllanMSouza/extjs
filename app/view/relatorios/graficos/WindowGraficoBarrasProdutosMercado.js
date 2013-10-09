Ext.define('AppName.view.relatorios.graficos.WindowGraficoBarrasProdutosMercado',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowGraficoBarrasProdutosMercado',
    
    autoShow: true,
    layout: 'border',
    width: 850,
    height: 400,
    modal: true,
    title: 'Grafico de Barras Produtos Mercado',
    items: [
        {
            xtype: 'graficoBarrasProdutosMercado',
            region: 'center'
        }
    ]
});