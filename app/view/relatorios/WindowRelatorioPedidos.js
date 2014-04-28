Ext.define('AppName.view.relatorios.WindowRelatorioPedidos',{
     extend: 'AppName.view.utils.Module',
     alias: 'widget.windowRelatorioPedidos',
     id:'windowRelatorioPedidos',
     
      init : function(){
        this.launcher = {
            text: 'Relatorios Produtos & Pedidos',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowRelatorioPedidos');
        if(!win){
            win = desktop.createWindow({
                id: 'windowRelatorioPedidos',
                title:'Relatório Pedidos',
                border: false,
                width:850,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items:[
                    {
                        xtype: 'gridRelatorioPedidosProdutos',
                        region: 'center'
                    }
                ],
                
                buttons:[
                    {
                        text: 'Imprimir',
                        handler:function(){
                            var grid = Ext.getCmp('gridRelatorioPedidosProdutos')
                             Ext.ux.grid.Printer.printAutomatically = false;
                            Ext.ux.grid.Printer.print(grid);
                        }
                    }
                ]
                
               
            });
        return win;
    }
     }
});