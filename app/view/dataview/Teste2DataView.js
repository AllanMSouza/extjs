Ext.define('AppName.view.dataview.Teste2Dataview',{
    extend: 'Ext.panel.Panel',
});

var dragZoneOverrides = {
        containerScroll : true,
        scroll          : false,
        getDragData     : function(evtObj){
            var dataView = this.dataView;
            var sourceEl = evtObj.getTarget(dataView.itemSelector, 10);

            if (sourceEl) {
                var selectedNodes = dataView.getSelectedNodes();
                var dragDropEl = document.createElement('div');

                if (selectedNodes.length < 1) {
                    selectedNodes.push(sourceEl);
                }

                Ext.each(selectedNodes, function(node) {
                    dragDropEl.appendChild(node.cloneNode(true));
                });
                return {
                    ddel           : dragDropEl,
                    repairXY       : Ext.fly(sourceEl).getXY(),
                    dragRecords    : dataView.getSelectedRecords(),
                    sourceDataView : dataView
                };
            }

        },
        getRepairXY: function() {
            return this.dragData.repairXY;
        }
    };


    var onStaffDragZoneCfg = Ext.apply({}, {
        ddGroup     : 'employeeDD',
        dataView    : onStaffDV
    }, dragZoneOverrides);

    new Ext.dd.DragZone(onStaffDV.getEl(), onStaffDragZoneCfg);

    var vacationDragZoneCfg = Ext.apply({}, {
        ddGroup     : 'employeeDD',
        dataView    : onVactionDV
    }, dragZoneOverrides);

    new Ext.dd.DragZone(onVactionDV.getEl(), vacationDragZoneCfg);


        /***
         * Drop zone dcode
         */
    var dropZoneOverrides = {
        onContainerOver : function() {
          return this.dropAllowed;
        },
        onContainerDrop : function(dropZone, evtObj, dragData) {

            var dragRecords = dragData.dragRecords;
            var store = this.dataView.store;

            var dupFound = false;

            Ext.each(dragRecords, function(record) {

                var found = store.findBy(function(r) {
                   return r.data.id === record.data.id;
                });

                if (found > -1 ) {
                    dupFound = true;
                }
            });

            if (dupFound !== true) {
                Ext.each(dragRecords, function(record) {
                    dragData.sourceDataView.store.remove(record);
                });
                this.dataView.store.add(dragRecords);
                this.dataView.store.sort('lastname', 'ASC');
            }

            return true;
        }
    };

    var onStaffDropZoneCfg = Ext.apply({}, {
        ddGroup          : 'employeeDD',
        dataView         : onStaffDV
    }, dropZoneOverrides);

    var onStaffDVDropZone = new Ext.dd.DropZone(onStaffDV.ownerCt.el, onStaffDropZoneCfg);

    var onVacationDropZoneCfg = Ext.apply({}, {
        ddGroup          : 'employeeDD',
        dataView         : onVactionDV
    }, dropZoneOverrides);

    var vacationDvDropZone = new Ext.dd.DropZone(onVactionDV.ownerCt.el,  onVacationDropZoneCfg);
    //