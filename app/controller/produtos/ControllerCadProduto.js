Ext.define('AppName.controller.produtos.ControllerCadProduto',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreTreeCategoriasProdutos'
        
    ],
    models: [
        'produtos.ModelTreeCategoriasProdutos'
    ],
    views: [
       'produtos.FormCadProduto',
       'produtos.WindowCadProduto',
       'produtos.TreeCategoriasProdutos'
       
    ],
    
    init: function(){
        this.control({
            'windowCadProduto button[action=save]':{click: this.save},
            'treeCategoriasProdutos':{selectionchange: this.setNomeCategoria},
        });
    },
    
    save: function(button){
        //console.log('haha')
        var win = button.up('windowCadProduto'),
            form = win.down('form').getForm();
        
        if(form.isValid()){
            form.submit({
                url: 'app/data/php/Produtos.php?action=insert'
                
            })            
        }            
    },
    
    setNomeCategoria: function(record, model){
        //console.log(model[0].data.leaf)
        if(model[0].data.leaf){
            Ext.getCmp('fieldCategoria').setValue(model[0].data.nome_categoria)
        }
    }
})