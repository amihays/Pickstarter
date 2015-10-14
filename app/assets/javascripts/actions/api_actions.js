window.ApiActions = {
  receiveAllGenres: function (genres) {
    AppDispatcher.dispatch({
      actionType: window.GenreConstants.GENRES_RECEIVED,
      genres: genres
    })
  }
}
