(function(root) {
  var _projects = [];
  var PROJECTS_CHANGE_EVENT = "projectsChange"

  var resetProjects = function (projects) {
    _projects = projects;
  };

  var swapProject = function (project) {
    var found = false;
    _projects.forEach(function(proj, idx) {
      if (proj.id === project.id) {
        _projects[idx] = project;
        found = true;
      }
    })
    if (!found) {
      _projects.push(project);
    }
  };

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
    },

    find: function (id) {
      var project;
      _projects.forEach(function(proj){
        if (proj.id === id) {
          project = proj;
        }
      })
      return _projects[_projects.indexOf(project)];
    },

    findByUserId: function (id) {
      var result = [];
      projects.forEach(function(project) {
        if (project.user_id === id) {
          result.push(project);
        }
      });
      return result;
    },

    addChangeListener: function (callback) {
      ProjectStore.on(PROJECTS_CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      ProjectStore.removeListener(PROJECTS_CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ProjectConstants.PROJECT_RECEIVED:
          swapProject(payload.project);
          ProjectStore.emit(PROJECTS_CHANGE_EVENT);
          break;
      }
    })
  })
}(this))
