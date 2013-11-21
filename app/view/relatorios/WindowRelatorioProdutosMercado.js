Ext.define('AppName.view.relatorios.WindowRelatorioProdutosMercado',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowRelatorioProdutosMercado',

    id: 'windowRelatorioProdutosMercado',
    
    init : function(){
        this.launcher = {
            text: 'Relatorios',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowRelatorioProdutosMercado');
        if(!win){
            win = desktop.createWindow({
                id: 'windowRelatorioProdutosMercado',
                title:'Relatório Produtos Mercado',
                width:850,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items: [
                     {
                        xtype: 'gridListaCategorias',
                        ui: 'light',
                        region: 'west',
                        split: true
                    },
                    {
                        xtype: 'gridListaRelatorioProdutosMercado',
                        ui: 'light',
                        split: true
                    }
                ]
            });
        return win;
    }
     }
    
});