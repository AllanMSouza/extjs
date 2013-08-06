Ext.define('AppName.view.produtos.GridListaProdutos',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaProdutos',
    
    autShow: true,
    id: 'gridListaProdutos',
    //region: 'center',
    //layout: 'fit',
    //selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    store: 'produtos.StoreCrudProdutos',
    
    tbar: [{
            text: 'Incluir',
            action: 'insert'
            //iconCls: 'user_add'
             },
             
             {
            text: 'Editar',
            action: 'edit',
            //iconCls: 'user_edit',
            disabled: true,
            itemId: 'edit'
            
           },        
            {
            text: 'Excluir',
            action: 'destroy',
            //iconCls: 'user_delete',
            disabled: true,
            itemId: 'delete'
            
           }
           ],

    plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
//                '<img align=top src="extjs/examples/kitchensink/resources/images/touch-icons/{thumb}" />',
                '<span style="padding-left:15px"><label align=top><b>Descrição:</b> {descricao}</label></span><br>',
                '<span><b>Produto: </b>{nome_produto}</span>',
            {
//                
            })
     }],
    
    columns: [
        {header: 'Código', dataIndex: 'codigo_produto',flex:1},
        {header: 'Nome', dataIndex: 'nome_produto', flex: 2},
        //{header: 'Categoria', dataIndex: 'email', flex: 1.5},
//        {header: 'Cidade', dataIndex: 'cidade', flex: 1},
//        {header: 'UF', dataIndex: 'estado', flex: 0.5},
//        {header: 'Telefone', dataIndex: 'telefone', flex: 1.5},
        //{header: 'Celular', dataIndex: 'celular', flex: 1}
        
    ],
    
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