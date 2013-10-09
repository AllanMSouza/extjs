Ext.define('AppName.store.relatorios.graficos.StoreGraficoBarrasProdutosMercado',{
    extend:'Ext.data.JsonStore',
    autoLoad: true,
    autoSync: true,
    proxy:{
         type: 'ajax',
         url: 'app/data/php/Categorias.php?action=getNumeroProdutosCategoria',
         
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
     
 });