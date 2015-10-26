window.ApiUtil = {
  signOut: function () {
    $.ajax({
      url: "session",
      type: "delete",
      success: function () {
        window.location = "/session/new";
      }
    })
  },

  fetchGenre: function (id) {
    $.ajax({
      url: "api/genres/" + id,
      type: "get",
      success: function (genre) {
        ApiActions.receiveSingleGenre(genre);
      },
      error: function () {
        console.log("Failed fetchGenre request");
      }
    })
  },

  fetchGenres: function () {
    $.ajax({
      url: "api/genres",
      type: "get",
      success: function (genres) {
        ApiActions.receiveAllGenres(genres);
      },
      error: function () {
        console.log("Failed fetchGenres request");
      }
    })
  },

  fetchProject: function (id) {
    $.ajax({
      url: "api/projects/" + id,
      type: "get",
      success: function (project) {
        ApiActions.receiveSingleProject(project);
      },
      error: function () {
        console.log("Failed fetchProject request");
      }
    })
  },

  fetchProjects: function () {
    $.ajax({
      url: "api/projects",
      type: "get",
      success: function (projects) {
        ApiActions.receiveProjects(projects);
      },
      error: function () {
        console.log("Failed fetchProjects request");
      }
    })
  },

  createProject: function (params, errorCallback) {
    $.ajax({
      url: 'api/projects',
      type: 'post',
      data: {project: params},
      success: function (project) {
        window.location = "#/projects/" + project.id;
      },
      error: function (errors) {
        errorCallback();
        var errorMessages = errors.responseJSON;
        ApiActions.receiveErrors(errorMessages);
      }
    })
  },

  updateProject: function (params, id, errorCallback) {
    $.ajax({
      url: 'api/projects/' + id,
      type: 'patch',
      data: {project: params},
      success: function (project) {
        window.location = "#/projects/" + project.id;
      },
      error: function (errors) {
        errorCallback();
        var errorMessages = errors.responseJSON;
        ApiActions.receiveErrors(errorMessages);
      }
    })
  },

  deleteProject: function (id) {
    $.ajax({
      url: 'api/projects/' + id,
      type: 'delete',
      success: function () {
        window.location = "#/";
      },
      error: function (errors) {
        var errorMessages = errors.responseJSON;
        ApiActions.receiveErrors(errorMessages);
      }
    })
  },

  createContribution: function (params, callback) {
    $.ajax({
      url: 'api/contributions',
      type: 'post',
      data: {contribution: params},
      success: function (contribution) {
        console.log('createContribution success')
        callback();
      },
      error: function (errors) {
        console.log(errors)
        var errorMessages = errors.responseJSON;
        ApiActions.receiveErrors(errorMessages);
      }
    })
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: 'users/' + window.CURRENT_USER.id,
      type: 'get',
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      },
      error: function () {
        console.log("Failed fetchCurrentUser request");
      }
    })
  },

  fetchOrderedProjects: function(params) {
    $.ajax({
      url: "api/projects",
      type: "get",
      data: params,
      success: function (projects) {
        ApiActions.receiveProjects(projects);
      },
      error: function () {
        console.log("Failed fetchProjects request");
      }
    })
  }
}
