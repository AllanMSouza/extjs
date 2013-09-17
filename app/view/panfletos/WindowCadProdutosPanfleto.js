Ext.define('AppName.view.panfletos.WindowCadProdutosPanfleto',{
    extend: 'AppName.view.utils.Module',
    alias: 'widget.windowCadProdutosPanfleto',
    id:'windowCadProdutosPanfleto',
    
//    autoShow: true,
    
    maximizable: true,
    minimizable: true,

createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop()
        var win = desktop.getWindow('windowCadProdutosPanfleto');
        if(!win){
            win = desktop.createWindow({
                id: 'windowCadProdutosPanfleto',
                title:'Cadastrar Produtos Página Panfleto',
                width: 1350,
                height: 500,
                layout: 'border',
                animCollapse:false,
                constrainHeader:true,
//                layout: 'fit',
                items: [
                    {
                        xtype: 'treeCategoriasGeral',
                        margins: '0 0 0 0'
                    },
                    {
                        xtype: 'orgPanel',
                        layout: 'fit',
                        title: 'Listra Produtos Geral',
                        id: 'dataViewListaProdutosGeral',
                        border: false,
                        region: 'center',
                        trackOver: true,

                    },
                    {
                        xtype: 'gridListaProdutosPanfleto',
                        region: 'east',
            //            layout: 'fit'
                    }
                ]
            });
        return win;
    }
     }
    
});