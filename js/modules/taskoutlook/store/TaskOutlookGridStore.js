Ext.define('CVStuff.modules.taskoutlook.store.TaskOutlookGridStore', {
	extend : 'Ext.data.Store',    
	fields: [{
        name: "id",
        type: "int"
    }, {
        name: "prio",
        type: "int"
    }, {
        name: "task",
        type: "string"
    },{
        name: "timeEstimation",
        type: "int"
    },{
        name: "progress",
        type: "int"
    },{
        name: "status",
        type: "string"
    }],
	proxy : {
		type : 'ajax',
		api : {
			create : 'data/taskoutlook/save.php',
			read : 'data/taskoutlook/read.json',
			update : 'data/taskoutlook/save.php',
			destroy : 'data/taskoutlook/save.php'
		},
		reader : {
		    idProperty: "id",
			type : 'json',
			root : "data"
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			allowSingle : false
		},
		noCache : false
	},
	initComponent : function() {
		this.callParent(arguments);
	}
});