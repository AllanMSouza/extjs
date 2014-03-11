Ext.define('AppName.view.ofertas.GridMinhasOfertas',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridMinhasOfertas',
    id: 'gridMinhasOfertas',
    
    autoShow: true,
    title: 'Minhas Ofertas',
    store: 'ofertas.StoreMinhasOfertas',
    tbar:[
        {
            text: 'Editar',
            action: 'editOferta'
        },
        
        {
            text: 'Excluir',
            action:'excluirOferta'
        },
        
    ],
    columns:[
        {
            header: 'Produto',
            dataIndex: 'nome_produto',
            flex: 1
        },
        {
            header: 'Valor',
            dataIndex: 'valor',
            flex: 0.5
        },
        {
            header: 'Oferta',
            dataIndex: 'valor_oferta',
            flex: 0.5
        },
        {
            header: 'Validade',
            dataIndex: 'validade_oferta',
            flex: 1
        },
        {
            header: 'Ativa',
            dataIndex: 'status_oferta',
            flex: 0.5,
            renderer:function(val){
//                console.log(val)
                if(val == 1)
                    return 'Sim'
                else
                    return 'Não'
            }
        },
        {
            header: 'Imagem',
            dataIndex: 'id_produtos',
            flex: 1,
            renderer: function(val){
//                console.log(c.data.id_produtos)
                return '<img style= "width: 60px; height: 50px; padding: 5px" align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos='+ val+'"/>'
            }
        }
    ],
    
    viewConfig: {
        plugins: [
            {
                ddGroup: 'kits',
                ptype  : 'gridviewdragdrop'
            }
        ],
        listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                console.log(data)
                var isNaLista = false;
                               
                for(var i = 0; i < Ext.getCmp('gridMinhasOfertas').store.data.items.length; i++){
                
                        if(Ext.getCmp('gridMinhasOfertas').store.data.items[i].data.status_oferta == 1){
                                                        
                            if(Ext.getCmp('gridMinhasOfertas').store.data.items[i].data.id_produtos == data.records[0].data.id_produtos){
        //                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
                                isNaLista =  true;
                                break;
                            }
                            else
                                isNaLista =  false;
                        }
        
                }
                 if(!isNaLista){
                    Ext.widget('windowCadOferta')
                    Ext.getCmp('field_id_lista_produtos_mercado_cad_ofertas').setValue(data.records[0].data.id_lista_produtos_mercado)
                    console.log(Ext.getCmp('field_id_lista_produtos_mercado_cad_ofertas').getValue())
                 }
                else {
                    this.store.load()
                    Ext.Msg.alert('ERRO', 'Atenção, Produto já adicionado a lista');
                }


                
            }
        }
    } 
    
});