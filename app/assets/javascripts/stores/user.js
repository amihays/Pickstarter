(function(root) {
  var _user = {};
  var USER_CHANGE_EVENT = "USER_CHANGE_EVENT"

  var resetUser = function (user) {
    _user = user;
  }

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      return $.extend({}, _user);
    },

    addChangeListener: function (callback) {
      UserStore.on(USER_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      UserStore.removeListener(USER_CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case UserConstants.USER_RECEIVED:
          resetUser(payload.user);
          UserStore.emit(USER_CHANGE_EVENT);
          break;
      }
    })
  })
}(this))
