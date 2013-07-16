Ext.define('AppName.controller.layout.ControllerTreePanelCategorias',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'layout.StoreTreePanelCategorias'        
    ],
    models: [
        'layout.ModelTreePanelCategorias'
    ],
    views: [
            
       'layout.TreePanelCategorias'
    ],
    
    init: function(){
        this.control({
            
        'treePanelCategorias': {selectionchange: this.showWindowProdutos}
          
        })
    },
  

    showWindowProdutos: function(model, records) {
            if (records[0]) {
                Ext.widget('winProdutos');
                if(!Ext.getCmp('panel-descricao').collapsed){
                    Ext.getCmp('panel-descricao').collapse();
                }
            }
        },
})