Ext.define('AppName.view.panfletos.WindowCadPaginaPanfleto',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadPaginaPanfleto',
    
    autoShow: true,
    border: false,
    title: 'Cadastro Página Panfleto',
    layout: 'border',
    width: 450,
    height: 230,
    items:[
        {
            xtype: 'formCadPaginaPanfleto'
        }
    ],
    
    buttons:[
        {
            text: 'Salvar',
            action: 'savePagina'
        },
        
        {
            text: 'Cancelar'
        }
    ]
});