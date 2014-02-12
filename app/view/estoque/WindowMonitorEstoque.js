Ext.define('AppName.view.estoque.WindowMonitorEstoque',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowMonitorEstoque',
    id: 'windowMonitorEstoque',
    
     init : function(){
        this.launcher = {
            text: 'Monitor de Estoque',
            iconCls:'icon-grid'
        };
    },
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowMonitorEstoque');
        if(!win){
            win = desktop.createWindow({
                id: 'windowMonitorEstoque',
                title:'Monitor de Estoque',
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                width: 800,
                height: 500,
                items:[
                    {
                        xtype: 'gridListaMonitorEstoque',
//                        region: 'center'
                    }
                ]
            });
        return win;
        }
     }
    
    
    
});