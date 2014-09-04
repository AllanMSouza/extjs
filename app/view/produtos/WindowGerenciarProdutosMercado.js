Ext.define('AppName.view.produtos.WindowGerenciarProdutosMercado',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowGerenciarProdutosMercado',
    id: 'windowGerenciarProdutosMercado',
    
    
    init : function(){
        this.launcher = {
            text: 'Adicionar do repositório',
            iconCls:'icon-grid'
        };
    },
    
      createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarProdutosMercado');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarProdutosMercado',
                title:'Adicionar produto do repositório de produtos',
                layout: 'border',
                width: 1350,
                height: 500,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                
               items:[
                    {
                         xtype: 'treeCategoriasGeral',
                         margins: '0 0 0 0',
                         width: 300,
                         collapsible: true
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
                        xtype: 'gridListaProdutosMercado',
                        id: 'gridListaProdutosMercado',
                        region: 'east',
            //            margins: '5 5 5 0'

                    },
                ]
            });
        return win;
    }
     }
    
});