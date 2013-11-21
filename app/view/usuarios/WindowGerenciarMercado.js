Ext.define('AppName.view.usuarios.WindowGerenciarMercado',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowGerenciarMercado',
    id: 'windowGerenciarMercado',
    
//    autoShow: true,

init : function(){
        this.launcher = {
            text: 'Meu Perfil',
            iconCls:'icon-grid'
        };
    },
    
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarMercado');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarMercado',
//                title:'Gerenciar Meus Produtos',
                width: 820,
                height: 400,
                layout: 'border',
                title: 'Gerenciar Supermercados',
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
//                layout: 'border',
               items:[
                    {
                        xtype:'gridListaMercados',
                        region: 'center'
                    }
                ]
            });
        return win;
    }
     }
     
   
});