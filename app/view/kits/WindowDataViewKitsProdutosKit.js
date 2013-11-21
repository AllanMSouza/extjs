Ext.define('AppName.view.kits.WindowDataViewKitsProdutosKit',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowDataViewKitsProdutosKit',
    id: 'windowDataViewKitsProdutosKit',
    
    autoShow: true,
    title: '',
    width: 800,
    height: 500,
    layout: 'border',
    //title: 'Kit :',
    items:[
        {
            xtype: 'panel',
            region: 'center',
            layout: 'fit',
            border: false,
            items:[ 
                {
                    xtype: 'panel',
                    layout: 'border',
                    border: false,
                    items:[
                        {
                            xtype: 'panel',
                            region: 'north',
                            layout: 'border',
                            height: 200,
                            border: false,
                            items:[
                                {                            
                                    xtype: 'image',
                                    region: 'west',
                                    margins: '0 0 0 0',
                                    id: 'imgDataViewKit',
                                    autoShow: true,
                                    border: false,
                                    width: 180,
                                    height: 180,
                                    src: 'resources/imagens/congelados.png'
                                },
                                {
                                    xtype: 'panel',
                                    region: 'center',
                                    id: 'valorKitDataView',
                                    
                                    html:'haha',
                                    border: false,
                                    bbar:[
                                        '->',
                                        {
                                            xtype:'button',
                                            text: 'Adicionar a Lista',
                                            width: 200,
                                            height: 50,
                                            action: 'addKit',
//                                            hidden:true,
                                            id: 'btAddKit'
                                        },
                                        {
                                            xtype: 'textfield',
                                            hidden: true, 
                                            name: 'id_kit',
                                            id: 'id_kit'
                                        }
                                    ]
                                    
                                },
                                                              
                            ]
                            
                        },                      
                        {
                            xtype: 'panel',
                            region: 'center',
                            ui: 'light',
                            title: 'Produtos do kit',
                            border: false,
                            autoScroll: true,
                            items: [
                                {
                                    xtype: 'dataViewProdutosKit',
                                    border: false
                                    
                                }
                            ]
                        }
                            
                        
                    ]
                }
                
//                {
//                    xtype: 'image',
//        //            region: 'west',
//                    id: 'imgDataViewKit',
//                    autoShow: true,
//                    width: 100,
//                    height: 100,
//                    src: 'resources/imagens/congelados.png'
//                },
//                {
//                    xtype: 'dataViewProdutosKit',
//                    region: 'south',
////                    ui: 'ligth',
//                    reight: 200
//                }
            ]
        }
        
    ]
});