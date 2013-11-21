Ext.define('AppName.view.relatorios.graficos.GraficoBarrasProdutosMercado',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficoBarrasProdutosMercado',
    
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
//            legend: {
//                position: 'right'
//            },
            axes: [
                {
                    type: 'Numeric',
                    position: 'bottom',
                    fields: [
                        'quantidade'
                    ],
                    title: 'Quantidade de Produtos',
                    grid: true
                },{
                    type: 'Category',
                    position: 'left',
                    title: 'Categorias',
                    fields: [
                        'nome_categoria'
                    ],
//                    title: 'Midias'
                 }],
             series: [
                 {
                     type: 'bar',
                     axis: 'bottom',
                     gutter: 80,
                     xField: 'nome_categoria',
                     yField: [
                         'quantidade'
                     ],
                     stacked: true,
                     tips: {
                         trackMouse: true,
                         width: 150,
                         height: 30,
                         renderer: function(storeItem, item) {
                             this.setTitle(String(item.value[1]) + ' Produtos');
                        }
                     }
                  }
             ]
        }
    ]
});