Ext.define('AppName.view.kits.WindowQuantidadeItems',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowQuantidadeItems',
    id: 'windowQuantidadeItems',
    
    autoShow: true,
    height: 120,
    modal: true,
    width: 320,
    border: false,
    layout: 'border',
    items: [
        {
            xtype: 'formQuantidadeItems'
        }
    ]
});