Ext.define('AppName.view.layout.SearchPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.searchPanel',
    
    bodyPadding: '10 5',
    layout: 'border', 
    region: 'center', 
    width: 500, 
    bodyStyle: 'background:#fff; border-color:#fff;', 
    items:[
        {
            xtype: 'textfield', 
            region: 'west', 
            width: 400, 
            margins: '2 2 2 2'
        },
        {
            xtype: 'button', 
            width: 80, 
            region:'west', 
            text:'pesquisar', 
            margins:'2 2 2 2'
        }
   ],
    
    
});

