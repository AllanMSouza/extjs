Ext.define('AppName.view.estoque.PanelChangeStatus',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelChangeStatus',
    
    autoShow: true,
    width: 200,
    layout: 'vbox',
    border: false,
    split: true,
    defaults:{
        width: 185,
        height: 60,
        margins: '5 5 5 5'
    },
    items:[
        {
            xtype: 'button',
            text: 'Recebido',
            id: 'Recebido',
            action: 'changeStatus'
        },
        {
            xtype: 'button',
//            scale:'large', 
//            icon: 'resources/imagens/estoque.png',
//            iconAlign: 'top',
            text: 'Separando em estoque',
            id: 'Separando em estoque',
            action: 'changeStatus'
        },
        {
            xtype: 'button',
            text: 'Aguardando retirada',
            id: 'Aguardando retirada',
            action: 'changeStatus'
        },
        {
            xtype: 'button',
            text: 'Em transporte',
            id: 'Em transporte',
            action: 'changeStatus'
        },
        {
            xtype: 'button',
            text: 'Finalizado',
            id: 'Finalizado',
            action: 'changeStatus'
        },
        {
            xtype: 'button',
            text: 'Cancelado',
            id: 'Cancelado',
            action: 'changeStatus'
        },
//        {
//            xtype: 'button',
//            text: '. . . . .',
//            id: '. . . . .',
//            action: 'changeStatus'
//        },
    ]
});