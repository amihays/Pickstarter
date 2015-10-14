window.GenresIndex = React.createClass({
  getInitialState: function () {
    return {genres: []}
  },

  _onChange: function () {
    this.setState({genres: GenreStore.all()})
  },

  componentDidMount: function () {
    GenreStore.addChangeListener(this._onChange)
    ApiUtil.fetchGenres();
  },

  render: function () {
    return(
      <ul>
        {this.state.genres.map(function (genre) {
          return <GenreIndexItem key={genre.id} genre={genre}/>
        })}
      </ul>
    )
  }
});
