Ext.define('AppName.view.configuracoes.WindowConfiguracoes',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowconfiguracoes',
    id: 'windowconfiguracoes',
    
init : function(){
        this.launcher = {
            text: 'Configurações',
            iconCls:'icon-grid'
        };
    },
    
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowconfiguracoes');
        if(!win){
            win = desktop.createWindow({
                id: 'windowconfiguracoes',
                title:'Configurações',
                width: 500,
                height: 200,
                layout: 'border',
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                border: false,
               items:[
                    {
                        xtype:'formConfiguracoes',
                        region: 'center'
                    }
                ]
            });
        return win;
        }
     }
});