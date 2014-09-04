Ext.define('AppName.view.produtos.WindowGerenciarProdutos',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowGerenciarProdutos',
    id: 'windowGerenciarProdutos',
    
     init : function(){
        this.launcher = {
            text: 'Cadastrar produto novo/original',
            iconCls:'icon-grid'
        };
    },
    
     createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowGerenciarProdutos');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarProdutos',
//                title:'Gerenciar Meus Produtos',
                layout: 'border',
                width: 820,
                height: 400,
//                layout: 'border',
                title: 'Gerenciar Produtos',
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
//                layout: 'border',
              items:[
                    {
                        xtype: 'treeCategoriasProdutosListaProdutos',
                        region: 'west'
                    },
                    {
                        xtype:'gridListaProdutos',
                        region: 'center'
                    }
                ]
            });
        return win;
    }
     }
//    autoShow: true,
//    width: 820,
//    height: 400,
//    layout: 'border',
//    title: 'Gerenciar Produtos',
    
});