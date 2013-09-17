Ext.define('AppName.controller.desktop.ControllerDesktop',{
    extend: 'Ext.app.Controller',
    
    stores: [
        //'StoreTreePanelCategorias'
        
    ],
    models: [
        'AppName.view.desktop.config.WallpaperModel'
    ],
    views: [
        'desktop.AppLayoutMercado',
        'desktop.App',
        'desktop.Desktop',
        'desktop.StartMenu',
        'desktop.TaskBar',
        'desktop.TrayClock',
        'desktop.Wallpaper',
        
//        'desktop.view.ShortcutModel',
//
//        'desktop.view.SystemStatus',
//        'desktop.view.VideoWindow',
//        'desktop.view.GridWindow',
//        'desktop.view.TabWindow',
////        'AppName.view.desktop.view.view.AccordionWindow',
//        'desktop.view.Notepad',
//        'desktop.view.BogusMenuModule',
//        'desktop.view.BogusModule',

//        'MyDesktop.Blockalanche',
//        'desktop.view.Settings'
        
        
        
       
    ],
    
     init: function(){
        this.control({
     
     });
   }
    
});