//var dataViewListaProdutosGeral = Ext.create('Ext.view.View',{
//    tpl           : [
//        '<tpl for=".">',
//            '<div class="thumb-wrap">',
//                '<div class="thumb" style= "">',
//                    (!Ext.isIE6? '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 100px; height: 90px; padding: 5px;"/>':               
//                    '<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>'),
//                '<span><label style =" width=100px height=10px">{nome_produto}</label></span>',
//                '</div>',
//                
//            '</div>',
//        '</tpl>'
//    ],
//    store         : 'produtos.StoreImageView',
//    loadingText   : 'loading..',
//    multiSelect   : false,
////    id: 'testeeste',
////    layout : 'fit',
//    flex: 1,
////    overClass     : 'emplOver',
////    selectedClass : 'emplSelected',
////    itemSelector  : 'div.emplWrap',
//    ptyText     : 'Nenhum produto cadastrado',
//    style         : 'overflow:auto; background-color: #FFFFFF;'
//});
//
//var dataViewListaProdutosMercado = Ext.create('Ext.view.View',{
//    tpl           : [
//        '<tpl for=".">',
//            '<div class="thumb-wrap">',
//                '<div class="thumb" style= "">',
//                    (!Ext.isIE6? '<img align=top src="app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos}" style="width: 100px; height: 90px; padding: 5px;"/>':               
//                    '<div style="width:76px;height:76px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'app/data/php/Produtos.php?action=getImagemProdutos&id_produtos={id_produtos} style="width: 100px; height: 90px; padding: 5px;"\')"></div>'),
//                '<span><label style =" width=100px height=10px">{nome_produto}</label></span>',
//                '</div>',
//                
//            '</div>',
//        '</tpl>'
//    ],
//    store         : 'produtos.StoreImageView',
//    loadingText   : 'loading..',
//    multiSelect   : false,
////    id: 'teste',
////    layout : 'fit',
//    flex: 1,
////    overClass     : 'emplOver',
////    selectedClass : 'emplSelected',
////    itemSelector  : 'div.emplWrap',
//    ptyText     : 'Nenhum produto cadastrado',
//    style         : 'overflow:auto; background-color: #FFFFFF;'
//    
//});

Ext.define('AppName.view.dataview.Teste2DataView',{
//    extend: 'Ext.panel.Panel',
//    alias: 'widget.testeDD',
//    
//    autoShow: true,
//    region: 'center',
//    layout: 'border',
//    items:[
//        {
//            title  : 'Employees on staff',
//            frame  : true,
////            layout : 'fit',
//            region: 'north',
//            id: 'testea',
//            items  : dataViewListaProdutosGeral,
//            flex   : 1
//            
//        },
//        {
//            title  : 'Employees on staff',
//            frame  : true,
//            region : 'center',
//            id: 'testeb',
//            layout : 'fit',
//            items  : dataViewListaProdutosMercado,
//            flex   : 1
//        }
//        
//        
//    ]
});

//var dragZoneOverrides = {
//        containerScroll : true,
//        scroll          : false,
//        getDragData     : function(evtObj){
//            var dataView = this.dataView;
//            var sourceEl = evtObj.getTarget(dataView.itemSelector, 10);
//
//            if (sourceEl) {
//                var selectedNodes = dataView.getSelectedNodes();
//                var dragDropEl = document.createElement('div');
//
//                if (selectedNodes.length < 1) {
//                    selectedNodes.push(sourceEl);
//                }
//
//                Ext.each(selectedNodes, function(node) {
//                    dragDropEl.appendChild(node.cloneNode(true));
//                });
//                return {
//                    ddel           : dragDropEl,
//                    repairXY       : Ext.fly(sourceEl).getXY(),
//                    dragRecords    : dataView.getSelectedRecords(),
//                    sourceDataView : dataView
//                };
//            }
//
//        },
//        getRepairXY: function() {
//            return this.dragData.repairXY;
//        }
//    };
//
//
//    var onStaffDragZoneCfg = Ext.apply({}, {
//        ddGroup     : 'employeeDD',
//        dataView    : dataViewListaProdutosGeral
//    }, dragZoneOverrides);
//
//    Ext.create('Ext.dd.DragZone',dataViewListaProdutosGeral.getEl(), onStaffDragZoneCfg);
//
//    var vacationDragZoneCfg = Ext.apply({}, {
//        ddGroup     : 'employeeDD',
//        dataView    : dataViewListaProdutosMercado
//    }, dragZoneOverrides);
//
//    Ext.create('Ext.dd.DragZone',dataViewListaProdutosMercado.getEl(), vacationDragZoneCfg);
//
//
//        /***
//         * Drop zone dcode
//         */
//    var dropZoneOverrides = {
//        onContainerOver : function() {
//          return this.dropAllowed;
//        },
//        onContainerDrop : function(dropZone, evtObj, dragData) {
//
//            var dragRecords = dragData.dragRecords;
//            var store = this.dataView.store;
//
//            var dupFound = false;
//
//            Ext.each(dragRecords, function(record) {
//
//                var found = store.findBy(function(r) {
//                   return r.data.id === record.data.id;
//                });
//
//                if (found > -1 ) {
//                    dupFound = true;
//                }
//            });
//
//            if (dupFound !== true) {
//                Ext.each(dragRecords, function(record) {
//                    dragData.sourceDataView.store.remove(record);
//                });
//                this.dataView.store.add(dragRecords);
//                this.dataView.store.sort('lastname', 'ASC');
//            }
//
//            return true;
//        }
//    };
//
//    var onStaffDropZoneCfg = Ext.apply({}, {
//        ddGroup          : 'employeeDD',
//        dataView         : dataViewListaProdutosGeral
//    }, dropZoneOverrides);
//
//    var onStaffDVDropZone = Ext.create('Ext.dd.DropZone', dataViewListaProdutosGeral.ownerCt.el, onStaffDropZoneCfg);
//
//    var onVacationDropZoneCfg = Ext.apply({}, {
//        ddGroup          : 'employeeDD',
//        dataView         : dataViewListaProdutosMercado
//    }, dropZoneOverrides);
//
//    var vacationDvDropZone = Ext.create('Ext.dd.DropZone', dataViewListaProdutosMercado.ownerCt.el,  onVacationDropZoneCfg);
//    //