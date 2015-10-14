// (function(root) {
//   var _projects = [];
//   var PROJECTS_INDEX_CHANGE_EVENT = "projectsIndexChange"
//
//   var resetProjects = function (projects) {
//     _projects = projects;
//   }
//
//   root.ProjectStore = $.extend({}, EventEmitter.prototype, {
//     all: function () {
//       return _projects.slice();
//     },
//
//     addChangeListener: function (callback) {
//       ProjectStore.on(PROJECTS_INDEX_CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function (callback) {
//       ProjectStore.removeListener(PROJECTS_INDEX_CHANGE_EVENT, callback);
//     },
//
//     dispatcherId: AppDispatcher.register(function (payload) {
//       switch(payload.actionType) {
//         case ProjectConstants.PROJECTS_RECEIVED:
//           resetProjects(payload.projects);
//           ProjectStore.emit(PROJECTS_INDEX_CHANGE_EVENT);
//           break;
//       }
//     })
//   })
// }(this))
