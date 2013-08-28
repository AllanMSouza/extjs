Ext.define('AppName.view.layout.DescriptionPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.descriptionPanel',
    
    id:'panel-descricao',
    title:'Minhas Listas', 
    layout: 'border', 
    region: 'east', 
    collapsed: true, 
    split:true, 
    collapsible:true, 
    width:400,
    items:[
       
         {
             xtype: 'minhaslistas'
         }
                   
   ]
    
});

