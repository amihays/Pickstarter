window.ApiActions = {
  receiveAllGenres: function (genres) {
    AppDispatcher.dispatch({
      actionType: window.GenreConstants.GENRES_RECEIVED,
      genres: genres
    })
  },

  receiveSingleGenre: function (genre) {
    AppDispatcher.dispatch({
      actionType: window.GenreConstants.GENRE_RECEIVED,
      genre: genre
    })
  },

  receiveSingleProject: function (project) {
    AppDispatcher.dispatch({
      actionType: window.ProjectConstants.PROJECT_RECEIVED,
      project: project
    })
  },

  receiveErrors: function (errors) {
    AppDispatcher.dispatch({
      actionType: window.ErrorConstants.ERRORS_RECEIVED,
      errors: errors
    })
  },

  receiveSingleProject: function (project) {
    AppDispatcher.dispatch({
      actionType: window.ProjectConstants.PROJECT_RECEIVED,
      project: project
    })
  },
}
