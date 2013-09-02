Ext.define('AppName.view.produtos.WindowNovaListaCliente',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowNovaListaCliente',
    
    title: 'Nova Lista',
    autoShow: true,
    layout: 'fit',
    closable: true,
    border: false,
    modal: true,
    items:[
        {
            xtype: 'formNovaListaCliente'
        }
    ],
    buttons: [
        {
            text: 'Salvar',
            action: 'save'
        },
        
        {
            text: 'Cancelar',
            action: 'cancel'
        }
    ]
})