Ext.define('AppName.controller.kits.ControllerCadKitListaCliente',{
    extend: 'Ext.app.Controller',
    
    stores: [
    
      'kits.StoreDataViewKits'
    ],
    models: [
        'kits.ModelCrudKitsProdutosMercado',
        'kits.ModelListaProdutosKits'
    ],
    views: [
     
        'kits.PanelDescKit',
        'kits.DataViewProdutosKit',
        'kits.WindowDataViewKitsProdutosKit',
        
    ],
    
     init: function(){
        this.control({
          'windowDataViewKitsProdutosKit button[action=teste]' : {click: this.teste}
          
        })
    },
    
    teste: function(){
       // console.log('hahahahahahahahahahahaha')
    }
    
    
  
})