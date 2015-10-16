(function(root) {
  var ERRORS_CHANGE_EVENT = "ERRORS_CHANGE_EVENT";
  var _errors = [];
  var addErrors = function (errors) {
    _errors = errors;
  }
  var resetErrors = function (errors) {
    _errors = [];
  }

  $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _errors.slice();
    },

    addChangeListener: function (callback) {
      this.on(ERRORS_CHANGE_EVENT, callback)
    },

    removeChangeListener: function (callback) {
      this.removeListener(ERRORS_CHANGE_EVENT, callback)
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ErrorConstants.ERRORS_RECEIVED:
          addErrors(payload.errors);
          ErrorStore.emit(ERRORS_CHANGE_EVENT);
          resetErrors(payload.errors);
          break;
      }
    })
  })
}())
