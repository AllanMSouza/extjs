Ext.define('AppName.controller.panfletos.ControllerListaProdutosPanfletos',{
    extend: 'Ext.app.Controller',
    
    stores: [
       'panfletos.StoreListaProdutosPanfletos'
    ],
    models: [
       'panfletos.ModelListaProdutosPanfleto'
    ],
    views: [
       'panfletos.GridListaProdutosPanfleto',
       'panfletos.FormValorProdutoPanfleto',
       'panfletos.WindowValorProdutoPanfleto'
    ],
    
    init: function(){
        this.control({
            'windowValorProdutoPanfleto button[action=save]' : {click: this.save}
        });
    },
    
    save:function(button){
        var win = button.up('window'),
               form = win.down('form').getForm();
//               IDUSUARIOS = form.getRecord() ? form.getRecord().get('id_usuarios') : 0;
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_pagina_panfleto_has_produtos']){
                    record.set(values);
                }
            }
            else{
                var record = Ext.create('AppName.model.panfletos.ModelListaProdutosPanfleto');
                record.set(values);
                Ext.getCmp('gridListaProdutosPanfleto').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaProdutosPanfleto').store.sync();
            Ext.getCmp('gridListaProdutosPanfleto').store.load();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    }
    
});