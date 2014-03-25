Ext.define('AppName.view.paineldecontrole.PanelHeaderPedidos',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.panelHeaderPedidos',
    id: 'panelHeaderPedidos',
    
    autoShow: true,
    region: 'north',
    border: false,
    height: 60,
    html: '<div class="x-component x-box-item x-component-default" id="app-header-title" style="right: auto; left: 0px; margin: 0px; width: 1735px; top: 2px;">Pedidos</div>',
    bodyStyle: 'background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#8fc33a),color-stop(100%,#739b2e));' +
                'background-image: -webkit-linear-gradient(top,#FF8040,#FF5600);' +
//                'background-image: -moz-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: -o-linear-gradient(top,#8fc33a,#739b2e);' +
//                'background-image: linear-gradient(top,#8fc33a,#739b2e);' +
                'border-bottom: 1px solid #567422;' +
                'border-top: 1px solid #8fc33a;' +
                'border-left: 1px solid #8fc33a;' +
                'border-right: 1px solid #8fc33a;' ,
//    split: true
    
});