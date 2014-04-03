Ext.define('AppName.view.paineldecontrole.GridControlePedidos',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridControlePedidos',
    id: 'gridControlePedidos',
    
    autoShow: true,
    store: 'paineldecontrole.StoreGridControlePedidos',
    columns:[
        {
            dataIndex: 'img',
            flex: 1,
            renderer:function(val){
                return'<img src="resources/imagens/controlpanel/'+val+'" style="width: 72px; height: 72px">'
            }
            
        },
        
        {
            header:'Status Pedido',
            dataIndex: 'status',
//            height: 20,
            flex: 2,
            renderer:function(val){
                return '<label style="font-size:20px; top: 2px;"> ' + val + '</label>'
            }
            
        },
        {
            header: 'Quantidade',
            dataIndex:  'qnt',
            flex:1,
             renderer:function(val){
                return '<label style="font-size:20px; left: 0px; margin: 0px; top: 2px;"> ' + val + '</label>'
            }
        },
    ]
});