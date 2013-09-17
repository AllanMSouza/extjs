Ext.define('AppName.controller.usuarios.ControllerCrudMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'usuarios.StoreCrudMercado'        
    ],
    models: [
        'usuarios.ModelCadMercado'
    ],
    views: [
            
       'usuarios.WindowGerenciarMercado',
       'usuarios.GridListaMercados',
       'usuarios.WindowCadMercado',
       'usuarios.FormMercado'
       
    ],
    
    init: function(){
        this.control({
             'gridListaMercados button[action=insert]': {click: this.showWindowCadMercado},
             'gridListaMercados button[action=edit]': {click: this.editMercado},
             'gridListaMercados button[action=destroy]': {click: this.destroy},
             'formMercado button[action=save]' : {click: this.saveMercado},
             'formMercado button[action=cancel]' : {click: this.cancel},
       
          
        })
    },
    showWindowCadMercado: function(){
        Ext.widget('windowCadMercado')
    },
    
     saveMercado: function(button){
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
                var record = Ext.create('AppName.model.usuarios.ModelCadMercado');
                record.set(values);
                Ext.getCmp('gridListaMercados').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaMercados').store.sync();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    },
    
      editMercado: function(){
             var records = Ext.getCmp('gridListaMercados').getSelectionModel().getSelection();
//                console.log(records[0])
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadMercado');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
        
    },
    
     destroy: function() {
      var grid = Ext.getCmp('gridListaMercados'),
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
        
    },
    
    cancel: function(button){
        var win = button.up('window');
        win.close();
    }
  
})