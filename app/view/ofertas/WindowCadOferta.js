Ext.define('AppName.view.ofertas.WindowCadOferta',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadOferta',
    id: 'windowCadOferta',
    
    title: 'Cadastro de Oferta',
    modal: true,
    autoShow: true,
    width: 250,
    height: 150,
    layout: 'border',
    border: false,
    items: [
        {
            xtype: 'formCadOferta',
            region: 'center',
            border: false
        }
    ],
    
    buttons: [
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar'
        }
    ]
});