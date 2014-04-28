Ext.define('AppName.view.relatorios.WindowRelatorioCliente',{
     extend: 'AppName.view.utils.Module',
     alias: 'widget.windowRelatorioCliente',
     id:'windowRelatorioCliente',
     
      init : function(){
        this.launcher = {
            text: 'Relatorios Cliente',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowRelatorioCliente');
        if(!win){
            win = desktop.createWindow({
                id: 'windowRelatorioCliente',
                title:'Relatório Clientes Cadastrados',
                border: false,
                width:850,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items:[
                    {
                       xtype: 'gridRelatorioCliente',
                       region: 'center'
                    }
                ],
                
                buttons:[
                    {
                        text: 'Imprimir',
                        handler:function(){
                            var grid = Ext.getCmp('gridRelatorioCliente')
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