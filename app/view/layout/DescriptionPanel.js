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
    width:450,
    items:[
       
         {
             xtype: 'gridListaProdutosCliente',
             region: 'center'
         },
         {
             xtype: 'panel',
             region: 'south',
             height: 50,
             layout: 'border',
             items: [
                 {
                     xtype:'panel',
                     width: 80,
                     region: 'west',
                     bodyStyle: 'background:#E0E0E0; border-color:#666;',
                     border: false,
                     html: '<img style= "width: 60px; height: 50px; padding: 5px" align=top  src="resources/imagens/carrinho.png">'
                 },
                 {
                     xtype:'panel',
                     id: 'panelpedido',
                     width: 200,
                     region: 'west',
                     bodyStyle: 'background:#E0E0E0; border-color:#666;',
                     border: false,
                     html: '<div style="padding-top:8px;"><b><label style=" font-size:20;color:#333"> R$: </b></label><label style=" font-size:32;color:#55F"><b>'+ Ext.getCmp('valorListaCliente') +' </b></label></div>'
                 },
                 {
                     xtype: 'panel',
                     region: 'center',
                     border:false,
                     bodyStyle: 'background:#E0E0E0; border-color:#666;',
//                     bbar:[
//                         {
//                             text: 'TESTE',
//                             height: 35
//                         }
//                     ]
                     items:[
                         {
                             xtype: 'button',
                             text: 'Finalizar Pedido',
                             action: 'showPanelFinalizarPedido',
                             height: 35,
                             x:50,
                             y:7,
                             cls: 'btn-default-toolbar-small-icon-text-left'
                         },
                         {
                             xtype: 'textfield',
                             id:'valorListaCliente',
                             hidden:true
                         }
                     ]
                         
                 }
             ]
         }
                   
   ]
    
});

