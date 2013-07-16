Ext.define('AppName.view.layout.HeaderPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerPanel',
    
    region: 'north', 
    height:60, 
    frameHeader:false, 
    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background:#fff; border-color:#c0c0c0;',
    
    items:[
        {
            xtype: 'button', 
            action: 'getCategorias',
            id: 'favoritos',
            iconCls:'favoritos', 
            shadow: true, 
            region:'west', 
            width: 50, 
            height: 60, 
            margins: '2 2 2 2', 
            scale:'large', 
            iconAlign: 'top', 
            text:' ', 
            tooltip: 'Favoritos',
            tooltipType: 'title',
//            handler:function(){
//                     
//                 }
       },
        {
             xtype: 'button', 
             id:'Mercearia',
             iconCls: 'mercearia',
            action: 'getCategorias',
             region: 'west', 
             width: 50, 
             height: 40, 
             margins: '2 2 2 2', 
             scale:'large', 
             iconAlign: 'top',
//             handler:function(){
//                 Ext.widget('winProdutos')
//
//              }
            tooltip: 'Mercearia',
            tooltipType: 'title',

        },
                {
                    xtype: 'button', 
                    id: 'Carnes',
                    action: 'getCategorias',
                    iconCls: 'carnes', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text: ' ',
                    tooltip: 'Carnes',
                    tooltipType: 'title',
                },
                {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Frios Leites e Derivados',
                    iconCls: 'frios', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2',
                    scale:'large', 
                    iconAlign: 'top',
                    tooltip: 'Frios',
                    tooltipType: 'title',
               },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    id: 'Frutas Ovos e Verduras',
                    iconCls: 'frutas', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top',
                    tooltip: 'Frutas',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Comidas Prontas e Congeladas',
                    iconCls: 'Congelados', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Congelados',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Bebidas',
                    iconCls: 'bebidas', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Bebidas',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    id: 'Higiene Pessoal',
                    iconCls: 'higiene-pessoal',  
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Higiene Pessoal',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id:  'Saude e Beleza', 
                    iconCls:  'saude-beleza', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Saúde e Beleza',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    iconCls: 'bazar-limpeza',
                    id: 'Bazar e Limpeza',
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Bazar e Limpeza',
                    tooltipType: 'title',
                },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'F1', 
                    width: 50, 
                    margins: '2 2 2 2',
                    action : 'showWindowCadMercado'
               },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'F2', 
                    width: 50, 
                    margins: '2 2 2 2',
                    action: 'showWindowCadCliente'
                },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'F3', 
                    width: 50, 
                    margins: '2 2 2 2'
                },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'F4', 
                    width: 50, 
                    margins: '2 2 2 2'
                },
                {
                    xtype:'searchPanel'
                }
    ]
});