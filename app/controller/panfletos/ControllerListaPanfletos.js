Ext.define('AppName.controller.panfletos.ControllerListaPanfletos',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'panfletos.StoreCrudPanfletos'
    ],
    models: [
       'panfletos.ModelCrudPanfletos'
    ],
    views: [
       'panfletos.GridListaPanfletos',
       'panfletos.WindowGerenciarPanfletos',
       'panfletos.WindowCadPanfletos',
       'panfletos.FormCadPanfletos',
       'panfletos.WindowCadPaginaPanfleto',
       'panfletos.FormCadPaginaPanfleto'
    ],
    
    init: function(){
        this.control({
            'gridListaPanfletos button[action=insertPanfleto]' : {click: this.insertPanfleto},
            'windowCadPanfletos button[action=save]' : {click: this.save},
            'gridListaPanfletos button[action=insertPaginaPanfleto]' : {click: this.insertPaginaPanfleto}
        });
    },
    
    insertPaginaPanfleto: function(){
      Ext.widget('windowCadPaginaPanfleto')  
    },

insertPanfleto: function(){
//    console.log(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue())
    if(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue() != null){
        Ext.widget('windowCadPanfletos')
        Ext.getCmp('fieldNomeMercado').setValue(Ext.getCmp('comboboxListaPanfletosNomeMercado').getValue())
    }
    else {
         Ext.MessageBox.show({
                    title: 'Erro',
                    msg: 'Nenhum Mercado Selecionado!',
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
    }
    
},

save: function(button){
    var win = button.up('window'),
               form = win.down('form').getForm();
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_panfleto']){
                    record.set(values);
                }
            }
            else{
                var record = Ext.create('AppName.model.panfletos.ModelCrudPanfletos');
                record.set(values);
                Ext.getCmp('gridListaPanfletos').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaPanfletos').store.sync();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
}
    
});