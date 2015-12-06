var Dispatcher = require('./Dispatcher');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    this.dispatch({
    source: 'VIEW_ACTION',
    action: {
      type: 'TODO_CREATE',
      text: 'Write blog post about Flux'
    }
  });
  },
  waitFor: function(promiseIndexes, callback) {
    var selectedPromises = promiseIndexes.map(function(index) {
      return _promises[index];
    });
    return Promise.all(selectedPromises).then(callback);
  }

});


module.exports = AppDispatcher;