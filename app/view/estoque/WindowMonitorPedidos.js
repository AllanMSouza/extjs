Ext.define('AppName.view.estoque.WindowMonitorPedidos',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowMonitorEstoque',
    
    id: 'windowMonitorEstoque',
    
    init : function(){
        this.launcher = {
            text: 'Monitor Pedidos',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowMonitorEstoque');
        if(!win){
            win = desktop.createWindow({
                id: 'windowMonitorEstoque',
                title:'Monitor Pedidos',
                width: 1000,
                height: 500,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items: [
                     {
                        xtype: 'gridListaPedidosMercado',
                        region: 'center'
                    },
                    {
                        xtype: 'panelChangeStatus',
                        region: 'west'
                    }
                ]
            });
        return win;
    }
     }
    
   
   
});