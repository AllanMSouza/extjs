Ext.define('AppName.controller.relatorios.graficos.ControllerGraficos',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'relatorios.graficos.StoreGraficoBarrasProdutosMercado'
    ],
    models: [
       
    ],
    views: [
     'relatorios.graficos.GraficoBarrasProdutosMercado',
     'relatorios.graficos.WindowGraficoBarrasProdutosMercado',
     'relatorios.graficos.WindowSelectGrafico',
     'relatorios.graficos.PanelSelectGrafico',
     'relatorios.graficos.DataViewGraficosProdutos',
     'relatorios.graficos.GraficoPizzaProdutosMercado',
     'relatorios.graficos.WindowGraficoPizzaProdutosMercado'
     
    ],
    
     init: function(){
        this.control({
            
        })
    }
    
})