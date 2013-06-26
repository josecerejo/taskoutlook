Ext.define('CVStuff.modules.taskoutlook.view.TaskOutlookGridPanel', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.EditorGridPanel',
	initComponent : function() {
		this.tbar = [ {
            text: 'Add new ticket',
            id: 'addTaskBtn',
            iconCls : 'add-icon'
        },'->',{
            text: 'Save',
            id: 'saveBtn',
            iconCls : 'save-icon'
        },{
            xtype: 'tbseparator'
        },{
            text: 'Revert changes',
            id: 'revertBtn',
            iconCls : 'revert-icon',
        }]
 		this.columns = [{
	            text: 'Priority',
	            dataIndex: 'prio',
	            menuDisabled: true,
	            width : 45, 
	            editor: Ext.create('Ext.form.field.Number', {
	                selectOnFocus: true,
	                selectOnTab: true,
	                maxValue: 3,
	                minValue : 1,
	                allowDecimal : false
	            }),
	            /**
	             * display arrows in priority column
	             */
	            renderer: function(val, meta, record) {
	        		switch(val){
	        			case 3:
	        				meta.style = 'background-image:url(images/arrow_down.png); background-repeat: no-repeat; background-position: center;'
	        				break;
	        			case  2:
	        				meta.style = 'background-image:url(images/arrow_left.png); background-repeat: no-repeat; background-position: center;'
	        				break;
	        			case  1:
	        				meta.style = 'background-image:url(images/arrow_up.png);background-repeat: no-repeat; background-position: center;'
	        				break;
	        		}
	            }
 			},{
                text: 'Task description',
                dataIndex: 'task',
                flex : 5, 
                editor: Ext.create('Ext.form.field.TextArea', {
                    selectOnFocus: true,
                    grow: true,
                    selectOnTab: true
                })
            },{
	            text: 'Time est.',
	            dataIndex: 'timeEstimation',
	            menuDisabled: true,
	            width : 60, 
	            editor: Ext.create('Ext.form.field.Number', {
	                selectOnFocus: true,
	                selectOnTab: true,
	                maxValue: 99,
	                minValue : 1,
	                allowDecimal : false
	            }),
	            renderer: function(val, meta, record) {
            		return val + 'h';
	            }
 			},{
	            text: 'Progress',
	            dataIndex: 'progress',
	            menuDisabled: true,
	            width : 60,
	            editor: Ext.create('Ext.form.field.Number', {
	                selectOnFocus: true,
	                selectOnTab: true,
	                maxValue: 100,
	                minValue : 0,
	                allowDecimal : false
	            }),
	            /**
	             * shows the current progress of the task
	             */
	            renderer: function(val, meta, record) {
            		return val + '%';
	            }
 			},{
                text: 'Status',
                dataIndex: 'status',
                width : 90,
                editor : Ext.create('Ext.form.field.ComboBox', {
                    selectOnTab: true,
                    forceSelection: true,
                    valueField: 'name',
                    displayField: 'name',
                    cls: 'editorCombo',
                    store: ['readyForDev', 'onHold', 'inProgress', 'done'],
                    listeners : {
                	/**
                	 * updates progres column value in case the task is completed/created
                	 */
                		select : function(combo, rec){
                			var grid = combo.up('EditorGridPanel');
                			var selectedGridRecord = grid.getView().getSelectionModel().getSelection()[0];
                			switch(combo.getValue()){
	                			case 'readyForDev':
	                				selectedGridRecord.set('progress', 0);
                				break;
	                			case 'done':
	                				selectedGridRecord.set('progress', 100);
	            				break;
                			}
                		}
                	}
                })
            },
            Ext.create('Ext.grid.column.Action', {
                width: 25,
                items: [{
                    icon: 'images/cross.png',
                    tooltip: 'Remove this task',
                    handler: function(grid, rowIndex, colIndex) {
                        var gridStore = grid.getStore();
                        var rec       = gridStore.getAt(rowIndex);
                        gridStore.remove(rec);
                    }
                }]
            })];
		this.store = Ext.create('CVStuff.modules.taskoutlook.store.TaskOutlookGridStore');
        this.plugins  = [Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })];
		this.callParent(arguments);
	}
});