Ext.define('AppName.controller.controlpanel.ControllerControlPanelMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'paineldecontrole.StoreGridControleEstoque',
        'paineldecontrole.StoreGridControlePedidos',
        'paineldecontrole.StoreGridControleFinanceiro'
    ],
    models: [
        'paineldecontrole.ModelGridControlePedidos',
        'paineldecontrole.ModelGridControleEstoque',
        'paineldecontrole.ModelGridControleFinanceiro'
    ],
    views: [
        'paineldecontrole.WindowControlPanelMercado',
        'paineldecontrole.DataViewControlPanelMercado',
        'paineldecontrole.WindowAlertaEstoque',
        'paineldecontrole.WindowVisaoGeral',
        'paineldecontrole.PanelHeaderEstoque',
        'paineldecontrole.PanelHeaderPedidos',
        'paineldecontrole.PanelHeaderFinanceiro',
        'paineldecontrole.GridControleEstoque',
        'paineldecontrole.GridControlePedidos',
        'paineldecontrole.GridControleFinanceiro'
    ],
    
    init: function(){
        this.control({
        
          
        })
    },
            
  
})