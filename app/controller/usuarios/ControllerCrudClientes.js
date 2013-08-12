Ext.define('AppName.controller.usuarios.ControllerCrudClientes',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'usuarios.StoreCrudCliente'        
    ],
    models: [
        'usuarios.ModelCadCliente'
    ],
    views: [
            
       'usuarios.WindowGerenciarClientes',
       'usuarios.GridListaClientes',
       'usuarios.WindowCadCliente',
       'usuarios.FormCliente'
       
    ],
    
    init: function(){
        this.control({
            
        'gridListaClientes button[action=insert]': {click: this.showWindowCadCliente},
        'gridListaClientes button[action=edit]': {click: this.editCliente},
        'gridListaClientes button[action=destroy]': {click: this.destroy},
        'formCliente button[action=saveCliente]' : {click: this.saveCliente},
        'formCliente button[action=cancel]' : {click: this.cancel}
          
        })
    },
    
    showWindowCadCliente: function(){
        Ext.widget('windowCadCliente')
    },
    
    saveCliente: function(button){
        var win = button.up('window'),
               form = win.down('form').getForm(),
               IDUSUARIOS = form.getRecord() ? form.getRecord().get('id_usuarios') : 0;
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_usuarios']){
                    record.set(values);
                }
            }
            else{
                var record = Ext.create('AppName.model.usuarios.ModelCadCliente');
                record.set(values);
                Ext.getCmp('gridListaClientes').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaClientes').store.sync();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    },
    
      editCliente: function(){
             var records = Ext.getCmp('gridListaClientes').getSelectionModel().getSelection();
             
             if(records == ''){
                  Ext.Msg.show({
                        title: 'Atenção!',
                        msg: 'Nenhum registro selecionado!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR,
                        escope: this,
                        width: 300,
                        
                    })
                 
             }
                 
            if(records.length === 1){
                 var editWindow = Ext.widget('windowCadCliente');
                 var editForm = editWindow.down('form');
                 var record = records[0];
                editForm.loadRecord(record);
            }else{
                return;
            }
        
    },
    
    destroy: function() {
      var grid = Ext.getCmp('gridListaClientes'),
               records = grid.getSelectionModel().getSelection();
               
               if(records.length === 0){
                   Ext.Msg.show({
                        title: 'Atenção!',
                        msg: 'Nenhum registro selecionado!',
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR,
                        escope: this,
                        width: 300,
                        
                    })
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
        
    },
    
    cancel: function(button){
        var win = button.up('window');
        win.close();
    }
})