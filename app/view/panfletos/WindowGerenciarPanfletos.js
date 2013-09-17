Ext.define('AppName.view.panfletos.WindowGerenciarPanfletos',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowGerenciarPanfletos',
    
//    title: 'Gerenciar Panfletos',
    /*autoShow: true,
    border: false,
    height: 400,
    width: 800,
    layout: 'border',
    
    items:[
        {
            xtype: 'gridListaPanfletos'
        }
    ]*/
    id: 'windowGerenciarPanfletos',
    
    init : function(){
        this.launcher = {
            text: 'Gerenciar Panfletos',
            iconCls:'icon-grid'
        };
    },
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarPanfletos');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarPanfletos',
                title:'Gerenciar Panfletos',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [
                     {
                        xtype: 'gridListaPanfletos'
                    }
                ]
            });
        return win;
    }
     }
    
});