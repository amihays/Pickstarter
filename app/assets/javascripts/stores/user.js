(function(root) {
  var _user = {};
  var USER_CHANGE_EVENT = "USER_CHANGE_EVENT";
  var USERS_CHANGE_EVENT = "USERS_CHANGE_EVENT";

  var resetUser = function (user) {
    _user = user;
  }

  var _users = [];

  var resetUsers = function (users) {
    _users = users;
  }


  root.UserStore = $.extend({}, EventEmitter.prototype, {
    currentUser: function () {
      return $.extend({}, _user);
    },

    addCurrentUserChangeListener: function (callback) {
      UserStore.on(USER_CHANGE_EVENT, callback);
    },

    removeCurrentUserChangeListener: function (callback) {
      UserStore.removeListener(USER_CHANGE_EVENT, callback);
    },

    addChangeListener: function (callback) {
      UserStore.on(USERS_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      UserStore.removeListener(USERS_CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case UserConstants.USER_RECEIVED:
          resetUser(payload.user);
          UserStore.emit(USER_CHANGE_EVENT);
          break;
        case UserConstants.USERS_RECEIVED:
          resetUsers(payload.users);
          UserStore.emit(USERS_CHANGE_EVENT);
          break;
      }
    })
  })
}(this))
