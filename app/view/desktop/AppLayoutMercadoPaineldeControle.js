/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('AppName.view.desktop.AppLayoutMercadoPaineldeControle', {
    extend: 'AppName.view.desktop.App',

    requires: [
        'Ext.window.MessageBox',

        'AppName.view.desktop.config.ShortcutModel',
        'AppName.view.desktop.config.Settings'
    ],

//    init: function() {
//        // custom logic before getXYZ methods get called...
//
//        this.callParent();
//
//        // now ready...
//    },

    getModules : function(){
        return [

//              new AppName.view.panfletos.WindowGerenciarPanfletos(),
//              new AppName.view.produtos.WindowGerenciarProdutosMercado(),
//              new AppName.view.produtos.WindowGerenciarProdutos(),
              new AppName.view.usuarios.WindowGerenciarMercado(),
//              new AppName.view.kits.WindowGerenciarListaKitsMercado(),
//              new AppName.view.relatorios.WindowRelatorioProdutosMercado(),
//              new AppName.view.estoque.WindowMonitorPedidos(),
//              new AppName.view.estoque.WindowMonitorEstoque(),
              new AppName.view.paineldecontrole.WindowControlPanelMercado(),
//              new AppName.view.usuarios.WindowGerenciarFuncionariosMercado()
        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'AppName.view.desktop.config.ShortcutModel',
                data: [
//                    { name: 'Gerenciar Panfletos', iconCls: 'notepad-shortcut', module: 'windowGerenciarPanfletos' },
//                    { name: 'Gerenciar Funcionarios', iconCls: 'accordion-shortcut', module: 'windowGerenciarFuncionariosMercado' },
//                    { name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
//                    { name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'}
                ]
            }),

            wallpaper: 'wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Menu',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    {
                        text: 'Relatórios',
                        handler: function(){
                            Ext.widget('windowSelectGrafico')
                        }
                    },
                    '->',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
//                { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
//                { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
         Ext.Msg.show({
                        title: 'Confirmação',
                        msg: 'Tem certeza que deseja sair desta aplicação?',
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
    },

    onSettings: function () {
        var dlg = new AppName.view.desktop.config.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
