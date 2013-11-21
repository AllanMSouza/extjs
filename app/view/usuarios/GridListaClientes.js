Ext.define('AppName.view.usuarios.GridListaClientes',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaClientes',
    
    autShow: true,
    id: 'gridListaClientes',
    //region: 'center',
    //layout: 'fit',
    //selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    store: 'usuarios.StoreCrudCliente',
    
    tbar: [{
            text: 'Cadastrar Cliente',
            action: 'insert',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/user_add.gif'
             },
             
             {
            text: 'Editar Cliente',
            action: 'edit',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/user_edit.png',
            disabled: true,
            itemId: 'edit'
            
           },        
            {
            text: 'Excluir Cliente',
            action: 'destroy',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/user_delete.gif',
            disabled: true,
            itemId: 'delete'
            
           },
           {
              xtype:'textfield',
              emptyText: 'Informe sua pesquisa',
              labelWidth: 40,
              width: 315
           },
           {
               text: 'Pesquisar'
           }
           ],
    
    columns: [
        {header: 'CPF', dataIndex: 'cpf',flex:1},
        {header: 'Nome', dataIndex: 'nome', flex: 2},
        {header: 'E-mail', dataIndex: 'email', flex: 1.5},
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
        Ext.getCmp('gridListaClientes').store.load();
        Ext.getCmp('gridListaClientes').callParent(arguments);
    },
    onSelectChange: function(selModel, selections){
        Ext.getCmp('gridListaClientes').down('#delete').setDisabled(selections.length === 0);
        Ext.getCmp('gridListaClientes').down('#edit').setDisabled(selections.length !== 1);
    }
});