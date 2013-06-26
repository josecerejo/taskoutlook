
Ext.define('CVStuff.modules.default.controller.DefaultController', {
	extend : 'Ext.app.Controller',
	views : [ 'CVStuff.modules.default.view.MainPanel','CVStuff.modules.default.store.MainTreeMenu' ],
	init : function() {
		this.control( {
			'Desktop [id=desktopTree]' : {
				itemclick : this.loadModule
			}
		});
	},
	/**
	 * loads the selected module in main tabpanel
	 */
	loadModule : function(view, record) {
		if (!this.checkModuleVisibility(record.get('id'))) {
			var desktopTabPanel = Ext.ComponentQuery.query('[id=desktopTabPanel]')[0];
			var moduleToAdd = null;
			switch(record.get('id')){
			    case 'taskOutlook' : 
			    	if(!Ext.ComponentQuery.query('TaskOutlookTab')[0]){
			    		moduleToAdd = Ext.create('CVStuff.modules.taskoutlook.view.TaskOutlookTab');
			    	}else{
			    		desktopTabPanel.setActiveTab('TaskOutlookTab');
			    	}
				break;
			}
			if(moduleToAdd){
			    desktopTabPanel.add(moduleToAdd);
			    desktopTabPanel.setActiveTab(moduleToAdd);
			}
		}
	},
	/**
	 * check module visibility in main tabpanel
	 */
	checkModuleVisibility :function(moduleId){
		var desktopTabPanel = Ext.ComponentQuery.query('[id=desktopTabPanel]')[0];
		if(moduleToCheck = desktopTabPanel.down('[id='+moduleId+']')){
			desktopTabPanel.setActiveTab(moduleToCheck);
			return true;
		}else{
			return false;
		}
	}
});