Ext.define('AppName.view.relatorios.WindowRelatorioPedidosSimples',{
     extend: 'AppName.view.utils.Module',
     alias: 'widget.windowRelatorioPedidosSimples',
     id:'windowRelatorioPedidosSimples',
     
      init : function(){
        this.launcher = {
            text: 'Relatorios',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowRelatorioPedidosSimples');
        if(!win){
            win = desktop.createWindow({
                id: 'windowRelatorioPedidosSimples',
                title:'Relatório Pedidos (Simplificado)',
                border: false,
                width:850,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items:[
                    {
                        xtype: 'gridRelatorioPedidosSimples',
                        region: 'center'
                    }
                ],
                buttons: [
                    {
                        text: 'Imprimir',
                         handler : function(){
//                             console.lof
                            grid = Ext.getCmp('gridRelatorioPedidosSimples')
                            Ext.ux.grid.Printer.printAutomatically = false;
                            Ext.ux.grid.Printer.print(grid);
                            
                        }
                    },
                ]
               
            });
        return win;
    }
     }
});