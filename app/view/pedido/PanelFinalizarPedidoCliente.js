Ext.define('AppName.view.pedido.PanelFinalizarPedidoCliente',{
    extend: 'Ext.window.Window',
    alias: 'widget.panelFinalizarPedidoCliente',
    id: 'panelFinalizarPedidoCliente',
    
    autoShow: true,
    layout: 'vbox',
    width: 720,
    height: 600,
    border: false,
    modal: true,
    
    items:[
        {
//            bodyPadding: '5 5',
            xtype: 'treeListaClienteFinalizarPedido',
            margins: '5 5 5 5'
        },
        {
            margins: '0 0 0 0',
            xtype: 'formFinalizarPedido'
        },
        {
            xtype: 'fieldcontainer',
            layout: 'column',
            width: 750,
            items:[
                {
                    xtype: 'panel',
                    width: 470,
                    height: 20,
                    y: 21,
                    bodyStyle: 'background:#157fcc; border-color:#157fcc;',
                    
                },
                {
                    xtype:'panel',
                    id: 'valorPanelFinalizarPedido',
//                    margins: '0 0 0 5',
                    width: 280,
                    border: false,
                    html: '<div style="padding-top:8px;"><b><label style=" font-size:20;color:#333"> R$: </b></label><label style=" font-size:32;color:#55F"><b>'+ ' </b></label></div>'
                },
                
            ]
        },
        

        
    ],
    
    buttons:[
        {
            text: 'Confirmar',
            action: 'confirmar'
        },
        {
            text: 'Cancelar',
            handler: function(){
                Ext.getCmp('panelFinalizarPedidoCliente').close()
            }
        }
    ]
});