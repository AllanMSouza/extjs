var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
    
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
            plugins: [             
                    cellEditing,
                
            {
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
            '<div>',
            '<div class="imagem-grid" style = "width:100px; height:100px; float:left; position:relative;" >',
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',
                '</div>',
             '<div class="texto-grid" style= "width:220px; float:left; position:relative;">',
                              
               '<span><label align=top><b>Descrição:</b></label> {descricao}</span><br>',
                '<span><label align=top><b>Código:</b></label> {codigo_produto}</span><br>',
                '<span><b>Produto: </b>{nome_produto}</span>',
                '</div>',
            "</div>",
            {
                
            })
             }
         ],
            columns: [                     
                     { 
                         header: 'Código',  
                         dataIndex: 'codigo_produto',
                         flex: 1 
                     },
                     { 
                         header: 'Produto', 
                         dataIndex: 'nome_produto',
                         flex: 1 
                     },
                     {
                                                
                         header: 'Quantidade', 
                         dataIndex: 'quantidade',
                         value: 1,
                         flex: 1, 
                           summaryType: 'sum',
                            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                                value = 1;
                                return value;
                            },
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                value = 1;
                                return value;
                            },
                             field: {
                                xtype: 'numberfield'
                        }
                     },
                     
          ],
          viewConfig: {
                 plugins: [{
                    ddGroup: 'organizerDD',
                    ptype  : 'gridviewdragdrop'
                   
                }]
          }
            
        }
    ],
    tbar:[
        {
            text:'Nova Lista'
        },
        {
            text: 'Remover Lista'
        }
    ]
})
