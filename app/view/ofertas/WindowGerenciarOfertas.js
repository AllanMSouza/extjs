Ext.define('AppName.view.ofertas.WindowGerenciarOfertas',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowGerenciarOfertas',
    id: 'windowGerenciarOfertas',
    
    init : function(){
        this.launcher = {
            text: 'Gerenciar Ofertas',
            iconCls:'icon-grid'
        };
    },
            
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarOfertas');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarOfertas',
                title:'Gerenciar Ofertas',
                width:1300,
                height:600,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'border',
                items: [
                    {
                        xtype: 'panel',
                        region:'center',
                        layout: 'fit',
                        autoScroll: true,
                        split: true,
                        title: 'Meus Produtos',
                        ui: 'light',
                        border: false,
                        items:[
                            {
                                xtype: 'dataViewListaProdutosMercado',
                                border: false,
                                split: true,
                             },
                        ]
                    },
                     
                     {
                         xtype: 'gridMinhasOfertas',
                         ui: 'light',
                         region: 'east',
                         border: false,
                         split: true,
                         width: 500
                     }
                ]
            });
        return win;
        }
     }
});