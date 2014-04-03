Ext.define('AppName.model.paineldecontrole.ModelGridControleFinanceiro',{
    extend: 'Ext.data.Model',
    idProperty: 'recebido',
    fields:[
//        {name: 'id', type: 'int'},
        {name: 'Recebido', type: 'string'},
        {name: 'img', type: 'string'},
        {name: 'valor', type: 'string'}
    ]
});