Ext.define('AppName.view.paineldecontrole.GridControleEstoque',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridControleEstoque',
    id: 'gridControleEstoque',
    
    autoShow: true,
    store: 'paineldecontrole.StoreGridControleEstoque',
    columns:[
        {
            dataIndex: 'img',
            header: 'Imagem',
            flex: 1,
            renderer:function(val){
                return'<img src="resources/imagens/controlpanel/'+val+'" style="width: 72px; height: 72px">'
            }
            
        },
        
        {
            header:'Categoria',
            dataIndex: 'categoria',
//            height: 20,
            flex: 2,
            renderer:function(val){
                return '<label style="font-size:32px; top: 2px;"> ' + val + '</label>'
            }
            
        },
        {
            dataIndex:  'quantidade',
            header:  'quantidade',
            flex:1,
             renderer:function(val){
                return '<label style="font-size:32px; left: 0px; margin: 0px; top: 2px;"> ' + val + '</label>'
            }
        },
    ]
});