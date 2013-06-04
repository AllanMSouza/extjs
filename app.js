var contentPanel = {
         id: 'content-panel',
         region: 'center', // this is what makes this panel into a region within the containing layout
         layout: 'card',
         //margins: '5 5 5 0',
         split:true,
         activeItem: 0,
         border: false
        // items: layoutExamples
    };

var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "Subcategoria", expanded: true, iconCls: 'user',children:[
                    {text: 'Produtos', leaf: true, id: 'winUserList'},
                    {text: 'Produtos', leaf: true, id:'useredit', iconCls: 'add'},
                    {text: 'Produtos', leaf: true},
                    {text: 'Produtos', leaf: true},
                    {text: 'Produtos', leaf: true},
                    {text: 'Produtos', leaf: true},
                    {text: 'Produtos', leaf: true},
                    
                    
            ]},
            { text: "subcategoria", expanded: true, iconCls: 'bluetooth',children: [
                { text: "Produtos", id: 'winListaRede',leaf: true },
                { text: "Produtos", id:'redeedit', leaf: true},
                {text: 'Produtos', leaf: true},
                {text: 'Produtos', leaf: true},
                {text: 'Produtos', leaf: true},
                {text: 'Produtos', leaf: true},{text: 'Produtos', leaf: true},
                
                
            ] },
            { text: "Subcategoria", iconCls: 'configuracoes',expanded: true, children: [
                { text: "Produtos", id: 'winlistaconf',leaf: true },
                { text: "Produtos", id:'rede_config', iconCls: 'config',leaf: true},
                {text: 'Produtos', id:'Wizard', leaf: true}
            ] },
            //{ text: "Logout", id: 'Logout',iconCls: 'cancel',leaf: true }
        ]
    }
});

var treePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
        title: 'Painel de Controle',
        region:'center',
        layout: "fit",
        //split: true,
        //height: 360,
        //minSize: 150,
        rootVisible: false,
        //store: store
        
    });
    
    treePanel.getSelectionModel().on('select', function(selModel, record) {
        if (record.get('leaf')) {
            var aux = record.get('id')
            if(aux == 'Logout'){
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
              
            }else{
            Ext.widget(aux)
            }
            
        }
    });

Ext.Loader.setConfig({enabled: true});

Ext.application({
    
    name: 'AppName',
    appFolder: 'app',
    
    controllers: [
        'conProdutos'
       ],
    
    launch: function(){
        Ext.create('Ext.container.Viewport',{
           layout: 'border',
           
           items:[
//               {xtype: 'panel', id: 'header',region: 'north', layout:'border', height: 40,
//               bodyStyle: 'background:#00a604; border-color:#00a604;',
//               items:[
//                 {xtype: 'box', region: 'west', width: 300, html: '<h1><b>Nome do Sistema<b></h1>'},
//                 {xtype: 'field', region:'west', width: 300, margins: '0 5 0 5'},
//                 {xtype: 'button', region:'west', text: 'Pesquisar',width: 80, margins: '6 5 5 5'},
//                 {xtype: 'button', region: 'east', text: 'F1', width: 50, margins: '2 2 2 2'},
//                 {xtype: 'button', region: 'east', text: 'F2', width: 50, margins: '2 2 2 2'},
//                 {xtype: 'button', region: 'east', text: 'F3', width: 50, margins: '2 2 2 2'},
//                 {xtype: 'button', region: 'east', text: 'F4', width: 50, margins: '2 2 2 2'}
//                 
//               ]},
           {xtype: 'panel', region: 'north', height:60, frameHeader:false, bodyPadding:'4 4', layout:'border', bodyStyle: 'background:#fff; border-color:#c0c0c0;',
           items:[
                 {xtype: 'button', iconCls:'favoritos', shadow: true, region:'west', width: 50, height: 60, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' ', tooltip: 'Favoritos',
                     tooltipType: 'title',
                 handler:function(){
                     if(Ext.getCmp('panel-categorias').collapsed == 'left'){
                        Ext.getCmp('panel-categorias').expand()
                        
                     }
                 
                     //console.log(Ext.getCmp('panel-descricao').collapsed )
                     
                 }
                 },                 
                 {xtype: 'button', iconCls: 'mercearia', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top',
                 handler:function(){
                        Ext.widget('winProdutos')
                        
                     }
                     },
                 {xtype: 'button', iconCls: 'carnes', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text: ' '},
                 {xtype: 'button', iconCls: 'frios', region: 'west', width: 50, height: 40, margins: '2 2 2 2',scale:'large', iconAlign: 'top' },
                 {xtype: 'button', iconCls: 'frutas', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top'},
                 {xtype: 'button', iconCls: 'Congelados', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' '},
                 {xtype: 'button', iconCls: 'bebidas', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' '},
                 {xtype: 'button', iconCls: 'higiene-pessoal',  region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' '},
                 {xtype: 'button', iconCls:  'saude-beleza', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' '},
                 {xtype: 'button', iconCls: 'bazar-limpeza', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:' '},
//                 {xtype: 'button', text: 'Outras', region: 'west', width: 50, height: 40, margins: '2 2 2 2', scale:'large', iconAlign: 'top', text:'Outros'}
                   {xtype:'panel', bodyPadding: '10 5',layout: 'border', region: 'center', width: 500, bodyStyle: 'background:#fff; border-color:#fff;', items:[
                                        {xtype: 'textfield', region: 'west', width: 400, margins: '2 2 2 2'},
                                        {xtype: 'button', width: 80, region:'west', text:'pesquisar', margins:'2 2 2 2'}
                                ]},
                                    
                 {xtype: 'button', region: 'east', text: 'F1', width: 50, margins: '2 2 2 2'},
                 {xtype: 'button', region: 'east', text: 'F2', width: 50, margins: '2 2 2 2'},
                 {xtype: 'button', region: 'east', text: 'F3', width: 50, margins: '2 2 2 2'},
                 {xtype: 'button', region: 'east', text: 'F4', width: 50, margins: '2 2 2 2'},
                 
                         ]},
           
               contentPanel,
               
               {xtype: 'treepanel', rootVisible: false, useArrows: true, id: 'panel-categorias',title:'Categorias', region: 'west', split:true, collapsible:true, width:300, collapsed:true, store: store,
               
               
               items:[
                   
                   
               ],
               listeners: {
                   selectionchange: function(model, records) {
                    if (records[0]) {
                        Ext.widget('winProdutos')
                        if(!Ext.getCmp('panel-descricao').collapsed){
                         Ext.getCmp('panel-descricao').collapse()
                         //console.log(!Ext.getCmp('panel-descricao').collapsed )
                                               
                        }
                        
                    }
                }
               }
            },
               
           
            {xtype: 'panel', id:'panel-descricao',title:'Descrição', region: 'east', collapsed: true, split:true, collapsible:true, width:300, 
               items:[
                   
                   
               ]}
           
           ]
            
        });
    }
   
    
});