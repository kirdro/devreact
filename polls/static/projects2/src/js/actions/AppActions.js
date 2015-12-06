var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

console.log("appaction");


var AppActions = {
	addItem: function(item){
		AppDispatcher.handleViewAction({
			actionType:AppConstants.ADD_ITEM,
			item: item
		})
	},
	setColor: function(data) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SET_COLOR,
			data: data
		})
	}
};


module.exports = AppActions;
