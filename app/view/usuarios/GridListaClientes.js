Ext.define('AppName.view.usuarios.GridListaClientes',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaClientes',
    
    autShow: true,
    id: 'gridListaClientes',
    //region: 'center',
    //layout: 'fit',
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    store: 'usuarios.StoreCrudCliente',
    
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
    
    columns: [
        {header: 'CPF', dataIndex: 'cpf',flex:1},
        {header: 'Nome', dataIndex: 'nome', flex: 1},
        {header: 'E-mail', dataIndex: 'email', flex: 2},
        {header: 'Cidade', dataIndex: 'cidade', flex: 1},
        {header: 'Estado', dataIndex: 'estado', flex: 0.5},
        {header: 'Telefone', dataIndex: 'telefone', flex: 1},
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