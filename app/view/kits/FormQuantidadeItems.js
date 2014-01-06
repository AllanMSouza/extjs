Ext.define('AppName.view.kits.FormQuantidadeItems',{
    extend: 'Ext.form.Panel',
    alias: 'widget.formQuantidadeItems',
    
    autoShow: true,
    ragion: 'center',
    bodyPadding: 10,
    layout: 'fit',
    border: false,
    items:[
        {
            xtype: 'textfield',
            name: 'quantidade',
            fieldLabel: 'Quantidade'
        },
        {
            xtype: 'textfield',
            name: 'kits_id_kit',
//            fieldLabel: 'Quantidade',
            id: 'kits_id_kit',
            hidden: true
        },
        {
            xtype: 'textfield',
            name: 'lista_produtos_mercado_id_lista_produtos_mercado',
//            fieldLabel: 'Quantidade',
            id: 'lista_produtos_mercado_id_lista_produtos_mercado',
            hidden: true
        },
    ],
    
    buttons: [
        {
            text:'Salvar',
            action: 'saveItem'
        },
        {
            text: 'Cancelar',
            handler:function(){
                Ext.getcmp('windowQuantidadeItems').close()
            }
        }
    ]
});