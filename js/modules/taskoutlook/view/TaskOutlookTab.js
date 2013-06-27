Ext.define('CVStuff.modules.taskoutlook.view.TaskOutlookTab', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.TaskOutlookTab',
	title : 'Task Outlook',
	closable : true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    defaults : {
    	flex : 1
    },
	initComponent : function() {
		this.items = [
				Ext.create('CVStuff.modules.taskoutlook.view.TaskOutlookGridPanel', {
					border : 1
				}),
				Ext.create('CVStuff.modules.taskoutlook.view.TaskOutlookChartPanel',{
					margin :60,
					border : 0
				})]
		this.callParent(arguments);
	}
});
