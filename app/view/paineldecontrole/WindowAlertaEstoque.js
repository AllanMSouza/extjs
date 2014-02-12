Ext.define('AppName.view.paineldecontrole.WindowAlertaEstoque',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowAlertaEstoque',
     id: 'windowAlertaEstoque',
                      title: 'Alerta de estoque minimo',
                      autoShow: true,
                      minimizable: false,
                      maximizable: false,
                      resizable: false,
                      border: false,
                      bodyPadding: 10,
                      layout: 'border',
//                      html: 'Você possui x produtos abaixo do estoque minimo!',
//                      rederTo: Ext.getBody(),
                      height: 200,
                      width: 500,
                      
                      items:[
                           {
                                xtype: 'image',
//                                id: 'imgPanfletos',
                                autoShow: true,
                                region: 'west',
                                width: 100,
                                height: 100,
                                src: 'resources/imagens/controlpanel/alert.png'
                            },
                           
                      ],
                      
//                      html: '<div style="width:400px; margin-left:120px; margin-top: 35px;"> \n\
//                                <b><label style="color:#FFF; font-size:16px;"> Você possui' + num +' produto(s) em estoque minimo!</b></label>\n\
//                               </div>',
                      bbar:[
                          {
                              text: 'Atualizar',
                              icon: 'resources/imagens/controlpanel/refresh.png',
                              handler: function(){
                                   Ext.Ajax.request({
                                url: 'app/data/php/MonitorEstoque.php?action=countRed',

                               success: function(form,resp){
          //                          console.log(form,resp)
                                  var data = Ext.decode(form.responseText)
                                     num = data.data
                                     Ext.getCmp('windowAlertaEstoque').update('<div style="width:400px; margin-left:120px; margin-top: 35px;"> \n\
                                          <b><label style="color:#FFF; font-size:16px;"> Você possui ' + num +' produto(s) em estoque minimo!</b></label>\n\
                                         </div>')
                               },
                              failure:function(form,resp){

                              }
                            });
                              }
                          }
                      ]
});