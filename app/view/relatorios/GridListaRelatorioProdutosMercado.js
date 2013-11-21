Ext.define('AppName.view.relatorios.GridListaRelatorioProdutosMercado',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridListaRelatorioProdutosMercado',
    
    autoShow: true,
    id: 'gridListaRelatorioProdutosMercado',
    columnLines: true,
    enableLocking: true,
    store: 'produtos.StoreCrudProdutosMercado',
        split:true,
    region: 'center',
    border: false,
    
    tbar: [
        {
            text: 'Gerar Grafico de barras',
            action: 'showWindowGraficoBarras'
        }
    ],

    plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : new Ext.XTemplate(
                '<div>',
            '<div class="imagem-grid" style = "width:116px; height:106px; float:left; position:relative;" >',
                '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}"/>',
                '</div>',
             '<div class="texto-grid" style= "width:280px; float:left; position:relative;">',
    
                '<table border=0px>'+
                '<tr>'+
                    '<td><b style=" font-size:12"> Produto:</b></td>' +  '<td style=" font-size:12"> {nome_produto} </td>' + 
                '</tr>'+
              
                '<tr>'+
                '<tr>'+
                    '<td> <b style=" font-size:12"> Válidade:</b> ' +  '<td style=" font-size:12"> {fabricacao} <b style=" font-size:12"> -- </b>{validade}</td>' + 
                '</tr>'+

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
      
    ]
   
});