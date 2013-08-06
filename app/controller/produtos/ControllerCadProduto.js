Ext.define('AppName.controller.produtos.ControllerCadProduto',{
    extend: 'Ext.app.Controller',
    
    stores: [
        'produtos.StoreTreeCategoriasProdutos',
        'produtos.StoreTreeCategoriasProdutosListaProdutos',
        'produtos.StoreCrudProdutos'
        
    ],
    models: [
        'produtos.ModelTreeCategoriasProdutos',
        'produtos.ModelCrudProdutos'
    ],
    views: [
       'produtos.FormCadProduto',
       'produtos.WindowCadProduto',
       'produtos.TreeCategoriasProdutos',
       'produtos.GridListaProdutos',
       'produtos.WindowGerenciarProdutos',
       'produtos.TreeCategoriasProdutosListaProdutos'
       
    ],
    
    init: function(){
        this.control({
            'windowCadProduto button[action=save]':{click: this.save},
            'windowCadProduto button[action=cancel]':{click: this.cancel},
            'treeCategoriasProdutos':{selectionchange: this.setNomeCategoria},
        });
    },
    
    cancel:function(button){
        var win = button.up('windowCadProduto');
        win.close()
    },
    
    save: function(button){
        //console.log('haha')
        var win = button.up('windowCadProduto'),
            form = win.down('form').getForm();
        
        if(form.isValid()){
            form.submit({
                url: 'app/data/php/Produtos.php?action=insert',
                success: function(form, resp){
                        //console.log(form,resp)
                        if(resp.result.success == true){
                            Ext.example.msg('Server Response', resp.result.msg);
                            win.close()
                        }
                },
                failure:function(form,resp){
                    //postFailure(form, resp);
                    Ext.example.msg('Server Response', resp.result.msg);


                    //window.location.reload();
                }
                
            })            
        }            
    },   
    
    setNomeCategoria: function(record, model){
//        console.log(model[0].data)
        if(model[0].data.leaf){
            Ext.getCmp('fieldCategoria').setValue(model[0].data.nome_categoria)
            Ext.getCmp('fieldIdCategoria').setValue(model[0].data.id_categorias)
            
        }
    }
})