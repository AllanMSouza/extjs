Ext.define('AppName.view.kits.WindowGerenciarListaKitsMercado',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowGerenciarListaKitsMercado',
    id: 'windowGerenciarListaKitsMercado',
    
    init : function(){
        this.launcher = {
            text: 'Gerenciar Kits',
            iconCls:'icon-grid'
        };
    },
    
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarListaKitsMercado');
        if(!win){
            win = desktop.createWindow({
//                id: 'windowGerenciarListaKitsMercado',
                title:'Gerenciar kits Mercado',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [
                     {
                        xtype: 'gridListaKitsMercado'
                    }
                ]
            });
        return win;
    }
     }
    
   });