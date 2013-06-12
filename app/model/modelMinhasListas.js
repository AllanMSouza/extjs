Ext.define('AppName.model.modelMinhasListas',{
    extend: 'Ext.data.Model',
     idProperty: 'nomeProduto',
    fields:[
        {name: 'name', type: 'string'},
        {name: 'thumb', type: 'string'},
        {name: 'url', type:'string'}
        
    ]
})
