window.GenresIndex = React.createClass({
  getInitialState: function () {
    return {genres: []}
  },

  _onChange: function () {
    this.setState({genres: GenreStore.all()})
  },

  componentDidMount: function () {
    GenreStore.addChangeListener(this._onChange);
    ApiUtil.fetchGenres();
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div className="container genres-index margins-30-px">
        <div className="row">
          {this.state.genres.map(function (genre) {
            return <div key={genre.id} className="col-md-4 col-sm-6 col-xs-8"><GenreIndexItem key={genre.id} genre={genre}/></div>
          })}
        </div>
      </div>
    )
  }
});
