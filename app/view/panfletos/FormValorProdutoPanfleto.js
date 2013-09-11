Ext.define('AppName.view.panfletos.FormValorProdutoPanfleto',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formValorProdutoPanfleto',
    
    autoShow: true,
    bodyPadding: '10 5',
    border: false,
    items:[
        {
            xtype: 'textfield',
            name:'valor',
            fieldLabel:'Valor'
        },
        {
            xtype: 'textfield',
            name: 'produtos_id_produtos',
            hidden: true,
            id:'fieldProdutosIdProdutos'
        },
        {
            xtype: 'textfield',
            name: 'pagina_panfleto_id_pagina_panfleto',
            hidden: true,
            id: 'fieldPaginaPanfletoIdPaginaPanfleto'
        }
    ]
});