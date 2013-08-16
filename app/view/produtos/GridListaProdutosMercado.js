Ext.define('AppName.view.produtos.GridListaProdutosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaProdutosMercado',
    
    autoShow: true,
    id: 'gridListaProdutosMercado',
    columnLines: true,
    enableLocking: true,
    store: 'produtos.StoreCrudProdutosMercado',
    height: 500, 
    region: 'center',
    border: false,
    title: 'Lista Produtos Mercado',
       
    tbar: [{
            text: 'Cadastrar Produto',
            action: 'insert',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
             },
             
             {
            text: 'Editar Produto',
            action: 'edit',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
            disabled: true,
            itemId: 'edit'
            
           },        
            {
            text: 'Excluir Produto',
            action: 'destroy',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/delete.gif',
            disabled: true,
            itemId: 'delete'
            
           }
           ],

    plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 100px; height: 90px; padding: 5px;/>',               
                '<span style="padding-left:15px"><label align=top><b>Descrição:</b> {descricao}</label></span><br>',
                '<span><b>Produto: </b>{nome_produto}</span>',
            
            {
              
            })
     }],
    
    columns: [
        {header: 'Código', dataIndex: 'codigo_produto',flex:1},
        {header: 'Nome', dataIndex: 'nome_produto', flex: 2},
        {header: 'Quantidade', dataIndex: 'quantidade', flex: 1},
        {header: 'Fabricação', xtype: 'datecolumn', format: 'd/m/Y',dataIndex: 'fabricacao',flex: 1},
        {header: 'Validade', xtype: 'datecolumn', format: 'd/m/Y', dataIndex: 'validade', flex: 1},
        {text: 'Valor', xtype: 'templatecolumn',tpl: 'R$ {valor}',flex: 1},
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                icon: 'extjs/examples/kitchensink/resources/images/icons/fam/cross.gif',
                tooltip: 'Delete Plant',
                scope: this,
                handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosMercado'),
               records = grid.getSelectionModel().getSelection();
               
               if(records.length === 0){
                   Ext.Msg.alert('Atenção, nenhum registro selecionado');
                   return false;
                }else{
                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja deletar o (s) registro(s) selecionado(s)?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                var store = grid.store;
                                        store.remove(records);
                                    grid.store.sync();
                            }
                        }
                        
                    })
                    
                }
                }
         }]
        }
      
    ],
     viewConfig: {
         plugins: {
            ddGroup: 'gridListaProdutosMercado',
            ptype  : 'gridviewdragdrop',
        },                                  
        listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                Ext.widget('windowCadProdutosMercado')
//                                               console.log(data.records[0].data.categorias_id_categorias, data.records[0].data.codigo_produto )
                Ext.getCmp('fieldIdProdutosCadProdutosMercado').setValue(data.records[0].data.id_produtos);
//                                               Ext.getCmp('fieldIdCategoriasIdCategoriasWindowCadProdutoMercado').setValue(data.records[0].data.categorias_id_categorias)
//                                               Ext.getCmp('fieldCodigoProdutoWindowCadProdutoMercado').setValue(data.records[0].data.codigo_produto)
            }
       }    
   },
    initComponent: function(){
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    },
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
});