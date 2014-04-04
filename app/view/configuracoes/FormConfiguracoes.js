Ext.define('AppName.view.configuracoes.FormConfiguracoes',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formConfiguracoes',
    id: 'formConfiguracoes ',
    
    region: 'center',
    boddyPadding: '10 10',
    border:false,
    items:[
        {
            xtype: 'tabpanel',
            border: false,
            ui: 'ligth',
            plain: true,
            defaults :{
                bodyPadding: 10,
                anchor: '100%'
            },
            items:[
                {
                    title: 'Cancelamento',
                    border: false,
                    plain: true,
                    bodyPadding: '30 50',
                    loader: {
                        loadMask: true
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Permitir cancelamento até status',
                            id: 'confCancelamento',
                            labelWidth: 200,
                            width: 400,
                            store:  Ext.create('Ext.data.Store', {
                            fields: ['abbr', 'name'],
                            data : [
                                {"abbr":"0", "name":"Aberto"},
                                {"abbr":"1", "name":"Recebido"},
                                {"abbr":"2", "name":"Separando em estoque"},
                                {"abbr":"3", "name":"Aguardando retirada"},
                                {"abbr":"4", "name":"Em transporte"},
                                {"abbr":"5", "name":"Finalizado"},
                            ]
                            }),
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'abbr',
                        }
                    ]
                },
                {
                    title: 'Outras Configurações (Futuras)'
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Salvar',
            action: 'save'
        },
        {
            text: 'Cancelar',
            handler: function(){
                Ext.getCmp('windowconfiguracoes').close()
            }
        }
    ]
});