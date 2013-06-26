Ext.application({
    name: 'CVStuff',
    appFolder: 'js',
    paths: {
        'CVStuff.common': 'js/modules/common',
        'CVStuff.core' : 'js/libs/core',
        'Ext' : 'js/libs/ext/src'
    },
    controllers: ['CVStuff.modules.default.controller.DefaultController','CVStuff.modules.taskoutlook.controller.TaskOutlookController'],
    launch: function() {
    	CVStuff.app = this;
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: Ext.create('CVStuff.modules.default.view.MainPanel')
        });
    }
});