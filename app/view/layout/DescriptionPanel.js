Ext.define('AppName.view.layout.DescriptionPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.descriptionPanel',
    
    id:'panel-descricao',
    title:'Informações & Minhas Listas', 
    layout: 'border', 
    region: 'east', 
    collapsed: true, 
    split:true, 
    collapsible:true, 
    width:400,
    items:[
        {
            xtype: 'panel', 
            title: 'Descrição',
            region: 'north', 
            height: 200, 
            split:true, 
            ui:'light', 
            collapsible:true                    
                   
        },
         {
             xtype: 'minhaslistas'
         }
                   
   ]
    
});

