
Ext.define('CVStuff.modules.taskoutlook.controller.TaskOutlookController', {
	extend : 'Ext.app.Controller',
	init : function() {
		this.control( {
			'EditorGridPanel' : {
				afterrender : this.onGridRendered
			},
			'[id=saveBtn]' : {
				click : this.onSaveBtnClick
			},
			'[id=revertBtn]' : {
				click : this.onRevertBtnClick
			},
			'[id=addTaskBtn]' : {
				click : this.onAddTaskBtnClick
			}
		});
	},
	/**
	 * load data into store and updates the chart
	 */
	onGridRendered : function(grid) {
		grid.getStore().load( {
			callback : function(records, operation, success) {
				if(success){
					this.updatePieChart(records);
				}
			},
			scope :this
		});
	},
	/**
	 * send to server the unsaved changes and reloads the chart in case of successfull response
	 */
	onSaveBtnClick : function(btn) {
		var gridPanel = btn.up('EditorGridPanel');
		gridPanel.getStore().sync( {
			success : function(options) {
			console.info(gridPanel.getStore().getRange());
			this.updatePieChart(gridPanel.getStore().getRange());
			},
			scope :this
		});
	},
	/**
	 * reject unsaved grid changes
	 */
	onRevertBtnClick : function(btn){
		btn.up('EditorGridPanel').getStore().rejectChanges();
	},
	/**
	 * add a new task to the grid
	 */
	onAddTaskBtnClick :function(btn){
		var newRecModel = Ext.create('CVStuff.modules.taskoutlook.model.TaskOutlookModel',{
			prio : 3,
			progress : 0,
			status : 'readyForDev'
		});
		newRecModel.setDirty();
		btn.up('EditorGridPanel').getStore().add(newRecModel);
	},
	/**
	 * update chart«s data
	 */
	updatePieChart :function(records){
		var chart = Ext.ComponentQuery.query('EditorChartPanel')[0];
		var arrToLoad = [];
		Ext.Object.each(this.prepareData(records), function(key, value, obj) {
			arrToLoad.push({
				'name' : key,
				'data' : value
			}); 
		},this);
		chart.chartStore.loadData(arrToLoad);
	},
	/**
	 * transfrom data from grid format to chart format
	 */
	prepareData : function(records) {
		var retObj = {};
		Ext.each(records, function(currRec) {
			if (!retObj[currRec.get('status')]) {
				retObj[currRec.get('status')] = 1;
			} else {
				retObj[currRec.get('status')] += 1;
			}
		}, this);
		return retObj;
	}
});