 function viewRedir(arq,container){
    
    Ext.Ajax.request({
        url:'./app/view/'+arq+'.php',
        method:'POST',
        success: function(response,obj){
            
            Ext.get(container).update(response.responseText, true);
        },
        failure: function(response, opts) {
                   alert('Ocorreram erros ao carregar a página');
           }
    })
    
}
