Ext.Loader.setConfig({enabled: true});
 
Ext.require([
    'Ext.ux.grid.Printer',
]);


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
                border: false,
                width:850,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items: [
                    {
                        xtype: 'panelGridsProdutosPorCategoria',
                        border: false
                    }
//                     {
//                        xtype: 'gridListaCategorias',
//                        ui: 'light',
//                        region: 'west',
//                        split: true
//                    },
//                    {
//                        xtype: 'gridListaRelatorioProdutosMercado',
//                        ui: 'light',
//                        split: true
//                    }
                ],
                buttons: [
                    {
                        text: 'Imprimir',
                         handler : function(){
//                             console.lof
                            grid = Ext.getCmp('gridPadariaeSobremesas')
                            grid2 = Ext.getCmp('gridCarnes')
                            Ext.ux.grid.Printer.printAutomatically = false;
                            Ext.ux.grid.Printer.print(grid);
                            
                        }
                    },
                    {
                        text: 'Gerar gráfico'
                    }
                ]
            });
        return win;
    }
     }
    
});