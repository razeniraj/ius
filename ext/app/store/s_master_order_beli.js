Ext.define('YMPI.store.s_master_order_beli', {
	extend	: 'Ext.data.Store',
	alias	: 'widget.master_order_beliStore',
	model	: 'YMPI.model.m_master_order_beli',
	
	autoLoad	: false,
	autoSync	: false,
	
	storeId		: 'master_order_beli',
	
	pageSize	: 15, // number display per Grid
	
	proxy: {
		type: 'ajax',
		api: {
			read    : 'c_master_order_beli/getAll',
			create	: 'c_master_order_beli/save',
			update	: 'c_master_order_beli/save',
			destroy	: 'c_master_order_beli/delete'
		},
		actionMethods: {
			read    : 'POST',
			create	: 'POST',
			update	: 'POST',
			destroy	: 'POST'
		},
		reader: {
			type            : 'json',
			root            : 'data',
			rootProperty    : 'data',
			successProperty : 'success',
			messageProperty : 'message'
		},
		writer: {
			type            : 'json',
			writeAllFields  : true,
			root            : 'data',
			encode          : true
		},
		listeners: {
			exception: function(proxy, response, operation){
				Ext.MessageBox.show({
					title: 'REMOTE EXCEPTION',
					msg: operation.getError(),
					icon: Ext.MessageBox.ERROR,
					buttons: Ext.Msg.OK
				});
			}
		}
	},
	
	constructor: function(){
		this.callParent(arguments);
	}
	
});