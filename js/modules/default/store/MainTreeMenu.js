/**
 * Loads data into module treepanel
 */
Ext.define('CVStuff.modules.default.store.MainTreeMenu', {
	extend : 'Ext.data.TreeStore',
	proxy : {
		type : 'ajax',
		url : 'data/default/tree/read.json'
	},
	root : {
		text : '',
		id : null,
		expanded : true
	}
});