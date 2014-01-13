Ext.define('AppName.view.produtos.GridListaProdutosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaProdutosMercado',
    
    autoShow: true,
    id: 'gridListaProdutosMercado',
    columnLines: true,
    enableLocking: true,
    store: 'produtos.StoreCrudProdutosMercado',
    width: 450,
    split:true,
    region: 'east',
    border: false,
    title: 'Lista Produtos Mercado',
       
    tbar: [
//        {
//            text: 'Cadastrar Produto',
//            action: 'insert',
//            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/add.gif'
//             },
//             
             {
            text: 'Editar Produto',
            action: 'edit',
            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/page_white_edit.png',
//            disabled: true,
            itemId: 'edit'
            
           },        
//            {
//            text: 'Excluir Produto',
//            action: 'destroy',
//            icon: 'extjs/examples/kitchensink/resources/images/icons/fam/delete.gif',
//            disabled: true,
//            itemId: 'delete'
//            
//           }
           ],

    plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
                '<div>',
            '<div class="imagem-grid" style = "width:116px; height:106px; float:left; position:relative;" >',
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',
                '</div>',
             '<div class="texto-grid" style= "width:280px; float:left; position:relative;">',
                              
//               '<span><label align=top><b>Descrição:</b></label> {descricao}</span><br>',
//                '<span><label align=top><b>Código:</b></label> {codigo_produto}</span><br>',
//                '<span><b>Produto: </b>{nome_produto}</span>',
                '<table border=0px>'+
                '<tr>'+
                    '<td><b style=" font-size:12"> Produto:</b></td>' +  '<td style=" font-size:12"> {nome_produto} </td>' + 
                '</tr>'+
               // '<tr>'+
                //    '<td><b style=" font-size:12"> Código:</b></td>' +  '<td style=" font-size:12"> {codigo_produto} </td>' + 
               // '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:12"> Descrição:</b> </td>' +  '<td style=" font-size:12"> {descricao} </td>' + 
//                '</tr>'+
                '<tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> Válidade:</b> ' +  '<td style=" font-size:12"> {fabricacao} <b style=" font-size:12"> -- </b>{validade}</td>' + 
                '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:12"> Validade:</b> ' +  '<td style=" font-size:12"> {validade} </td>' + 
//                '</tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> por:</b> </td>' +  '<td style=" font-size:30; color:#55F"><b> R$: {valor} </b></td>' + 
                '</tr>'+
            '</table>',
                '</div>',
            "</div>",
            
            {
              
            })
     }],
    
    columns: [
        {header: 'Código', dataIndex: 'codigo_produto',flex:1},
        {header: 'Nome', dataIndex: 'nome_produto', flex: 2},
        {header: 'Quantidade', dataIndex: 'quantidade', flex: 1},
//        {header: 'Fabricação', xtype: 'datecolumn', format: 'd/m/Y',dataIndex: 'fabricacao',flex: 1},
//        {header: 'Validade', xtype: 'datecolumn', format: 'd/m/Y', dataIndex: 'validade', flex: 1},
//        {text: 'Valor', xtype: 'templatecolumn',tpl: 'R$ {valor}',flex: 1},
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                icon: 'extjs/examples/kitchensink/resources/images/icons/fam/cross.gif',
                tooltip: 'Delete Plant',
                scope: this,
                handler: function(){
                    var grid = Ext.getCmp('gridListaProdutosMercado'),
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
                }
         }]
        }
      
    ],
     viewConfig: {
         plugins: {
            ddGroup: 'organizerDD',
            ptype  : 'gridviewdragdrop'
        },                                  
        listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                 
                var isNaLista = false;
                this.store.remove(data)
                this.store.load()
                
                for(var i = 0; i < Ext.getCmp('gridListaProdutosMercado').store.data.items.length - 1; i++){
                
                        if(Ext.getCmp('gridListaProdutosMercado').store.data.items[i].data.id_produtos > 0){

                            if(Ext.getCmp('gridListaProdutosMercado').store.data.items[i].data.id_produtos == data.records[0].data.id_produtos){
        //                        Ext.Msg.alert('ERRO', 'Atenção, Kit já adicionado a lista');
                                isNaLista =  true;
                                break;
                                                    }
                            else
                                isNaLista =  false;
                        }
        //                console.log(isNoPanfleto)
                }
                
                if(!isNaLista){
                    Ext.widget('windowCadProdutosMercado')
//                                               console.log(data.records[0].data.categorias_id_categorias, data.records[0].data.codigo_produto )
                    Ext.getCmp('fieldIdProdutosCadProdutosMercado').setValue(data.records[0].data.id_produtos);
    //                                               Ext.getCmp('fieldIdCategoriasIdCategoriasWindowCadProdutoMercado').setValue(data.records[0].data.categorias_id_categorias)
    //                                               Ext.getCmp('fieldCodigoProdutoWindowCadProdutoMercado').setValue(data.records[0].data.codigo_produto)
                    this.store.sync()
                }
                
                else {
                    this.store.load()
                    Ext.Msg.alert('ERRO', 'Atenção, Produto já adicionado a lista');
                }
                
                
            }
       }    
   },
//    initComponent: function(){
//        this.callParent();
//        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
//    },
//    
//    onRender: function(){
//        this.store.load();
//        this.callParent(arguments);
//    },
//    onSelectChange: function(selModel, selections){
//        this.down('#delete').setDisabled(selections.length === 0);
//        this.down('#edit').setDisabled(selections.length !== 1);
//    }
});