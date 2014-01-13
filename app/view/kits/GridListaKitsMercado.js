Ext.define('AppName.view.kits.GridListaKitsMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaKitsMercado',
    id: 'gridListaKitsMercado',
    
//    autoShow: true,
//    title: 'Lista Kits Mercado',
    layout: 'fit',
    region: 'center',
    store: 'kits.StoreCrudKitsProdutosMercado',
    
    tbar:[
        {
            text: 'Novo kit',
            action: 'add'
        },
        {
            text: 'Editar',
            action: 'edit'
        },
        {
            text: 'Ativar/Inativar',
            handler: function(){
                var records = Ext.getCmp('gridListaKitsMercado').getSelectionModel().getSelection()
                var record = records[0];
//                console.log(record.data.ativo)
                var ativo = 0;
                if(record.data.ativo == 0)
                    ativo = 1;
                else
                    ativo = 0;
                Ext.Ajax.request({
                    url: 'app/data/php/Kits.php?action=ativoInativo&ativo='+ativo+'&id_kit='+record.data.id_kit,
                    success: function(form, resp){
//                        console.log(form, resp)        
//                        Ext.example.msg('Server Response', resp.result.msg);
                    Ext.getCmp('gridListaKitsMercado').store.load()
//                                
                     },
                    failure:function(form,resp){

                        Ext.example.msg('Server Response', resp.result.msg);

                    }
                });
                
            }
        },
        {
            text: 'Adicionar Produtos ao Kit',
            action: 'addProdutos'
        },
        {
            text: 'Visualizar Prodtuos',
            action: 'viewProdutos'
        }
    ],
    columnLines: true,
    enableLocking: true,
    plugins: [             
//                    cellEditing,
                
            {
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
            '<div>',
            '<div class="imagem-grid" style = "width:100px; height:100px; float:left; position:relative;" >',
                '<img style= "width: 100px; height: 100px; padding: 5px" align=top src=app/data/php/Kits.php?action=getImgKit&id_kit={id_kit} />',
                '</div>',
             '<div class="texto-grid" style= "width:580px; float:left; position:relative;">',
                              
//               '<span><label align=top><b>Descrição:</b></label> {descricao}</span><br>',
//                '<span><label align=top><b>Código:</b></label> {codigo_produto}</span><br>',
//                '<span><b>Produto: </b>{nome_produto}</span>',
                '<table border=0px>'+
//                '<tr>'+
//                    '<td><b style=" font-size:12"> Produto:</b></td>' +  '<td style=" font-size:12"> {nome_produto} </td>' + 
//                '</tr>'+
                '<tr>'+
                    '<td><b style=" font-size:14"> Kit:</b></td>' +  '<td style=" font-size:14"> {titulo} </td>' + 
                '</tr>'+
                '<tr>'+
                    '<td><b style=" font-size:14"> Descrição:</b></td>' +  '<td style=" font-size:14"> {desc_kit} </td>' + 
                '</tr>'+
                '</table>'+
                '<table border=0px>'+
                '<tr>'+
                    '<td> <b style=" font-size:14"> De:</td> <td style= "width: 170px"></b>  <label style=" font-size:30; color:#55F"><b> R$ {total} </b></label> </td> <td> <b style=" font-size:14"> Por:</b></td> <td style= "width: 170px"><label style=" font-size:30; color:#55F"><b> R$ {desc_total} </b></label></td> <td> <b style=" font-size:14"> Desconto: </b></td> <td style= "width: 80px"> <label style=" font-size:30; color:#F00"><b> {desconto}% </b></label> </td>' +
                '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:14"> De:</b>  <label style=" font-size:30; color:#55F"><b> R$: {total} </b></label> </td> ' +
//                '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:14"> Por:</b> <label style=" font-size:30; color:#FA0"><b> R$: {desc_total} </b></label></td>' +
//                '</tr>'+
//                '<tr>'+
//                    '<td> <b style=" font-size:14"> Desconto: </b>  <label style=" font-size:30; color:#F00"><b> {desconto}% </b></label> </td>' +
//                '</tr>'+
            '</table>',
                '</div>',
            "</div>",
            {
                
            })
             }
         ],
    
    columns:[
        {header: 'Titulo', dataIndex: 'titulo', flex: 1},
        {header: 'Descrição', dataIndex: 'descricao', flex: 1},
        {header: 'Desconto', dataIndex: 'desconto', flex: 0.5},
        {header: 'Validade', dataIndex: 'validade', flex: 1},
        {header: 'Ativo/Inativo', dataIndex: 'ativo_string', flex: 1}
    ],
    
});