
Ext.define('AppName.view.relatorios.PanelGridsProdutosPorCategoria',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelGridsProdutosPorCategoria',
    id: 'panelGridsProdutosPorCategoria',
    
    autoShow: true,
    region: 'center',
    layout: 'vbox',
    autoScroll: true,
    items:[
        {
            xtype: 'label',
            html: '<b style="font-size:20px;">Padaria e Sobremesas</b>',
            margins: '0 0 0 15'
            
        },
        {
            xtype: 'gridPadariaeSobremesas',
            margins: '0 0 0 10',
        },
        {
            xtype: 'label',
            html: '<b style="font-size:20px;">Mercearia</b>',
            margins: '0 0 0 15'
        },
        //grid
        {
            xtype:'gridMercearia',
            margins: '0 0 0 10'
        },
        {
            xtype: 'label',
            html: '<b style="font-size:20px;">Carnes</b>',
            margins: '0 0 0 15'
        },
        {
            xtype:'gridCarnes',
            margins: '0 0 0 10'
        },
        {
           xtype: 'label',
            html: '<b style="font-size:20px;">Frios, Leites e Derivados</b>',
            margins: '0 0 0 15'
        },
        //grid
        {
            xtype:'gridFriosLeitesDerivados',
            margins: '0 0 0 10'
        },
       {
           xtype: 'label',
            html: '<b style="font-size:20px;">Frutas, Ovos e Verduras</b>',
            margins: '0 0 0 15'
        },
        //grid
         {
            xtype:'gridFrutasOvosVerduras',
            margins: '0 0 0 10'
        },
        {
            xtype: 'label',
            html: '<b style="font-size:20px;">Comidas Prontas e Congeladas</b>',
            margins: '0 0 0 15'
        },
        //grid
        {
            xtype:'gridComidasProntaseCongeladas',
            margins: '0 0 0 10'
        },
        {
           xtype: 'label',
            html: '<b style="font-size:20px;">Bebidas</b>',
            margins: '0 0 0 15'
        },
        //grid
         {
            xtype:'gridBebidas',
            margins: '0 0 0 10'
        },
        {
             xtype: 'label',
            html: '<b style="font-size:20px;">Higiene Pessoal</b>',
            margins: '0 0 0 15'
        },
        //grid
         {
            xtype:'gridHigienePessoal',
            margins: '0 0 0 10'
        },
        {
            xtype: 'label',
            html: '<b style="font-size:20px;">Saúde e Beleza</b>',
            margins: '0 0 0 15'
        },
        //grid
        {
            xtype:'gridSaudeeBeleza',
            margins: '0 0 0 10'
        },
        {
           xtype: 'label',
            html: '<b style="font-size:20px;">Bazar e Limpeza</b>',
            margins: '0 0 0 15'
        },
        //grid
        {
            xtype:'gridBazareLimpeza',
            margins: '0 0 0 10'
        },
    ]
});