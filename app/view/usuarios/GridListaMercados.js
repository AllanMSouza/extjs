Ext.define('AppName.view.usuarios.GridListaMercados',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaMercados',
    
    autShow: true,
    id: 'gridListaMercados',
    //region: 'center',
    //layout: 'fit',
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    store: 'usuarios.StoreCrudMercado',
    
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
        {header: 'CNPJ', dataIndex: 'cnpj',flex:1.5},
        {header: 'Nome', dataIndex: 'nome', flex: 2},
        {header: 'E-mail', dataIndex: 'email', flex: 1.8},
        {header: 'Cidade', dataIndex: 'cidade', flex: 1},
        {header: 'UF', dataIndex: 'estado', flex: 0.5},
        {header: 'Telefone', dataIndex: 'telefone', flex: 1.5},
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