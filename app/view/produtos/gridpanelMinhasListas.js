Ext.define('AppName.view.produtos.gridpanelMinhasListas',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.minhaslistas',
    
    title: 'Minhas Listas',
    region: 'center',
    autoShow: true,
    autoScroll: true,
    split: true,
    height: 400,
    ui: 'light',
    layout: 'border',
        
    items:[
        {
            xtype: 'gridpanel',
            store: 'storeMinhasListas',
            region: 'center',
            plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
                '<img align=top src="extjs/examples/kitchensink/resources/images/touch-icons/{thumb}" />',
                '<span style="padding-left:15px"><label align=top><b>Descrição:</b> {name}</label></span><br>',
                '<span><b>Produto: </b>{name}</span>',
            {
                
            })
             }],
            columns: [                     
                     { 
                         text: 'Produto',  
                         dataIndex: 'name',
                         flex: 1 
                     },
                     {
                         text: 'Quantidade', 
                         dataIndex: 'url', 
                         flex: 1 
                     },
                     { 
                         text: 'Valor', 
                         dataIndex: 'thumb',
                         flex: 1 
                     }
          ],
          viewConfig: {
                 plugins: [{
                    ddGroup: 'organizerDD',
                    ptype  : 'gridviewdragdrop'
                   
                }]
    }
            
        }
    ]
})
