Ext.define('AppName.controller.layout.ControllerLayout',{
    extend: 'Ext.app.Controller',
    
    stores: [
        //'StoreTreePanelCategorias'
        
    ],
    models: [
        //'ModelTreePanelCategorias'
    ],
    views: [
       'layout.ContentPanel',
       'layout.DescriptionPanel',
       'layout.HeaderPanelMercado'
//       'layout.LayoutAdministrador'
       
    ],
    
     init: function(){
        this.control({
         'headerPanelMercado button[action=logout]' : {click: this.logout}
               
        // 'treePanelCategorias': {beforeitemexpand: this.teste}
          
        })
    },
    
    logout: function(){
        Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja sair desta aplicação ?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.MessageBox.WARNING,
                        escope: this,
                        width: 450,
                        fn : function(btn, ev){
                            if(btn == 'yes'){
                                viewRedir('Logout','telaprincipal');   
                            }
                        }
                        
                    })
    }
})