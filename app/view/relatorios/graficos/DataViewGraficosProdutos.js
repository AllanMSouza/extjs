
Ext.define('AppName.view.relatorios.graficos.DataViewGraficosProdutos', {
    extend: 'Ext.view.View',
    alias : 'widget.dataviewGraficosProdutos',
//    id : 'dataviewGraficosProdutos',
//    layout: 'fit',
    //requires: ['Ext.data.Store'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
//        draggable   : 'Ext.ux.DataView.Draggable'
    },
    
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" >',
                '<div class="thumb" style= "">',
                    (!Ext.isIE6? '<img align=top src="resources/imagens/charts/{grafico}" style="width: 116px; height: 106px; padding: 5px;"/>':               
                    //'<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>
                ''),
                '<span><label style =" width=100px height=10px">{nome}</label></span>',
                '</div>',
                
            '</div>',
        '</tpl>'
    ],
    
    itemSelector: 'div.thumb-wrap',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
    //autoScroll: true,
    
    initComponent: function() {
        this.store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['nome', 'grafico'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/imagens/charts/charts.json',
                    reader: {
                        type: 'json',
                        root: ''
                    }
                }
            })
        
        this.mixins.dragSelector.init(this);

        
        this.callParent();
    },
    
    listeners: {

selectionchange: function(model, records) {
           
           if(records[0].data.nome == 'Grafico de barras'){
               Ext.widget('windowGraficoBarrasProdutosMercado')
           }
           if(records[0].data.nome == 'Grafico de pizza'){
               Ext.widget('windowGraficoPizzaProdutosMercado')
           }
                       
        }
    }
});
