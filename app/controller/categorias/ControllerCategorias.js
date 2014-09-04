Ext.define('AppName.controller.categorias.ControllerCategorias',{
	extend: 'Ext.app.Controller',

	stores:[
		'categorias.StoreListaCategorias',
		'categorias.StoreListaSubcategorias',
	],

	models: [
		'categorias.ModelListaCategorias'
	],

	views: [
		'categorias.GridListaCategorias',
		'categorias.WindowListaCategorias',
		'categorias.GridListaSubcategorias',
		'categorias.WindowCadCategorias',
		'categorias.FormCadCategorias',
		'categorias.FormCadSubcategoriaNivel1',
		'categorias.WindowCadSubcategoriaNivel1',
		'categorias.WindowCadSubcategoriaNivel2',
		'categorias.GridSubcategoriasNivel2'
	],

	init: function(){
        this.control({
            'gridListaCategorias button[action=add_categorias]': {click: this.add_categorias},
            'gridListaCategorias button[action=edit]': {click: this.edit},
            'gridListaCategorias button[action=delete]': {click: this.delete},
            'windowCadCategorias button[action=save]': {click: this.save},
            'windowCadSubcategoriaNivel1 button[action=savesub]' : {click: this.savesub},
            'windowCadSubcategoriaNivel2 button[action=savesub]' : {click: this.savesub},
            'gridListaSubcategorias button[action=editsub]' : {click: this.editsub},
            'gridListaSubcategorias button[action=deletesub]' : {click: this.deletesub}


          
        })
    },

    add_categorias: function(){
    	Ext.widget('windowCadCategorias')
    },

    delete: function(){
        var records = Ext.getCmp('gridListaCategorias').getSelectionModel().getSelection();

        if(records.length == 1){
            var id = records[0].data.id_categorias
            // console.log()
            Ext.Ajax.request({
                url: 'app/data/php/Categorias.php?action=delete&id_categorias=' + id,
                success: function(form, resp){
                    // console.log(resp)
                    Ext.example.msg('Server Response', 'Categoria excluida com sucesso!');                               
                    Ext.getCmp('gridListaCategorias').store.load()
//                                
                },
                failure:function(form,resp){
                   
                    Ext.example.msg('Server Response', 'Erro ao excluir categoria!');
                    Ext.getCmp('gridListaCategorias').store.load()

                }
            });
        }
    },

    deletesub: function(){
        var records = Ext.getCmp('gridListaSubcategorias').getSelectionModel().getSelection();

        if(records.length == 1){
            var id = records[0].data.id_categorias
            // console.log()
            Ext.Ajax.request({
                url: 'app/data/php/Categorias.php?action=delete&id_categorias=' + id,
                success: function(form, resp){
                    // console.log(resp)
                    Ext.example.msg('Server Response', 'Categoria excluida com sucesso!');                               
                    Ext.getCmp('gridListaSubcategorias').store.load()
//                                
                },
                failure:function(form,resp){
                   
                    Ext.example.msg('Server Response', 'Erro ao excluir categoria!');
                    Ext.getCmp('gridListaSubcategorias').store.load()

                }
            });
        }
    },

    edit: function(a,b){
        
             var records = Ext.getCmp('gridListaCategorias').getSelectionModel().getSelection();
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadCategorias');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }
        Ext.getCmp('imgCategorias').setSrc('app/data/php/Categorias.php?action=getImagemCategorias&id_categorias='+ record.data.id_categorias)
        //Ext.getCmp('fileuploadfieldImagemProdutos').setValue("uahuahuah")
        //console.log(record.data.nome_imagem)
                
    },

    editsub: function(a,b){
        
        var records = Ext.getCmp('gridListaSubcategorias').getSelectionModel().getSelection();
                //console.log(records)
        if(records.length === 1){
             var editWindow = Ext.widget('windowCadSubcategoriaNivel2');
             var editForm = editWindow.down('form');
             var record = records[0];
            editForm.loadRecord(record);
        }
        else
            return;
        
                
    },

    save: function(button){
        //console.log('haha')
        var win = button.up('windowCadCategorias'),
            form = win.down('form').getForm();
        
        if(form.isValid()){
            var record = form.getRecord(),
            values = form.getValues();
            if(record){
                if(record.data['id_categorias']){
                    form.submit({
                        url: 'app/data/php/Categorias.php?action=update',
                        success: function(form, resp){
                                //console.log(form,resp)
                                if(resp.result.success == true){
                                    Ext.example.msg('Server Response', resp.result.msg);
                                    win.close()
                                    Ext.getCmp('gridListaCategorias').store.load()
                                }
                        },
                        failure:function(form,resp){
                            //postFailure(form, resp);
                            Ext.example.msg('Server Response', resp.result.msg);


                            //window.location.reload();
                        }

                    })
                }
            }
            
            else {
                var record = Ext.create('AppName.model.categorias.ModelListaCategorias');
                record.set(values);
                Ext.getCmp('gridListaCategorias').store.add(record);
                form.submit({
                    url: 'app/data/php/Categorias.php?action=insert',
                    success: function(form, resp){
                            //console.log(form,resp)
                            if(resp.result.success == true){
                                Ext.example.msg('Server Response', resp.result.msg);
                                win.close()
                                Ext.getCmp('gridListaCategorias').store.load()
                            }
                    },
                    failure:function(form,resp){
                        //postFailure(form, resp);
                        Ext.example.msg('Server Response', resp.result.msg);


                        //window.location.reload();
                    }

                })
            }
        }            
    },

    savesub: function(button){
        var win = button.up('window');

        var model = Ext.getCmp('gridListaCategorias').getSelectionModel().getSelection();

        var form = Ext.getCmp('formCadSubcategoriaNivel1').getForm(),
        values = form.getValues();

        if(Ext.getCmp('fieldid_categorias').getValue() > 0){
            //update    
            form.submit({
                url: 'app/data/php/Categorias.php?action=updateSub',
                success: function(form, resp){
                        //console.log(form,resp)
                        if(resp.result.success == true){
                            Ext.example.msg('Server Response', resp.result.msg);
                            win.close()
                            Ext.getCmp('gridListaSubcategorias').store.load()
                        }
                },
                failure:function(form,resp){
                    //postFailure(form, resp);
                    Ext.example.msg('Server Response', resp.result.msg);


                    //window.location.reload();
                }

            })
        }

        else {
            //insert
            var record = Ext.create('AppName.model.categorias.ModelListaCategorias');
            record.set(values);
            // Ext.getCmp('gridListaSubcategorias').store.add(record);
            form.submit({
                url: 'app/data/php/Categorias.php?action=insertSub',
                success: function(form, resp){
                        //console.log(form,resp)
                        if(resp.result.success == true){
                            Ext.example.msg('Server Response', resp.result.msg);
                            win.close()
                            Ext.getCmp('gridListaSubcategorias').store.load()
                        }
                },
                failure:function(form,resp){
                    Ext.example.msg('Server Response', resp.result.msg);
                }

            })
        }
    }   
});