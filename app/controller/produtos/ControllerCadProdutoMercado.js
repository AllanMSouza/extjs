Ext.define('AppName.controller.produtos.ControllerCadProdutoMercado',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreCrudProdutosMercado'
        
    ],
    models: [
        //'produtos.ModelTreeCategoriasProdutos',
        'produtos.ModelProdutosListaMercado'
    ],
    views: [
       'produtos.FormCadProdutosMercado',
       'produtos.WindowCadProdutosMercado',
       //'produtos.TreeCategoriasProdutos',
       'produtos.GridListaProdutosMercado',
       'produtos.GridListaProdutosGeral',
       //'produtos.WindowGerenciarProdutos',
       //'produtos.TreeCategoriasProdutosListaProdutos'
       
    ],
    
    init: function(){
        this.control({
            'windowCadProdutosMercado button[action=save]' : {click: this.save}
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
    }
            
   
})