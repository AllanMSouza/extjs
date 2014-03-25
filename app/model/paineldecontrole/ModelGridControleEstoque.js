Ext.define('AppName.model.paineldecontrole.ModelGridControleEstoque',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        {name: 'id', type: 'int'},
        {name: 'categoria', type: 'string'},
        {name: 'img', type: 'string'},
        {name: 'quantidade', type: 'int'}
    ]
});