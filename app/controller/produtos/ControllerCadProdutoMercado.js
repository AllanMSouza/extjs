Ext.define('AppName.controller.produtos.ControllerCadProdutoMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreCrudProdutosMercado',
        'produtos.StoreImageView'
        
    ],
    models: [
        //'produtos.ModelTreeCategoriasProdutos',
        'produtos.ModelProdutosListaMercado',
        'produtos.ModelCrudProdutos'
    ],
    views: [
       'produtos.FormCadProdutosMercado',
       'produtos.WindowCadProdutosMercado',
       'dataview.ImageView',
       'dataview.OrgPanel',
       'dataview.PanelImageListaProdutosMercado',
       'dataview.DataViewListaProdutosMercado',
       'dataview.DataViewListaProdutosMercadoMenor',
       'dataview.Teste2DataView',
       'produtos.GridDataViewProdutos',
       
       //'produtos.TreeCategoriasProdutos',
       'produtos.GridListaProdutosMercado',
       'produtos.GridListaProdutosGeral',
       'produtos.WindowGerenciarProdutosMercado'
       //'produtos.DataViewListaProdutosGeral'
       
       
    ],
    
    init: function(){
        this.control({
            'windowCadProdutosMercado button[action=save]' : {click: this.save},
            'gridListaProdutosMercado button[action=edit]' : {click: this.edit},
            'gridListaProdutosMercado button[action=destroy]' : {click: this.destroy}
        });
    },
    
    save: function(button){
     var win = button.up('window'),
               form = win.down('form').getForm();
               
               
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_lista_produtos_mercado']){
                    record.set(values);
//                    console.log(record)
                    
                }
            }
            else{
                var record = Ext.create('AppName.model.produtos.ModelProdutosListaMercado');
                record.set(values);
                Ext.getCmp('gridListaProdutosMercado').store.add(record);
            }
            win.close();
            Ext.getCmp('gridListaProdutosMercado').store.sync();
            Ext.getCmp('gridListaProdutosMercado').store.load();
            
           }
           else{
               Ext.ux.Msg.flash({
                   msg: 'Ha campos preenchidos incorretamente',
                   type: 'error'
               });
           }
    },
    
    edit: function(){
        
         var records = Ext.getCmp('gridListaProdutosMercado').getSelectionModel().getSelection();
             
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
                 var editWindow = Ext.widget('windowCadProdutosMercado');
                 var editForm = editWindow.down('form');
                 var record = records[0];
                editForm.loadRecord(record);
            }else{
                return;
            }
            
    },
    
    destroy: function(){
         var grid = Ext.getCmp('gridListaProdutosMercado'),
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
    }
})