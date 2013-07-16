Ext.define('AppName.model.ModelTreePanelCategorias',{
     extend: 'Ext.data.Model',
     
     idProperty: 'id_categorias',
     fields:[
         {name: 'id_categorias', type: 'int' },
         {name: 'nome_categoria', type: 'string'},
         {name: 'text', type: 'string'},
         {name: 'leaf', type: 'bool'},
         {name: 'children', type: 'string'}
     ]   
});

