Ext.define('AppName.view.paineldecontrole.GridControleFinanceiro',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridControleFinanceiro',
    id: 'gridControleFinanceiro',
    
    autoShow: true,
    store: 'paineldecontrole.StoreGridControleFinanceiro',
    columns:[
        {
            dataIndex: 'img',
            flex: 1,
            renderer:function(val){
                return'<img src="resources/imagens/controlpanel/'+val+'" style="width: 72px; height: 72px">'
            }
            
        },
        
        {
            header:'Status',
            dataIndex: 'Recebido',
//            height: 20,
            flex: 2,
            renderer:function(val){
                return '<label style="font-size:20px; top: 2px;"> ' + val + '</label>'
            }
            
        },
        {
            header: 'Valor',
            dataIndex:  'valor',
            flex:1,
             renderer:function(val){
                return '<label style="font-size:20px; left: 0px; margin: 0px; top: 2px;"> ' + val + '</label>'
            }
        },
    ]
});