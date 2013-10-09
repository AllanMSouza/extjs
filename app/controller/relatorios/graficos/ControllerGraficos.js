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
     
    ],
    
     init: function(){
        this.control({
            
        })
    }
    
})