(function(root) {
  var _contributions = [];
  var CONTRIBUTIONS_CHANGE_EVENT = "CONTRIBUTIONS_CHANGE_EVENT"

  var resetContributions = function (contributions) {
    _contributions = contributions;
  }

  root.ContributionsStore = $.extend({}, EventEmitter.prototype, {
    findByUserId: function (id) {
      var result = [];
      _contributions.forEach(function(contribution) {
        if (contribution.user_id === id) {
          result.push(contribution);
        }
      });
      return result;
    },

    findByProjectId: function (id) {
      var result = [];
      _contributions.forEach(function(contribution) {
        if (contribution.project_id === id) {
          result.push(contribution);
        }
      });
      return result;
    },

    addChangeListener: function (callback) {
      UserContributionStoreStore.on(CONTRIBUTIONS_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      ContributionStore.removeListener(CONTRIBUTIONS_CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ContributionConstants.CONTRIBUTIONS_RECEIVED:
          resetUser(payload.contributions);
          ContributionStore.emit(CONTRIBUTIONS_CHANGE_EVENT);
          break;
      }
    })
  })
}(this))
