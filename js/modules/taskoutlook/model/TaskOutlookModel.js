/**
 * Grid Model definition
 */
Ext.define('CVStuff.modules.taskoutlook.model.TaskOutlookModel', {
    extend: 'Ext.data.Model',
    fields: [{
        name: "id",
        type: "int"
    }, {
        name: "prio",
        type: "int"
    },{
        name: "task",
        type: "string"
    }, {
        name: "timeEstimation",
        type: "int"
    },{
        name: "progress",
        type: "int"
    }, {
        name: "status",
        type: "string"
    }]
})