Ext.define('AppName.view.paineldecontrole.WindowControlPanelMercado',{
     extend: 'AppName.view.utils.Module',
     alias: 'widget.windowControlPanelMercado',
   
   
    
     init : function(){
        this.launcher = {
            text: 'Painel de Controle',
            iconCls:'icon-grid'
        };
    },
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowControlPanelMercado');
        if(!win){
            win = desktop.createWindow({
//                closable: true,
//                resizable:false,
//                autoShow: true,
                title: 'Painel de Controle',
                width: 500,
                height: 230,
                layout: 'border',
                items:[
                    {
                        xtype: 'panel',
                        region: 'center',
                        layout: 'fit',
                        items:[
                            {
                                xtype:'dataViewControlPanelMercado'
                            }
                        ]
                    }
                ],               
            });
        return win;
        }
     }
    
    
    
    
});