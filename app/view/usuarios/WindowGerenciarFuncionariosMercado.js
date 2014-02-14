Ext.define('AppName.view.usuarios.WindowGerenciarFuncionariosMercado',{
    extend: 'AppName.view.utils.Module',
    
    alias: 'widget.windowGerenciarFuncionariosMercado',
    id: 'windowGerenciarFuncionariosMercado',
    
     init : function(){
        this.launcher = {
            text: 'Gerenciar Funcionários',
            iconCls: 'icon-grid'
        };
    },
    createWindow : function(){
        var desktop = Ext.getCmp('desktop').app.getDesktop();
        var win = desktop.getWindow('windowMonitorEstoque');
        if(!win){
            win = desktop.createWindow({
                id: 'windowGerenciarFuncionariosMercado',
                title:'Gerenciar Funcionarios',
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                width: 800,
                height: 500,
                items:[
                    {
                        xtype: 'gridListaClientes',
                        columns:[
                            {header: 'CPF', dataIndex: 'cpf',flex:1},
                            {header: 'Nome', dataIndex: 'nome', flex: 2},
                            {header: 'E-mail', dataIndex: 'email', flex: 1.5},
                            {header: 'Funcionario', dataIndex: 'func', flex:1}
                        ],
                        tbar: [{
                            text: 'Cadastrar Funcionario',
                            action: 'insertFuncionario',
                            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/user_add.gif'
                             },

                             {
                            text: 'Editar Funcionario',
                            action: 'edit',
                            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/user_edit.png',
                            disabled: true,
                            itemId: 'edit'

                           },        
                            {
                            text: 'Excluir Funcionario',
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
                    }
                ]
            });
        return win;
        }
     }
    
    
    
});