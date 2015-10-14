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
  }
  //
  // createProject: function () {
  //
  // },
  //
  // fetchProject: function () {
  //
  // }
}
