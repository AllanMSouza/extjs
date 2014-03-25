Ext.define('AppName.controller.controlpanel.ControllerControlPanelMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'paineldecontrole.StoreGridControleEstoque'
    ],
    models: [
        
    ],
    views: [
        'paineldecontrole.WindowControlPanelMercado',
        'paineldecontrole.DataViewControlPanelMercado',
        'paineldecontrole.WindowAlertaEstoque',
        'paineldecontrole.WindowVisaoGeral',
        'paineldecontrole.PanelHeaderEstoque',
        'paineldecontrole.PanelHeaderPedidos',
        'paineldecontrole.PanelHeaderFinanceiro',
        'paineldecontrole.GridControleEstoque'
    ],
    
    init: function(){
        this.control({
        
          
        })
    },
            
  
})