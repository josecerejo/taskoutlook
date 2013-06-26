Ext.define('CVStuff.modules.taskoutlook.view.TaskOutlookChartPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.EditorChartPanel',
    layout: 'fit',
    chartStore :  Ext.create('Ext.data.JsonStore', {
	    fields: ['name', 'data']

	}),
	initComponent : function() {
		this.items = [Ext.create('Ext.chart.Chart', {
		    renderTo: Ext.getBody(),
		    animate: true,
		    store : this.chartStore,
		    theme: 'Base:gradients',
		    series: [{
		        type: 'pie',
		        angleField: 'data',
		        showInLegend: true,
		        tips: {
		            trackMouse: true,
		            width: 150,
		            height: 28,
		            /**
		             * fomat chart tip messages (onmouseover)
		             */
		            renderer: function(storeItem, item) {
		                var total = 0;
		                this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data')+ ' tickets.');
		            }
		        },
		        highlight: {
		            segment: {
		                margin: 20
		            }
		        },
		        label: {
		            field: 'name',
		            display: 'rotate',
		            contrast: true,
		            font: '18px Arial'
		        }
		    }]
		}, this)];
		this.callParent(arguments);
	}
});