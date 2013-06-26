/**
 * Application main container
 */
Ext.define('CVStuff.modules.default.view.MainPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.Desktop',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		this.items = [ Ext.create('Ext.tree.Panel', {
			rootVisible : false,
			id : 'desktopTree',
			region : 'west',
			title : "Carlo's stuff",
			width : 250,
			padding : '0 1 1 3',
			collapsed : false,
			collapsible : true,
			store : Ext.create('CVStuff.modules.default.store.MainTreeMenu')
		}), {
			region : 'center',
			layout : 'fit',
			xtype : 'tabpanel',
			id : 'desktopTabPanel',
			frame : true,
			bodyBorder : false,
			border : 0,
/*			tabBar : {
				hidden : true
			},*/
			margins : '0 0 1 0'
		} ];
		this.callParent(arguments);
	}
});