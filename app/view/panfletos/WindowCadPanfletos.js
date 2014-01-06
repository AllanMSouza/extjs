Ext.define('AppName.view.panfletos.WindowCadPanfletos',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadPanfletos',
    id: 'windowCadPanfletos',
    
    autoShow: true,
    title: 'Cadastro de Panfletos',
    width: 400,
    height: 250,
    border: false,
    modal: true,
    layout: 'border',
    closable: true,
    items:[
        {
            xtype: 'formCadPanfletos',
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
                Ext.getCmp('windowCadPanfletos').close()
            }
        }
    ]
});