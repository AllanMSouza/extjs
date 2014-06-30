Ext.define('AppName.view.produtos.WindowProdutos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowProdutos',
    id: 'windowProdutos',
            
    title: 'Produtos',
    width: 630,
    height: 450,
    autoShow: true,
   // autoScroll: true,
    layout: 'border',
    minimizable: true,
    //minimizeWin(win)
    //renderTo: 'content-panel',
    
    tbar: [
        {
            text: 'Lista',
            handler:function(){
                Ext.getCmp('dataViewListaProdutosMercado').hide()
                Ext.getCmp('gridDataViewProdutos').show()
                Ext.getCmp('listaOn').setValue(1)
            }
        },
        {
            text: 'data view',
            handler:function(){
                Ext.getCmp('dataViewListaProdutosMercado').show()
                Ext.getCmp('gridDataViewProdutos').hide()
                Ext.getCmp('listaOn').setValue(0)
            }
        }
    ],
    
    items:[
        {
            xtype: 'panel',
            border: false,
            split: true,
            autoScroll: true,
            layout: 'fit',
            region: 'center',
            items:[
                {
                    xtype:'textfield',
                    hidden: true,
                    id: 'janelaAberta',
                    value: 1
                },
                {
                    xtype: 'dataViewListaProdutosMercado',
                    border: false,
//                    hidden: true
                },
                {
                    xtype: 'gridDataViewProdutos',
                    border: false,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    id: 'listaOn',
//                    value: 0,
                    hidden: true
                }
//                {
//                    xtype: 'dataViewListaProdutosMercadoMenor',
//                    border: false,
////                    hidden: true
//                },
            ]
        },
    ]
    
});