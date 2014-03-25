Ext.define('AppName.view.paineldecontrole.WindowVisaoGeral',{
      extend: 'AppName.view.utils.Module',
     alias: 'widget.windowVisaoGeral',
     id: 'windowVisaoGeral',
   
    init : function(){
        this.launcher = {
            text: 'Visão Geral',
            iconCls:'icon-grid'
        };
    },
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowVisaoGeral');
        if(!win){
            win = desktop.createWindow({
                title: 'Visão Geral',
                width: 1300,
                height: 700,
                layout: 'border',
                items:[
                    {
                      xtype: 'panel',
                      width: 400,
                      region: 'west',
                      split: true,
                      layout: 'border',
                      items: [
                          {
                              xtype: 'panelHeaderEstoque'
                          },
                          {
                              xtype: 'gridControleEstoque',
                              region: 'center'
                          }
                      ]
                    },
                    
                    
                    {
                        xtype: 'panel',
                        region: 'center',
                        layout: 'border',
                        split: true,
                        items:[
                            {
                                xtype: 'panelHeaderPedidos'
                            },
                            {
                                xtype: 'gridControlePedidos',
                                region: 'center'
                            }
                        ]
                    },
                    
                    {
                        xtype: 'panel',
                        region: 'east',
                        layout: 'border',
                        split: true,
                        width: 400,
                        items:[
                            {
                                xtype: 'panelHeaderFinanceiro'
                            },
                            {
                                xtype: 'gridControleFinanceiro',
                                region: 'center'
                            }
                        ]
                    }
                ],               
            });
        return win;
        }
     }
    
});