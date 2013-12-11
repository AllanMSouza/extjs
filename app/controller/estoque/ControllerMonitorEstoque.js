Ext.define('AppName.controller.estoque.ControllerMonitorEstoque',{
    extend: 'Ext.app.Controller',
    
    stores: [    
      'estoque.StoreMonitorEstoque'
    ],
    models: [
      'estoque.ModelMonitorEstoque'
    ],
    views: [
     'estoque.GridListaMonitorEstoque',
     'estoque.WindowMonitorEstoque'
        
    ],
    
     init: function(){
        this.control({
          'gridListaMonitorEstoque button[action=changeColor]':{click: this.changeColor}
        })
    },
    
    changeColor: function(button){
        var proxy = Ext.getCmp('gridListaMonitorEstoque').store.getProxy();
        
        proxy.api.read = 'app/data/php/MonitorEstoque.php?action='+ button.id
        Ext.getCmp('gridListaMonitorEstoque').store.setProxy(proxy)
        Ext.getCmp('gridListaMonitorEstoque').store.load()
    }
      
  
})