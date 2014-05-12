Ext.define('AppName.view.layout.NewHeaderPanelCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.newHeaderPanelCliente',
    
    region: 'north', 
    height:90, 
    frameHeader:false, 
//    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));' +
                'background-image: -webkit-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -moz-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -o-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: linear-gradient(top,#8fc33a,#739b2e);' +
                'border-bottom: 1px solid #567422;' +
                'border-top: 1px solid #8fc33a;' +
                'border-left: 1px solid #8fc33a;' +
                'border-right: 1px solid #8fc33a;' ,
    
    
    items:[
        {
            xtype:'dataViewNewHeaderPanelCliente',
            region: 'west'
        },
//        {
//            xtype: 'dataViewControlPanel',
//            region: 'east',
//            width: 280
//                
//        }
        {
            xtype: 'combobox',
            id:'idDomboboxOpcoes',
//            fieldLabel: 'Selecionar:',
//            id: 'comboboxFiltrosPedido',
            store:  Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data : [
                {"abbr":"Entrar", "name":"Entrar"},
                {"abbr":"Meus Pedidos", "name":"Meus Pedidos"},
                {"abbr":"Meu Cadastro", "name":"Meu Cadastro"},
                {"abbr":"sair", "name":"Sair"},
                
            ]
            }),
            labelWidth: 60,
            region: 'east',
            width: 250,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
            margins: '0 5 0 0',
            listeners:{
                select:function(a,b,c){
//                    console.log(b[0].data.name)
                if(b[0].data.name == "Meus Pedidos"){
                Ext.Ajax.request({
                    url: 'app/data/php/Configuracoes.php?action=getCancelamento',
                    
                    success: function(resp,b){
                        var data = Ext.decode(resp.responseText)
//                        console.log(data.cancelamento)
                        Ext.getCmp('podeCancelar').setValue(data.cancelamento)
                    }
                });
                Ext.widget('windowAcompanharPedidos')
            }
            else {
                if(b[0].data.name == "Meu Cadastro"){
                    
                    var grid = Ext.widget('gridListaClientes')
                    grid.hide();
                    var record = Ext.getCmp('gridListaClientes').store.data.items[0]
        //            console.log(record)
                    var editWindow = Ext.widget('windowCadCliente')
                    var editForm = editWindow.down('form');
                    editForm.loadRecord(record);
                    
                }
                if(b[0].data.name == "Sair"){
                    
                    Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja sair desta aplicação ?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                viewRedir('Logout','telaprincipal');   
                            }
                        }
                        
                    })
                    
                }
                
                if(b[0].data.name == "Entrar"){
                    Ext.widget('windowLogin')
//                    console.log('Entrar')
                }
                    
            }
                }
            }
        },
    ]
});