Ext.define('AppName.controller.ControllerTreePanelCategorias',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'StoreTreePanelCategorias'        
    ],
    models: [
        'ModelTreePanelCategorias'
    ],
    views: [
            
       'layout.TreePanelCategorias'
    ],
    
    init: function(){
        this.control({
            
        //'treePanelCategorias': {itemexpand: this.teste}
          
        })
    },
  

    teste: function(node, func){
        console.log(node,func)
        if(Ext.getCmp('panel-categorias')){
            //console.log(Ext.getCmp('panel-categorias').store)
              var proxy = Ext.getCmp('panel-categorias').store.getProxy(),
                nomeCategoria = node.data.nome_categoria;
                proxy.url = 'app/data/php/Categorias.php?action=getCategorias&nomeCategoria=' + nomeCategoria;
            
                Ext.getCmp('panel-categorias').store.setProxy(proxy)
                //Ext.getCmp('panel-categorias').store.reload()
        }
    }
})