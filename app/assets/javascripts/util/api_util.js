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

  createProject: function (params) {
    $.ajax({
      url: 'api/projects',
      type: 'post',
      data: {project: params},
      success: function (project) {
        window.location = "#/projects/" + project.id;
      },
      error: function (errors) {
        var errorMessages = errors.responseJSON;
        ApiActions.receiveErrors(errorMessages);
      }
    })
  },

  createContribution: function (params) {
    $.ajax({
      url: 'api/contributions',
      type: 'post',
      data: {contribution: params},
      success: function (contribution) {
        window.location = "#/projects/" + contribution.project_id;
      },
      error: function (errors) {
        console.log("Failed createContribution request");
        // var errorMessages = errors.responseJSON;
        // ApiActions.receiveErrors(errorMessages);
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
  }
}
