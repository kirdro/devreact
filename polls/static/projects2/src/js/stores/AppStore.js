var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var  state = {
	setColor: "red"
};

console.log("appstore");

function setColor(action) {
	if (action.data == "red") {
		state.setColor = "green";
	}
	else if (action.data == "green") {
		state.setColor = "grey";
	}
	else if (action.data == "grey") {
		state.setColor = "red";
	}
}

var CHANGE_EVENT = 'change';


var AppStore = assign({}, EventEmitter.prototype, {
	getState: function() {
		return state;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    route: function(actionType) {
    	switch (actionType) {
    		case AppConstants.SET_COLOR:
    		return setColor;
    	}
    }
});
	

AppDispatcher.register(function(payload){
	var func = AppStore.route(payload.action.actionType);
	if (func != null) {
		func(payload.action);
		AppStore.emitChange();
	};
	return true;
});

module.exports = AppStore;
