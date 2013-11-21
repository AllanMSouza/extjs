Ext.define('AppName.view.relatorios.graficos.GraficoPizzaProdutosMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficoPizzaProdutosMercado',
    
    autoShow: true,
    layout: 'fit',
    region: 'center',
    
    items:[
        {
            xtype: 'chart',
            animate: true,
            shadow: true,
//            store: 'relatorios.graficos.StoreGraficoBarrasProdutosMercado',
            store: Ext.create('Ext.data.JsonStore',{
            autoLoad: true,
            autoSync: true,
            proxy:{
                 type: 'ajax',
                 api:{
                     read:'app/data/php/Categorias.php?action=getNumeroProdutosCategoria'
                 },


                 reader:{            
                     type: 'json',
                     root: 'data'
                 }
             },

             fields:[
                 'nome_categoria',
                 'quantidade',
                 'total'
             ]
     
            }),
            legend: {
                position: 'right'
            },
//            axes: [
//                {
//                    type: 'Numeric',
//                    position: 'bottom',
//                    fields: [
//                        'quantidade'
//                    ],
//                    title: 'Quantidade de Produtos',
//                    grid: true
//                },{
//                    type: 'Category',
//                    position: 'left',
//                    title: 'Categorias',
//                    fields: [
//                        'nome_categoria'
//                    ],
////                    title: 'Midias'
//                 }],
//             shadow: true,
            insetPadding: 20,
            theme: 'Base:gradients',
             series: [
                 {
                     type: 'pie',
                     angleField: 'quantidade',//Math.floor(Math.max((Math.random() * 100), 'total')),//'total',
                     lengthField: 'total',//Math.floor(Math.max((Math.random() * 100), 'total')),//'total',
                     highlight: {
                         segment: {
                             margin: 20
                         }
                     },
                     label: {
                         field: 'nome_categoria',   //bind label text to name
                         display: 'rotate', //rotate labels (also middle, out).
                         font: '18px Arial',
                         contrast: true
                    },
                    style: {
                        'stroke-width': 1,
                        'stroke': '#fff'
                    },

                   showInLegend: true,

                    tips: {
                        trackMouse: true,
                        width: 190,
                        height: 48,
                        renderer: function(storeItem, item) {
//                            console.log(storeItem.get('nome_categoria'), storeItem.get('quantidade'), storeItem.get('total'))
                            this.setTitle(storeItem.get('nome_categoria') + ': ' + Math.round(storeItem.get('quantidade') / storeItem.get('total')  * 100) + '%');
                        }
                  }
                }]
        }
    ]
});