Ext.define('AppName.view.panfletos.WindowValorProdutoPanfleto',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowValorProdutoPanfleto',
    id: 'windowValorProdutoPanfleto',
    
    autoShow: true,
    modal: true,
    title: 'Informar valor',
    closable: true,
    width: 250,
    height: 130,
    border: false,
    layout: 'border',
    items:[
        {
            xtype: 'formValorProdutoPanfleto',
            region: 'center'
        }
    ],
    
    buttons:[
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            handler: function(){
                Ext.getCmp('windowValorProdutoPanfleto').close()
            }
        }
    ]
});